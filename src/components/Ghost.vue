<template>
<ol>
  <li :style="ghost1.style">
    <span :class="{joyful: ghost1.anim}" class="ghost">👻︎</span>
    I'm joyful and red
  </li>
  <li :style="ghost2.style">
    <span class="ghost" :class="ghost2.anim">👻︎</span>
    I'm jelly and green
  </li>
  <li :style="{color: ghost3.isBlue ?  'blue'  : ''}">
    <span class="ghost" :class="{wobbly: ghost3.isWobbly }">👻︎</span>
    I'm wobbly and blue
  </li>
</ol>
</template>

<script>
import "./ghosts.css";

export default {
  data(){
    return {
      ghost1: {
        anim: "joyful",
        style: "color: red"
      },
      ghost2: {
        anim: { jelly: true },
        style: { color: "green" }
      },
      ghost3: {
        isWobbly: true,
        isBlue: true
      }
    }
  }
}
</script>