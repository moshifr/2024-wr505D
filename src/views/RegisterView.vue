<template>
    <div>
        <register-form  />
        <p class="error">Mon erreur app.vue</p>  
    </div>

</template>

<script>
import RegisterForm from '../components/RegisterForm.vue'

export default {
  data() {
    return { }
  },
  components: {
    RegisterForm
  }
}
</script>
