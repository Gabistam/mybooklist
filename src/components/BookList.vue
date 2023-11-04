<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Ma Bibliothèque 📚</h1>
      
      <!-- Carte de statistiques -->
    <div class="card text-center mb-4">
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
      <table class="table table-hover">
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
              <button class="btn btn-outline-primary btn-sm" @click="toggleReadStatus(book)">
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
  </template>
  
  <script>
  import { booksData } from '../data/data.js'; // Assurez-vous que le chemin est correct
  
  export default {
    data() {
      return {
        books: booksData
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
      }
    }
  };
  </script>
  
  <style>
  /* Votre CSS personnalisé en plus de Bootstrap */
  .table {
    /* Ajoutez ici des styles pour personnaliser votre tableau */
  }
  </style>
  