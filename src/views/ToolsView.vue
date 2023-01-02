<script>
import ToolForm from '../components/ToolForm.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
  components: { ToolForm, BaseButton },
  data() {
    return {
      tools: [],
      tool: []
    }
  },
  methods: {
    // Method to add tool to database
    async addTool(form) {
      /*
      // Empty messages
      this.error = "";
      this.success = "";
      */

      // Save data from form to a variable
      let toolBody = {
        category: this.tool.category,
        brand: this.tool.brand,
        size: this.tool.size
      };
      // Fetch to add document to database
      const resp = await fetch("http://localhost:3000/tools", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(toolBody)
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
      this.tool.category = "";
      this.tool.brand = "";
      this.tool.size = "";

      // Call of method
      this.getTools();
    },
    // Method to get all tools from database
    async getTools() {

      // Fetch to get all documents
      const resp = await fetch("http://localhost:3000/tools", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
        }
      });

      // Save reponse from API to a new variable
      const data = await resp.json();

      // Save all objects to an array
      this.tools = data;
    },
    // Method to delete a tool from database
    async deleteTool(id) {
      // Fetch to delete a document
      const resp = await fetch("http://localhost:3000/tools/" + id, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
      });

      // Save response from API to database
      const data = await resp.json();

      this.getTools();
    }
  },
  mounted() {
    // Call of method
    this.getTools();
  }
}
</script>


<template>
  <main class="container col-10 col-md-7 mx-auto card my-5 py-2 shadow">
    <h1>Verktyg</h1>

    <section>
      <h2>Lägg till nytt verktyg</h2>
      <!-- ToolForm component -->
      <ToolForm :tool="tool" btntext="Spara" @on-submit="addTool()" />
    </section>
    
    <br />

    <section>
      <h2>Sparade verktyg</h2>
      <!-- Table for tools -->
      <table class="table">
        <thead>
          <tr>
            <th>Kategori</th>
            <th class="d-none d-md-table-cell">Märke</th>
            <th class="width-15 text-center">Storlek</th>
            <th class="invisible width-15">Ändra</th>
            <th class="invisible width-15">Radera</th>
          </tr>
        </thead>
        <tbody>
          <!-- Table row with for each -->
          <tr v-for="tool in tools" :tool="tool" :key="tool._id">
            <td class="align-middle">{{ tool.category }}</td>
            <td class="d-none d-md-table-cell align-middle">{{ tool.brand }}</td>
            <td class="text-center align-middle">{{ tool.size }}</td>

            <!-- Buttons for update and delete -->
            <td class="width-15 align-middle">
              <RouterLink class="col mx-1" :to="{ name: 'uppdatera verktyg', params: { id: tool._id } }">
                <BaseButton text="Ändra" />
              </RouterLink>
            </td>
            <td class="width-15 align-middle">
              <BaseButton @click="deleteTool(tool._id)" class="btn-delete" text="Radera" />
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