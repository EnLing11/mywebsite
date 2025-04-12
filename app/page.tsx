import Link from "next/link"
import { PhoneCase3D } from "@/components/phone-case-3d"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Instagram, MessageSquare } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl">
              EnLing&apos;s Studio
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#products" className="text-sm font-medium hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="#phone-straps" className="text-sm font-medium hover:underline underline-offset-4">
              Phone Straps
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Instagram className="mr-2 h-4 w-4" />
              Follow
            </Button>
            <Button size="sm">Shop Now</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">My Dora Site</h1>
                  <p className="text-muted-foreground md:text-xl">
                    Made in Dora - Stylish phone cases for Apple & Android
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Shop Collection</Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="h-[400px] lg:h-[600px] flex items-center justify-center">
                <PhoneCase3D />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Products</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our collection of stylish and customizable phone cases for Apple and Android devices.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <ProductCard
                title="Kuromi Pattern"
                description="Available for Apple & Android"
                price="FROM RM27"
                imageSrc="/images/kuromi-case.jpg"
              />
              <ProductCard
                title="Hello Kitty Collection"
                description="Available for Apple & Android"
                price="FROM RM24.50"
                imageSrc="/images/hello-kitty-case.jpg"
              />
              <ProductCard
                title="Cinnamoroll Blue"
                description="Available for Apple & Android"
                price="RM 25"
                imageSrc="/images/cinnamoroll-case.jpg"
              />
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
              <ProductCard
                title="Puppy Duo"
                description="Available for Apple & Android"
                price="FROM RM28"
                imageSrc="/images/puppy-case.jpg"
              />
              <ProductCard
                title="Lovely Fox"
                description="Available for Apple & Android"
                price="FROM RM26"
                imageSrc="/images/fox-case.jpg"
              />
              <ProductCard
                title="Rose Bunny"
                description="Available for Apple & Android"
                price="RM 27"
                imageSrc="/images/rose-bunny-case.jpg"
              />
            </div>
          </div>
        </section>

        <section id="phone-straps" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">PHONE STRAPS</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Complement your phone case with our stylish phone straps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <ProductCard
                title="Lucky Charm"
                description="Available with various designs"
                price="RM 15"
                imageSrc="/images/lucky-charm-case.jpg"
              />
              <ProductCard
                title="Winnie the Pooh"
                description="Available for all models"
                price="RM 15"
                imageSrc="/images/pooh-case.jpg"
              />
              <ProductCard
                title="Anime Collection"
                description="Limited edition designs"
                price="RM 18"
                imageSrc="/images/anime-case.jpg"
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About EnLing&apos;s Studio</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We sell customized mobile phone cases on various platforms including Shopee and Instagram. Our
                    mission is to provide stylish and protective cases for your devices.
                  </p>
                </div>
                <div>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                  <img
                    src="/images/kuromi-case.jpg"
                    alt="About EnLing's Studio"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  For business or career inquiries, reach out to us.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-4">
                <div className="flex flex-col space-y-2 text-center">
                  <p className="text-sm font-medium">Email: enlingliew11@gmail.com</p>
                  <p className="text-sm font-medium">Phone: +6016-585 4212</p>
                  <p className="text-sm font-medium">Location: Tawau, Sabah</p>
                </div>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="icon">
                    <MessageSquare className="h-4 w-4" />
                    <span className="sr-only">WhatsApp</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 EnLing&apos;s Studio. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Shipping
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
          <div className="flex gap-4">
            <p className="text-sm text-muted-foreground">Payment Methods:</p>
            <p className="text-sm text-muted-foreground">DuitNow QR, Touch & Go, Boost</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
