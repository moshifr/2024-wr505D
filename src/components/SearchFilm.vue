<template>
  <div id="search-film">
    <form @submit.prevent="searchFilm">
      <label for="search">Rechercher :</label>
      <input id="search" ref="searchInput" type="text" v-model="query">
    </form>
    <div id="films">
        <h2>Nombre de films : {{ numberResults }} </h2>
        <ul class="films">
            <film :film="currentFilm" v-for="currentFilm in films" :key="currentFilm.title" />
        </ul>
    </div> 
  </div>
</template>
<script>
import Film from './Film.vue';
import FilmService from '@/services/FilmService.js'

export default {
    components: {Film},
    mounted() {
      // via une référence
      this.$refs.searchInput.focus();

      // en utilisant $el ==> récupère le DOM de notre component
      //this.$el.querySelector('#search').focus();
    },
    data() {
        return {
            query: '',
            films: []
        }
    },
    methods: {
        async searchFilm() {
          try {
            const response = await FilmService.search(this.query)
            this.films = response
          } catch (error) {
            this.error = error.toString()
          }
        }
    },
    computed: {
        numberResults() {
            return this.films.length
        }
    },
    watch: {
        query () {
            this.films = []
        }
    }
}
</script>