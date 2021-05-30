<template>
  <div>
    <h2>Get by genre</h2>
    <input type="text" placeholder="genre" v-model="genre" />
    <br />
    <button @click="getByGenre">Submit</button>
    <games-list :games="gamesByGenre" />
    <hr />
    <h2>Get by price (equily or less)</h2>
    <input type="number" placeholder="price" v-model="price" />
    <br />
    <button @click="getByPrice">Submit</button>
    <games-list :games="gamesByPrice" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GamesList from "@/components/GamesList";

export default {
  name: "Main",
  components: {
    GamesList
  },
  data() {
    return {
      genre: "",
      price: 0,
      gamesByGenre: () => [],
      gamesByPrice: () => []
    };
  },
  computed: mapGetters(["games"]),
  methods: {
    getByGenre() {
      this.gamesByGenre = this.games.filter(g => g.genre === this.genre);
    },
    getByPrice() {
      this.gamesByPrice = this.games.filter(g => g.price <= this.price);
    }
  }
};
</script>

<style lang="css" scoped>
</style>