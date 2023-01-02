<script>
import YarnForm from '../components/YarnForm.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
  components: { YarnForm, BaseButton },
  data() {
    return {
      yarns: [],
      yarn: []
    }
  },
  methods: {
    // Method to add yarn to database
    async addYarn(form) {
      /*
      // Empty messages
      this.error = "";
      this.success = "";
      */

      // Save data from form to a variable
      let yarnBody = {
        category: this.yarn.category,
        brand: this.yarn.brand,
        name: this.yarn.name
      };

      // Fetch to add a document in database
      const resp = await fetch("http://localhost:3000/yarns", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(yarnBody)
      });
      // Save response from API to variable
      const data = await resp.json();
      /*
      // If statement to check if response from API has errors and save error messages to a variable
      if (resp.status === 422) {
        this.error = "Formuläret är felaktigt ifyllt."
        if (data.errors.name != null) {
          this.error += " Du har inte fyllt i något namn på kategorin."
        }
      } else {
        // Save success message to variable
        this.success = "Kategorin är lagrad i databasen."

        */

      // Empty form
      this.yarn.category = "";
      this.yarn.brand = "";
      this.yarn.name = "";

      this.getYarns();
    },
    // Method to get all yarns from database
    async getYarns() {
      // Fetch to get all documents
      const resp = await fetch("http://localhost:3000/yarns", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
        }
      });

      // Save reponse from API to a new variable
      const data = await resp.json();

      // Save all objects to an array
      this.yarns = data;
    },
    // Method to delete a yarn from database
    async deleteYarn(id) {
      // Fetch to delete a document
      const resp = await fetch("http://localhost:3000/yarns/" + id, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
      });

      // Save response from API to database
      const data = await resp.json();

      // Call of method
      this.getYarns();
    }
  },
  mounted() {
    // Call of method
    this.getYarns();
  }
}
</script>

<template>
  <main class="container col-10 col-md-7 mx-auto card my-5 py-2 shadow">
    <h1>Garn</h1>

    <section>
      <h2>Lägg till nytt garn</h2>
      <!-- YarnForm component -->
      <YarnForm :yarn="yarn" btntext="Spara" @on-submit="addYarn()" />
    </section>

    <br />

    <section>
      <h2>Sparade garn</h2>
      <!-- Table for yarns -->
      <table class="table">
        <thead>
          <tr>
            <th>Kategori</th>
            <th class="d-none d-md-table-cell w-25">Märke</th>
            <th>Namn</th>
            <th class="invisible width-15">Ändra</th>
            <th class="invisible width-15">Radera</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="yarn in yarns" :key="yarn._id">
            <td class="align-middle">{{ yarn.category }}</td>
            <td class="d-none d-md-table-cell align-middle w-25">{{ yarn.brand }}</td>
            <td class="align-middle">{{ yarn.name }}</td>
            <!-- Button for update and delete -->
            <td class="width-15 align-middle">
              <RouterLink class="col mx-1" :to="{ name: 'uppdatera garn', params: { id: yarn._id } }">
                <BaseButton text="Ändra" />
              </RouterLink>
            </td>
            <td class="width-15 align-middle">
              <BaseButton @click="deleteYarn(yarn._id)" class="btn-delete" text="Radera" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<style scoped>
.btn-delete {
  background-color: #ED474A;
  color: #ffffff;
}

.btn-delete:hover {
  background-color: #DF1619;
  color: #ffffff;
}
</style>
