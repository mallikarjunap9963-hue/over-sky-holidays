import {
  BedDouble,
  Building2,
  Utensils,
  Camera,
  Car,
  Plane,
  Sparkles,
} from "lucide-react"

export function formatCategoryName(value: string) {
  return value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (character) =>
      character.toUpperCase()
    )
}

export function getInclusionTitle(inclusion: string) {
  const value = inclusion.toLowerCase()

  if (value.includes("accommodation")) {
    return "Accommodation"
  }

  if (
    value.includes("hotel") ||
    value.includes("resort")
  ) {
    return "Hotel Stay"
  }

  if (
    value.includes("meal") ||
    value.includes("breakfast") ||
    value.includes("lunch") ||
    value.includes("dinner")
  ) {
    return "Meal Plan"
  }

  if (
    value.includes("sightseeing") ||
    value.includes("tour")
  ) {
    return "All Sightseeing"
  }

  if (
    value.includes("pickup") ||
    value.includes("pick up") ||
    value.includes("drop")
  ) {
    return "Pickup & Drop"
  }

  if (
    value.includes("airport") ||
    value.includes("railway") ||
    value.includes("bus") ||
    value.includes("transfer")
  ) {
    return "Travel Transfer"
  }

  return "Package Benefit"
}

export function getInclusionIcon(inclusion: string) {
  const value = inclusion.toLowerCase()

  if (value.includes("accommodation")) {
    return BedDouble
  }

  if (
    value.includes("hotel") ||
    value.includes("resort")
  ) {
    return Building2
  }

  if (
    value.includes("meal") ||
    value.includes("breakfast") ||
    value.includes("lunch") ||
    value.includes("dinner")
  ) {
    return Utensils
  }

  if (
    value.includes("sightseeing") ||
    value.includes("tour")
  ) {
    return Camera
  }

  if (
    value.includes("pickup") ||
    value.includes("pick up") ||
    value.includes("drop")
  ) {
    return Car
  }

  if (
    value.includes("airport") ||
    value.includes("railway") ||
    value.includes("bus") ||
    value.includes("transfer")
  ) {
    return Plane
  }

  return Sparkles
}
