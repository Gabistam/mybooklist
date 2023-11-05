<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">MyBookLister</router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/mylist">MyList</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  
  <script>
  export default {
    name: 'AppHeader'
  };
  </script>
  
  <style>
  /* Ajoutez ici vos styles personnalisés pour le header si nécessaire */
  </style>
  