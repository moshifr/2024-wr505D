<template>
    <div>
        <login-form  />
        <p class="error">Mon erreur app.vue</p>  
    </div>

</template>

<script>
import LoginForm from '../components/LoginForm.vue'

export default {
  data() {
    return { }
  },
  components: {
    LoginForm
  }
}
</script>
