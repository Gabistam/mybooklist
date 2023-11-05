<template>
  <div class="home-container">
    <div class="content">
      <h1 class="title-font mb-5">Bienvenue sur MyBookLister</h1>
      <p class="tagline">Votre espace personnel pour suivre et gérer vos lectures.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Fira+Code:wght@500&family=Fragment+Mono:ital@1&family=Inter:wght@600&family=Vujahday+Script&display=swap');

.home-container {
  background: url('../assets/bibli1.webp') no-repeat center center;
  background-size: cover;
  position: relative;
  height: calc(100vh - var(--footer-height)); /* Ajustez --footer-height en fonction de la hauteur de votre footer */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.content {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.698); /* Film sombre pour faire ressortir le texte */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


    .title-font {
      font-family: 'Vujahday Script', cursive;
      font-size: 5em;
    }

.tagline {
  font-size: 1.5em;
  margin-top: 1em;
}

/* Ajoutez une variable pour la hauteur du footer dans vos styles globaux */
:root {
  --footer-height: 100px; /* Ajustez cette valeur en fonction de la hauteur réelle de votre footer */
}
</style>
