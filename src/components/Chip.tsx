import type { Chip as ChipData } from '../data/content'

export default function Chip({ label, learning }: ChipData) {
  return <span className={`chip${learning ? ' lr' : ''}`}>{label}</span>
}
