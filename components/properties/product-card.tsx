import { Heart } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Property } from "@/types"

interface ProductCardProps {
    property: Property
}

export function ProductCard({ property }: ProductCardProps) {
    const { imageUrl, price, beds, baths, sqft, address, city, state, zip, propertyType, isNew, newHoursAgo, acres } =
        property

    const isLand = propertyType === "Land"

    return (
        <div className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-md">
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={`Property at ${address}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                />

                <button
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100"
                    aria-label="Add to favorites"
                >
                    <Heart className="w-5 h-5 text-gray-500" />
                </button>

                {isNew && (
                    <div className="absolute top-2 left-2">
                        <Badge className="bg-blue-600 hover:bg-blue-700">New - {newHoursAgo} hours ago</Badge>
                    </div>
                )}
            </div>

            <div className="p-4">
                <div className="flex items-center mb-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-xs text-gray-600">{propertyType}</span>
                </div>

                <h3 className="text-xl font-bold mb-2">Rs.{price.toLocaleString()}</h3>

                <div className="flex items-center text-sm text-gray-700 mb-2">
                    {!isLand ? (
                        <>
                            <span>{beds} bed</span>
                            <span className="mx-2">•</span>
                            <span>{baths} bath</span>
                            <span className="mx-2">•</span>
                            <span>{sqft && sqft.toLocaleString()} sqft</span>
                        </>
                    ) : (
                        <span>{acres} acres lot</span>
                    )}
                </div>

                <p className="text-sm text-gray-600 truncate">{address}</p>
                <p className="text-sm text-gray-600 truncate">
                    {city}, {state} {zip}
                </p>
            </div>
        </div>
    )
}

