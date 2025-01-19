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
                  :src="`${car.image}?width=400&height=300`"
                  height="200"
              ></v-img>
              <v-card-title>{{ car.model }}</v-card-title>
              <v-card-subtitle>
                {{ car.year }} • {{ car.mileage }} miles
              </v-card-subtitle>
              <v-card-text>
                <strong>Price: {{ car.price }}</strong>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="goToDetails(car.id)">
                  View Details
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

// Sample data: in a real app, you might fetch this from an API.
const cars = ref([
  {
    id: 1,
    model: 'VOLVO XC90',
    year: 2019,
    mileage: 42000,
    price: '$33,975',
    image: 'http://localhost:3000/api/image/IMG_9645_jpg.jpg'
  },
  {
    id: 2,
    model: 'Honda Accord',
    year: 2015,
    mileage: 60000,
    price: '$10,000',
    image: 'http://localhost:3000/api/image/IMG_9645_jpg.jpg'
  },
  {
    id: 3,
    model: 'Ford Mustang',
    year: 2018,
    mileage: 30000,
    price: '$18,000',
    image: 'http://localhost:3000/api/image/IMG_9645_jpg.jpg'
  }
])

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
