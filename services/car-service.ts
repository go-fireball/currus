import {apiClient, baseUrl} from "~/services/api-client";
import type {CarDetail, CarSummary} from "~/services/types";

const fetchCarDetail = async (id: string):Promise<CarDetail> => {
    try {
        const response = await apiClient.get<CarDetail>(`/data-api/cars/${id}.json`)
        return response.data
    } catch (error) {
        console.error('Error fetching car data:', error)
        throw error
    }
}

const fetchListing = async (): Promise<CarSummary[]> => {
    try {
        const response = await apiClient.get<CarSummary[]>(`${baseUrl}/data-api/cars/summaries.json`)
        return response.data
    } catch (error) {
        console.error('Error fetching car data:', error)
        throw error
    }
}

export default {
    fetchListing,
    fetchCarDetail
}
