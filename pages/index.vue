<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Title / Hero section -->
        <v-row class="mb-6">
          <v-col>
            <h1>Car Auction</h1>
            <p>Find your dream car from our extensive collection!</p>
          </v-col>
        </v-row>

        <!-- Grid of cars -->
        <v-row>
          <v-col
              v-for="car in cars"
              :key="car.id"
              cols="12"
              sm="6"
              md="4"
          >
            <v-card elevation="2">
              <v-img
                  :src="`${car.image}?width=550&height=300`"
                  height="300"
              ></v-img>
              <v-card-title>{{ car.model }}</v-card-title>
              <v-card-subtitle>
                {{ car.year }} • {{ car.mileage }} miles
              </v-card-subtitle>
              <v-card-text>
                <strong>Price: {{ car.price }}</strong>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary">
                  <NuxtLink :to="`/cars/${car.id}`" style="color: inherit; text-decoration: none;">
                    View Details
                  </NuxtLink>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type {CarSummary} from "~/services/types";
import carService from "~/services/car-service";

const {data: cars} = await useAsyncData<CarSummary[]>(`listing-fetch-cars`, async () => {
  return await carService.fetchListing();
}, {lazy: true});

const router = useRouter()

function goToDetails(carId: number) {
  // Example: Navigate to a dynamic route like `/cars/1`
  router.push(`/cars/${carId}`)
}
</script>

<style scoped>
h1 {
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 0;
  font-size: 1.25rem;
}
</style>
