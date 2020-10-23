<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      
      <v-spacer></v-spacer>
      
      <BottomAddBook />
      <BottomAddBookSubscribe />
    </v-app-bar>

    <v-main>
      <Books/>
    </v-main>
  </v-app>
</template>

<script>
import Books from './components/Books';
import BottomAddBookSubscribe from './components/BookAddSuscribe'
import BottomAddBook from './components/BookAdd'

export default {
  name: 'App',

  components: {
    Books,
    BottomAddBook,
    BottomAddBookSubscribe
  },

  data: () => ({
    
  }),
};
</script>
