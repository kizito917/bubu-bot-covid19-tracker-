<template>
<!-- navbar -->
  <v-app>
    <v-app-bar
      app
      color="success"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Bot Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.gif"
          transition="scale-transition"
          width="80"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="/"
        target="_blank"
        text
      >
        <span class="mr-2">BUBU (covid19 bot tracker)</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
