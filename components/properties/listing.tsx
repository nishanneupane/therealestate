import { Property } from "@/types"
import { ProductCard } from "./product-card"

interface ListingSectionProps {
    title: string
    viewAllLink: string
    properties: Property[]
}

export function ListingSection({ title, viewAllLink, properties }: ListingSectionProps) {
    return (
        <section className="mb-12">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <a href={viewAllLink} className="text-sm text-blue-600 hover:underline">
                    View all in this category →
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {properties.map((property) => (
                    <ProductCard key={property.id} property={property} />
                ))}
            </div>
        </section>
    )
}

