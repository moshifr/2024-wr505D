<script >
import LoginForm from "./components/LoginForm.vue";
import SearchFilm from "./components/SearchFilm.vue";
import { useSession } from "@/stores/session"
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return { 
      titrePage: "Titidogidoig",
    }
  },
  computed: {
      ...mapState(useSession, ["loggedIn", "user"])
  },
  methods: {
    ...mapActions(useSession, ["logout"])
  },
  components: {LoginForm, SearchFilm}
}
</script>

<template>
  <div id="app">
    <div v-if="loggedIn === true">
      <!-- si on est connecté --> 
      <span>{{ user }}</span>
      <button @click="logout">Se déconnecter</button>
    </div>

    <login-form :titrePage="titrePage" v-if="loggedIn == false" />

    <search-film :titrePage="titrePage" v-else/>

    <p class="error">Mon erreur app.vue</p>  
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
