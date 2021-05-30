<template>
  <div>
    <input type="text" placeholder="name" v-model="name" />
    <br />
    <input type="number" placeholder="price" v-model="price" />
    <br />
    <input type="text" placeholder="genre" v-model="genre" />
    <br />
    <input type="number" placeholder="levels count" v-model="levelsCount" />
    <br />
    <button @click="addGame">Submit</button>
    <br />
    <hr />
    {{games}}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AddGame",
  data() {
    return {
      name: "",
      price: 0,
      genre: "",
      levelsCount: 0
    };
  },
  computed: mapGetters(["games"]),
  methods: {
    addGame() {
      this.$store.dispatch("newGame", {
        name: this.name,
        price: this.price,
        genre: this.genre,
        levelsCount: this.levelsCount
      });
    }
  }
};
</script>

<style lang="css" scoped>
</style>