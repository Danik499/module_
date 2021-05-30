<template>
  <div>
    <ul>
      <li v-for="(game, index) in games" :key="index">{{game.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "gamesList",
  props: {
    games: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="css" scoped>
ul {
  list-style-type: none;
}
</style>