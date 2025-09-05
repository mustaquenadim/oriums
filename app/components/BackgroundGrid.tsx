export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 select-none">
      {/* Vertical lines */}
      <div className="absolute inset-0 flex justify-between">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-full w-px bg-gradient-to-b from-border via-border to-transparent" />
        ))}
      </div>

      {/* Horizontal lines */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-px w-full bg-gradient-to-r from-border via-border to-transparent" />
        ))}
      </div>
    </div>
  )
}
