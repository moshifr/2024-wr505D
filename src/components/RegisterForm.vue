<template>
<div>
    <div id="login-form">
        
    <h1>Création de compte</h1>
    <form @submit.prevent="onSubmitRegister">

      <p>Remplissez ce formulaire pour vous connecter.</p>
      <hr>

      <label for="email"><b>Email</b></label>
      <input type="text"  v-model="email" placeholder="Entrez votre courriel" id="email" name="email" required>

      <label for="psw"><b>Mot de passe</b></label>
      <input type="password"  v-model="password" placeholder="Entrez votre mot de passe" id="psw" name="psw" required>

      <p><button  type="submit">S'inscrire</button></p>
      <p class="error" v-if="error">{{ error }}</p>
    </form>
    
    </div>
  
</div>
    
</template>

<style scoped>
  .error {
    color: red;
    
  }
</style>

<script>
import { useSession } from "@/stores/session"
import { mapActions } from "pinia";
import UserService from '@/services/UserService.js'

  export default {
    methods: {
     async onSubmitRegister () {
      this.error = null;
      try {
        const response = await UserService.register({
          email: this.email,
          password: this.password,
          firstname: 'John',
          lastname: 'Smith'
        })
        const session = useSession();

        session.login({ user: response.user, token: response.token });
        this.$router.push('/search')
      } catch (error) {
        this.error = error.toString()
      }
    },

    },
    data() {
      return {
        email: 'email@email.com',
        password: 'test1234',
        error: null
      }
    },
  }
</script>