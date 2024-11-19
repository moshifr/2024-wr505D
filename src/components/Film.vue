<template>
    <li class="film card" v-if="film">
        <img class="poster" :src="film.poster" />
        <p class="title">{{ film.title }}</p>
        <span class="rating"><span v-for="index in Math.round(film.metascore / 20)">★</span></span>
        <dl>
            <dt>Release date</dt><dd>{{ film.released}}</dd>
            <dt>Director</dt><dd>{{ film.director }}</dd>
            <dt>Actors</dt><dd>{{ film.actors }}</dd>
        </dl>
        <p class="plot">
        {{ film.plot }}
        </p>
    </li>
</template>
<script>
export default {
    props: ["film"]
}
</script>
