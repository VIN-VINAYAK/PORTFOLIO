import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import type { Theme } from '../hooks/useTheme'

/**
 * Fixed full-screen WebGL background: a neural-network particle tunnel, a wireframe "core",
 * and one 3D shape per section. Scrolling flies the camera forward; the mouse adds parallax.
 */
export default function Scene({ theme }: { theme: Theme }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const applyTheme = useRef<(light: boolean) => void>(() => {})
  const themeRef = useRef(theme)
  themeRef.current = theme

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    } catch {
      return // WebGL unavailable: the glass UI still works without the 3D background
    }
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const fog = new THREE.FogExp2(0x04060f, 0.02)
    scene.fog = fog
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 300)
    const N = innerWidth < 760 ? 240 : 520

    const resize = () => {
      renderer.setSize(innerWidth, innerHeight, false)
      camera.aspect = innerWidth / innerHeight
      camera.updateProjectionMatrix()
    }
    resize()

    // Soft round sprite for the particles
    const sprite = document.createElement('canvas')
    sprite.width = sprite.height = 64
    const sx = sprite.getContext('2d')!
    const grad = sx.createRadialGradient(32, 32, 0, 32, 32, 32)
    grad.addColorStop(0, '#fff')
    grad.addColorStop(0.3, 'rgba(255,255,255,.55)')
    grad.addColorStop(1, 'rgba(255,255,255,0)')
    sx.fillStyle = grad
    sx.fillRect(0, 0, 64, 64)

    // Particles
    const palette = [0x22d3ee, 0x8b5cf6, 0xe879f9].map((c) => new THREE.Color(c))
    const P: number[] = []
    const K: number[] = []
    for (let i = 0; i < N; i++) {
      P.push((Math.random() - 0.5) * 90, (Math.random() - 0.5) * 50, 10 - Math.random() * 165)
      const c = palette[i % 3]
      K.push(c.r, c.g, c.b)
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.Float32BufferAttribute(P, 3))
    pGeo.setAttribute('color', new THREE.Float32BufferAttribute(K, 3))
    const pMat = new THREE.PointsMaterial({
      size: 1.2,
      map: new THREE.CanvasTexture(sprite),
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const points = new THREE.Points(pGeo, pMat)
    scene.add(points)

    // Connections between nearby particles
    const L: number[] = []
    for (let i = 0; i < N && L.length < 6000; i++) {
      for (let j = i + 1; j < N; j++) {
        const a = P[i * 3] - P[j * 3]
        const b = P[i * 3 + 1] - P[j * 3 + 1]
        const c = P[i * 3 + 2] - P[j * 3 + 2]
        if (a * a + b * b + c * c < 115) L.push(P[i * 3], P[i * 3 + 1], P[i * 3 + 2], P[j * 3], P[j * 3 + 1], P[j * 3 + 2])
      }
    }
    const lGeo = new THREE.BufferGeometry()
    lGeo.setAttribute('position', new THREE.Float32BufferAttribute(L, 3))
    const lMat = new THREE.LineBasicMaterial({ color: 0x4aa8ff, transparent: true, opacity: 0.17, blending: THREE.AdditiveBlending, depthWrite: false })
    scene.add(new THREE.LineSegments(lGeo, lMat))

    // Hero core + one shape per section
    const wMats: THREE.MeshBasicMaterial[] = []
    const wire = (color: number) => {
      const m = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.55 })
      wMats.push(m)
      return m
    }
    const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(3.2, 1), wire(0x22d3ee))
    const inner = new THREE.Mesh(new THREE.IcosahedronGeometry(1.5, 0), new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.35 }))
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(4.8, 0.03, 8, 100), new THREE.MeshBasicMaterial({ color: 0xe879f9 }))
    const ring2 = ring1.clone()
    ring2.scale.setScalar(1.25)
    const core = new THREE.Group()
    core.add(ico, inner, ring1, ring2)
    core.position.set(innerWidth > 900 ? 5.5 : 0, 0, -12)
    scene.add(core)

    const shapes: [THREE.BufferGeometry, number, number, number][] = [
      [new THREE.TorusKnotGeometry(3, 0.8, 120, 12), 0x22d3ee, -6, -52],
      [new THREE.OctahedronGeometry(3.5), 0x8b5cf6, 7, -82],
      [new THREE.DodecahedronGeometry(3.6), 0xe879f9, -7, -110],
      [new THREE.TorusGeometry(5, 1.2, 16, 60), 0x22d3ee, 6, -136],
    ]
    const waypoints = shapes.map(([geo, color, x, z]) => {
      const m = new THREE.Mesh(geo, wire(color))
      m.position.set(x, 0, z)
      scene.add(m)
      return m
    })

    applyTheme.current = (light) => {
      const blend = light ? THREE.NormalBlending : THREE.AdditiveBlending
      fog.color.set(light ? 0xe9eefb : 0x04060f)
      pMat.blending = blend
      pMat.opacity = light ? 0.85 : 1
      pMat.needsUpdate = true
      lMat.blending = blend
      lMat.color.set(light ? 0x5b6fd6 : 0x4aa8ff)
      lMat.opacity = light ? 0.32 : 0.17
      lMat.needsUpdate = true
      wMats.forEach((m) => (m.opacity = light ? 0.85 : 0.55))
    }
    applyTheme.current(themeRef.current === 'light')

    // Animation loop
    const clock = new THREE.Clock()
    let sp = 0, mx = 0, my = 0, tmx = 0, tmy = 0, raf = 0
    const onMove = (e: PointerEvent) => {
      tmx = e.clientX / innerWidth - 0.5
      tmy = e.clientY / innerHeight - 0.5
    }
    const loop = () => {
      raf = requestAnimationFrame(loop)
      const t = clock.getElapsedTime()
      const k = reduce ? 0 : 1
      const max = document.documentElement.scrollHeight - innerHeight
      sp += ((max > 0 ? scrollY / max : 0) - sp) * 0.06
      mx += (tmx - mx) * 0.05
      my += (tmy - my) * 0.05
      camera.position.set(mx * 6 + Math.sin(sp * 9.4) * 4, -my * 4 + Math.cos(sp * 6.3) * 2, 5 - sp * 135)
      camera.rotation.set(-my * 0.12, -mx * 0.2 + Math.sin(sp * 9.4) * 0.08, Math.sin(sp * 6) * 0.05)
      ico.rotation.set(t * 0.2 * k, t * 0.3 * k, 0)
      inner.rotation.set(-t * 0.4 * k, t * 0.3 * k, 0)
      ring1.rotation.set(t * 0.3 * k, t * 0.2 * k, 0)
      ring2.rotation.set(1.2, -t * 0.25 * k, t * 0.2 * k)
      core.position.y = Math.sin(t) * 0.5 * k
      points.rotation.z = t * 0.004 * k
      waypoints.forEach((m, i) => {
        m.rotation.x = t * (0.15 + i * 0.05) * k
        m.rotation.y = t * 0.22 * k
      })
      renderer.render(scene, camera)
    }
    loop()

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh || o instanceof THREE.Points || o instanceof THREE.LineSegments) o.geometry.dispose()
      })
      pMat.dispose()
      lMat.dispose()
      wMats.forEach((m) => m.dispose())
      renderer.dispose()
    }
  }, [])

  useEffect(() => {
    applyTheme.current(theme === 'light')
  }, [theme])

  return (
    <>
      <canvas id="gl" ref={canvasRef} />
      <div className="fog" />
    </>
  )
}
