<template>
    <tr>
      <td>{{ book.title }}</td>
      <td>{{ book.author }}</td>
      <td>
        <button class="btn btn-outline-primary btn-sm" @click="$emit('toggle-read')">
          {{ book.read ? 'Lu 👍' : 'À lire 👀' }}
        </button>
      </td>
      <td>
        <!-- Bouton pour déclencher le modal -->
        <button class="btn btn-outline-danger btn-sm" data-toggle="modal" :data-target="'#confirmModal' + book.id">
          Supprimer 🗑️
        </button>
      </td>
      <!-- Modal de confirmation -->
      <div class="modal fade" :id="'confirmModal' + book.id" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">Confirmation de suppression</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Êtes-vous sûr de vouloir supprimer ce livre ? 📖
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
              <button type="button" class="btn btn-danger" @click="$emit('delete-book')">Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </tr>
  </template>
  
  <script>
  export default {
    props: {
      book: Object
    }
  };
  </script>
  
  <style scoped>
  /* Votre CSS personnalisé ici */
  </style>
  