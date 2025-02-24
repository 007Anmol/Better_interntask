import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold text-xl">
            Better
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Buy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Refinance
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              HELOC
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Rates
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Better+
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="font-medium">
            Sign in
          </Button>
        </div>
      </div>
    </header>
  )
}

