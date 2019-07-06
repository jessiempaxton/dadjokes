<template>
  <div class="home">
    <div class="row container-fluid">
      <div class="col-12">
        <h1>Welcome to Dad Jokessss!</h1>
      </div>
    </div>
    <div class="row">
      <JokeOfTheDay />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import JokeOfTheDay from '@/components/JokeOfTheDay.vue';

  export default {
    name: 'home',
    components: {
      JokeOfTheDay
    }
  }
</script>