<template>
    <div class="container mt-5 px-5">
      <h2 class="text-center">Ajouter un Nouveau Livre 📖</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group mt-5 rounded-pill">
          <label for="bookTitle">Titre du Livre</label>
          <input type="text" class="form-control rounded-pill" id="bookTitle" v-model="newBook.title" required>
        </div>
        <div class="form-group mt-3">
          <label for="bookAuthor">Auteur du Livre</label>
          <input type="text" class="form-control rounded-pill" id="bookAuthor" v-model="newBook.author" required>
        </div>
        <button type="submit" class="btn btn-primary mt-4 mb-5">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script>
    import { booksData } from '../data/data.js'; // Importez les données de livres

    export default {
  data() {
    return {
      newBook: {
        title: '',
        author: '',
        read: false // Par défaut, le livre n'est pas encore lu
      },
      books: booksData // Ajoutez ceci pour avoir accès aux données des livres existants
    };
  },
  methods: {
    submitForm() {
      // Vérifiez si le livre existe déjà
      const bookExists = this.books.some(book => 
        book.title.toLowerCase() === this.newBook.title.toLowerCase() && 
        book.author.toLowerCase() === this.newBook.author.toLowerCase()
      );

      if (!bookExists) {
        this.$emit('add-book', { ...this.newBook });
        this.resetForm();
      } else {
        alert('Un livre avec le même titre et auteur existe déjà.');
      }
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
  /* Ajoutez ici vos styles si nécessaire */
  </style>
  