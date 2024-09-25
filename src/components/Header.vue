<template>
<div>
    <nav>
        <ul>
            <li>
                <router-link to="login">Login</router-link>
            </li>

            <li>
                <router-link to="register">Create user</router-link>
            </li>
            <li>
                <router-link to="search">Search</router-link>
            </li>
        </ul>
    </nav>

    <div v-if="loggedIn === true">
      <!-- si on est connecté --> 
      <span>{{ user }}</span>
      <button @click="onLogout">Se déconnecter</button>
    </div>

</div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { useSession } from "@/stores/session"

export default {
  data() {
    return { }
  },
  computed: {
    ...mapState(useSession, ["loggedIn", "user"])
  },
  methods: {
    onLogout() {
        this.logout()
        this.$router.push("login")
    },
    ...mapActions(useSession, ["logout"])
  }
}
</script>
