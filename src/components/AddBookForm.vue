<template>
    <div class="container mt-3">
      <h2 class="text-center">Ajouter un Nouveau Livre 📖</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="bookTitle">Titre du Livre</label>
          <input type="text" class="form-control" id="bookTitle" v-model="newBook.title" required>
        </div>
        <div class="form-group">
          <label for="bookAuthor">Auteur du Livre</label>
          <input type="text" class="form-control" id="bookAuthor" v-model="newBook.author" required>
        </div>
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newBook: {
          title: '',
          author: '',
          read: false // Par défaut, le livre n'est pas encore lu
        }
      };
    },
    methods: {
      submitForm() {
        this.$emit('add-book', { ...this.newBook });
        this.resetForm();
      },
      resetForm() {
        this.newBook.title = '';
        this.newBook.author = '';
        this.newBook.read = false;
      }
    }
  };
  </script>
  
  <style>
  /* Votre CSS personnalisé en plus de Bootstrap */
  </style>
  