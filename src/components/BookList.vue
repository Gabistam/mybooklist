<template>
    <div class="container py-5">
      <h1 class="text-center mb-4">MyBookLister 📚</h1>
      
      <!-- Carte de statistiques -->
    <div class="card text-center my-5">
      <div class="card-header">
        Statistiques de Lecture
      </div>
      <div class="card-body">
        <h5 class="card-title">Progression de la Lecture</h5>
        <p class="card-text">
          <strong>Total de Livres:</strong> {{ books.length }}<br>
          <strong>Livres Lus:</strong> {{ readBooksCount }}<br>
          <strong>Livres à Lire:</strong> {{ books.length - readBooksCount }}
        </p>
        <div class="progress">
          <div class="progress-bar" role="progressbar" :style="{ width: progress + '%' }" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ progress.toFixed(0) }}%</div>
        </div>
      </div>
    </div>

        <!-- Formulaire d'ajout de livre -->
        <!-- Bouton pour afficher le formulaire d'ajout de livre -->
    <button class="btn btn-success my-5" @click="showAddBookForm = true">Ajouter un livre</button>
    <!-- Formulaire d'ajout de livre -->
    <add-book-form v-if="showAddBookForm" @add-book="addNewBook"></add-book-form>
   
    <!-- Tableau de livres -->

    <div class="table-responsive px-5">
      <table class="table table-hover table-background">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>
      <button
        :class="['btn', 'btn-sm', book.read ? 'btn-success' : 'btn-outline-primary']"
        @click="toggleReadStatus(book)"
      >
        {{ book.read ? 'Lu 👍' : 'À lire 👀' }}
      </button>
    </td>
            <td>
              <button class="btn btn-outline-danger btn-sm" @click="deleteBook(book)">
                Supprimer 🗑️
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </template>
  
  <script>
  import { booksData } from '../data/data.js'; // Importez les données de livres
  import AddBookForm from './AddBookForm.vue';
  
  export default {
    components: {
    AddBookForm
  },
    data() {
      return {
        books: booksData,
        showAddBookForm: false // Contrôle l'affichage du formulaire d'ajout de livre
      };
    },
    computed: {
      progress() {
        const readBooks = this.books.filter(book => book.read).length;
        return (readBooks / this.books.length) * 100;
      },
      readBooksCount() {
      return this.books.filter(book => book.read).length;
    }
    },
    methods: {
      toggleReadStatus(book) {
        book.read = !book.read;
        // Mettre à jour le localStorage ou votre backend ici
      },
      deleteBook(bookToDelete) {
        this.books = this.books.filter(book => book.id !== bookToDelete.id);
        // Mettre à jour le localStorage ou votre backend ici
      },
      addNewBook(newBook) {
      this.books.push(newBook);
      this.showAddBookForm = false; // Cache le formulaire après l'ajout
    },
    }
  };
  </script>
  
  <style>
    .btn-success:hover {
    color: #fff; /* Texte blanc */
    background-color: #28a745; /* Couleur de fond verte */
    border-color: #28a745; /* Couleur de bordure verte */
  }
</style>

  