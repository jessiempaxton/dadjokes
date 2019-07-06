<template>
  <div class="jokeOfTheDay">
    {{ newJoke.joke }}Joke here
  </div>
</template>

<script>
  export default {
    name: "JokeOfTheDay",
    props: [],
    data() {
      return {
        newJoke: {
          joke: this.$store.state.joke.joke,
        }
      }
    },
    mounted() {
      this.$store.dispatch('getJoke')
    },
    computed: {
      joke() {
        return this.$store.state.joke.joke;
      },
    },
    methods: {},
    components: {}
  }
</script>