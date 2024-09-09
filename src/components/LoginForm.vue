<template>
    <div id="login-form">
        
    <form @submit.prevent="onSubmit">
      <h1>{{ title }}</h1>
      <p>Remplissez ce formulaire pour vous connecter.</p>
      <hr>

      <label for="email"><b>Email</b></label>
      <input type="text"  v-model="email" placeholder="Entrez votre courriel" id="email" name="email" required>

      <label for="psw"><b>Mot de passe</b></label>
      <input type="password"  v-model="password" placeholder="Entrez votre mot de passe" id="psw" name="psw" required>

      <p><button  type="submit">Se connecter</button></p>
    </form>
    
    <!-- Tips pour débuger : -->
    <div>{{ JSON.stringify(loggedIn) }}</div>
    <!-- Tips pour débuger : -->
    </div>
    
</template>

<script>
  export default {
    data() {
      return {
        title: 'Authentification',
        email: 'email@email.com',
        password: 'password',
        loggedIn: false
      }
    },
    methods: {
      onSubmit() {
        this.loggedIn = true;
      }
    }
  }
</script>