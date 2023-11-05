<template>
  <div class="home-container">
    <div class="content">
      <h1>Bienvenue sur MyBookLister</h1>
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
  background-color: rgba(0, 0, 0, 0.5); /* Film sombre pour faire ressortir le texte */
  padding: 20px;
  border-radius: 8px;
}

h1 {
  margin: 0;
  font-size: 2.5em;
}

.tagline {
  font-size: 1.2em;
  margin-top: 0.5em;
}

/* Ajoutez une variable pour la hauteur du footer dans vos styles globaux */
:root {
  --footer-height: 100px; /* Ajustez cette valeur en fonction de la hauteur réelle de votre footer */
}
</style>
