import type { LucideIcon } from "lucide-react"

export type TourPlace = {
    name: string
    description: string
    image: string
}

export type TourInclusion = {
    title: string
    description: string
    icon: LucideIcon
}

export type TourHighlight = {
    title: string
    description: string
    icon: LucideIcon
}

export type TourPackage = {
    id: number
    slug: string
    title: string
    category: "Domestic Tour" | "International Tour"
    location: string
    duration: string
    price: string
    heroImage: string
    cardImage: string
    shortDescription: string
    description: string
    inclusions: TourInclusion[]
    places: TourPlace[]
    highlights: TourHighlight[]
}