<template>
    <div id="login-form">
        
    <form>
    <h1>{{ title }}</h1>
    <p>Remplissez ce formulaire pour vous connecter.</p>
    <hr>

Mon panier : {{ total * quantity }} € 

    <input type="text" v-model="title" >

    <input type="number" v-model="total" >
    <input type="number" v-model="quantity" >

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Entrez votre courriel" id="email" name="email" required>

    <label for="psw"><b>Mot de passe</b></label>
    <input type="password" placeholder="Entrez votre mot de passe" id="psw" name="psw" required>

    <p><button type="submit">Se connecter</button></p>
    </form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        imgPath: '/toto.png', 
        title: 'Mon titre',
        total: 0.00,
        quantity: 0.00,
      }
    }
  }
</script>