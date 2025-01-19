import type {Media} from "~/services/types/media";

export interface CarDetail {
    id: number
    make: string
    model: string
    year: number
    price: number
    mileage: number
    trim: string
    drivetrain: string
    fuelType: string
    engine: string
    description: string
    features: string[]
    warranty: string
    media: Media
    transmission: string
}
