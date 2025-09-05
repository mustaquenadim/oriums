import Link from "next/link"

export default function TopBanner() {
  return (
    <div className="relative z-50 flex items-center justify-center bg-primary px-4 py-2 text-sm text-primary-foreground">
      <div className="flex items-center space-x-2">
        <span>🚀 Export your site to React.</span>
        <Link href="#" className="font-medium underline hover:opacity-90">
          Try it now
        </Link>
      </div>
    </div>
  )
}
