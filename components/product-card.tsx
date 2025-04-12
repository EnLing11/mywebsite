import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ProductCardProps {
  title: string
  description: string
  price: string
  imageSrc: string
}

export function ProductCard({ title, description, price, imageSrc }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="overflow-hidden">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={300}
            height={300}
            className="w-full h-[200px] object-cover transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-1">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="mt-2">
          <p className="font-medium">{price}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href="#">View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
