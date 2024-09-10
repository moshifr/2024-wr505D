<template>
  <div id="search-film">
    <form>
      <label for="search">Rechercher :</label>
      <input id="search" type="text">
    </form>
    <div id="films">
        <h2>Nombre de films : {{ countFilms }} </h2>
        <ul class="films">
            <li class="film card" v-for="film in films">
            <img class="poster" :src="film.poster" />
            <p class="title">
                {{ film.title }}
                <span class="rating"> <span v-for="index in Math.round(film.metascore / 20)">★</span></span>
            </p>
            <dl>
                <dt>Release date</dt><dd>{{ film.released}}</dd>
                <dt>Director</dt><dd>{{ film.director }}</dd>
                <dt>Actors</dt><dd>{{ film.actors }}</dd>
            </dl>
            <p class="plot">
            {{ film.plot }}
            </p>
            </li>
        </ul>
    </div> 
  </div>
</template>
<script>

export default {
    data() {
        return {
            films: []
        }
    }
}
</script>