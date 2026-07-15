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

export type BookingFormData = {
  fullName: string
  mobile: string
  email: string
  travelDate: string
  travelers: string
}

export type BookingFormProps = {
  tourName: string
  form: BookingFormData
  submitted: boolean
  onChange: (
    field: keyof BookingFormData,
    value: string
  ) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onReset: () => void
}

export type BookingFieldProps = {
  label: string
  icon: React.ReactNode
  children: React.ReactNode
}

export type HeroInfoProps = {
  icon: React.ReactNode
  value: string
  label: string
}