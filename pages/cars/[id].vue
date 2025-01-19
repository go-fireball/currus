<template>
  <v-container class="py-4">
    <!-- We can show a loading or skeleton UI while fetching data -->
    <v-skeleton-loader
        v-if="pending"
        type="image, text, text, text"
        class="mb-4"
    />

    <!-- Display the car details once fetched -->
    <v-card
        v-else
        class="mx-auto"
        max-width="600"
    >
      <v-img
          :src="car?.media?.images?.[0]"
          height="300"
          cover
      />
      <v-card-title>
        {{ car?.year }} {{ car?.make }} {{ car?.model }}
      </v-card-title>
      <v-card-subtitle>
        {{ formatPrice(car?.price) }}
      </v-card-subtitle>

      <v-card-text>
        <ul>
          <li><strong>Mileage:</strong> {{ car?.mileage }} miles</li>
          <li><strong>Engine:</strong> {{ car?.engine }}</li>
          <li><strong>Transmission:</strong> {{ car?.transmission }}</li>
          <li><strong>Drivetrain:</strong> {{ car?.drivetrain }}</li>
          <li><strong>Fuel Type:</strong> {{ car?.fuelType }}</li>
        </ul>

        <p class="mt-4">
          {{ car?.description }}
        </p>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary">
          Contact Seller
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Display an error if something went wrong -->
    <div v-if="error" class="text-center mt-4">
      <p class="text-error">Could not fetch car data: {{ error.message }}</p>
    </div>
  </v-container>
</template>

<script setup lang="ts">
// Nuxt and Vue imports
import { useRoute } from 'vue-router'
import carService from "~/services/car-service";

// Get the dynamic route param
const route = useRoute()
const carId = route.params.id as string;

// Fetch car data from an API endpoint, e.g. /api/cars/[id]
const { data: car, pending, error } = await useAsyncData(`fetchCar-${carId}`, async () => {
  return await carService.fetchCarDetail(carId);
}, { lazy: true });

// Example price formatting (you can adjust to your locale or currency formatting)
function formatPrice(price: number | undefined) {
  if (!price) return 'N/A'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}
</script>

<style scoped>
/* Adjust styles as needed */
</style>
