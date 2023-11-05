<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Fira+Code:wght@500&family=Fragment+Mono:ital@1&family=Inter:wght@600&family=Montserrat:wght@300&family=Vujahday+Script&display=swap');
#app {
  
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: #2c3e50;
  
}
</style>
