import { SiteHeader } from "@/components/site-header"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[#004D40] text-xl font-medium mb-6">Our mission</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              We're making homeownership simpler, faster — and most importantly, more accessible for all Americans.
            </h1>
          </div>
        </section>
      </main>
    </div>
  )
}
