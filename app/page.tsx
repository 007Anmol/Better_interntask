import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative bg-[#004D40] text-white overflow-hidden">
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
            <div className="max-w-5xl mx-auto text-center mb-8">
              <h1 className="text-[#4AE3B5] text-4xl md:text-6xl lg:text-7xl font-semibold mb-8">
                Mortgages
                <br />
                made simple
              </h1>
              <Button className="bg-[#4AE3B5] text-black hover:bg-[#3AD4A6] text-lg px-8 py-6 h-auto">
                Start my approval
              </Button>
              <div className="mt-4 text-sm opacity-80">3 min | No credit impact</div>
            </div>
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <Image
                  src="https://sjc.microlink.io/rhXpe5tc2dArndzCVGq15m2ZTOZaPR8lHSa1fYatqq59bqnl6tWkozxWRt0GlfDUx-r3tufW2zwojnmTG8q3Ug.jpeg"
                  alt="Phone showing approval message"
                  width={300}
                  height={600}
                  className="rounded-lg"
                />
                <div className="flex items-center gap-1 ml-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-[#4AE3B5]" : "fill-gray-400"}`} />
                    ))}
                  </div>
                  <span className="text-sm">4.8 Stars | 3177 Google reviews</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

