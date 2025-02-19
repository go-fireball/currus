<template>

  <!-- Top App Bar -->
  <v-app-bar app color="primary" dark>
    <v-container class="d-flex align-center">
<!--      <v-img src="/logo.png" alt="Logo" max-height="40" contain class="mr-4"></v-img>-->

      <v-spacer></v-spacer>

      <!-- Navigation Buttons (Visible on larger screens) -->
      <div class="d-none d-md-flex">
<!--        <v-btn v-for="item in menuItems" :key="item.title" :to="item.to" text>-->
<!--          <v-icon left>{{ item.icon }}</v-icon>-->
<!--          {{ item.title }}-->
<!--        </v-btn>-->
        <v-btn to="/how-it-works" text="How it Works"></v-btn>
        <v-btn to="/auctions" text="Auctions"></v-btn>
        <v-btn to="/sell-your-car" text="Sell Your Car"></v-btn>
        <v-btn to="/support" text="Support"></v-btn>
      </div>

      <!-- Search Bar -->
      <v-text-field
          dense
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          placeholder="Search auctions..."
          class="app-bar-search"
      ></v-text-field>

      <!-- Profile and Menu Icons -->
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>



  <!-- Main Content -->
  <v-main class="main-content">
    <v-container>
      <slot/>
    </v-container>
  </v-main>

  <!-- Footer (Updated) -->
  <v-footer app class="footer">
    <v-container>
      <v-row class="footer-row" justify="space-between" align="center">
        <!-- Left Section: Logo & Social Icons -->
        <v-col cols="12" md="4" class="text-center text-md-left">
          <div class="social-icons mt-3">
            <v-btn icon>
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- Center Section: Email Signup -->
        <v-col cols="12" md="4" class="text-center">
          <p class="signup-text">Email Signup</p>
          <v-text-field
              dense
              solo
              placeholder="email@email.com"
              append-inner-icon="mdi-arrow-right"
              class="email-input"
          ></v-text-field>
        </v-col>

        <!-- Right Section: Links -->
        <v-col cols="12" md="4" class="text-center text-md-right">
          <v-row no-gutters>
            <v-col class="footer-link">
              <p><strong>How it Works</strong></p>
              <p><strong>Auctions</strong></p>
              <p><strong>Sell Your Car</strong></p>
            </v-col>
            <v-col class="footer-link">
              <p><strong>Support</strong></p>
              <p><strong>Contact Us</strong></p>
            </v-col>
            <v-col class="footer-link">
              <p><strong>Sign in</strong></p>
              <p><strong>Register</strong></p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider class="mt-4 mb-2"></v-divider>
      <p class="text-center">© 2025 | Privacy Policy | Cookie Policy</p>
    </v-container>
  </v-footer>
</template>

<script setup>
import {ref} from 'vue';

const drawer = ref(false);
const menuItems = ref([
  {title: 'Home', icon: 'mdi-home', to: '/'},
  {title: 'Auctions', icon: 'mdi-gavel', to: '/auctions'},
  {title: 'My Bids', icon: 'mdi-cash', to: '/bids'},
  {title: 'Profile', icon: 'mdi-account', to: '/profile'}
]);
</script>

<style scoped>
.main-content {
  background-color: #f5f5f5;
  min-height: calc(100vh - 64px);
  padding-top: 20px;
}

.footer {
  background-color: #333;
  color: white;
  padding: 30px 0;
}

.footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-link {
  padding: 0 15px;
}

.social-icons v-btn {
  margin: 0 5px;
  color: white;
}

.email-input {
  max-width: 250px;
  margin: auto;
}

.app-bar-search {
  max-width: 300px;
  margin-left: 20px;
}
</style>

