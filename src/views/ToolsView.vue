<script>
import ToolForm from '../components/ToolForm.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
  components: { ToolForm, BaseButton },
  data() {
    return {
      tools: [],
      tool: [],
      error: "",
      success: "",
      delete: ""
    }
  },
  methods: {
    // Method to add tool to database
    async addTool(form) {

      // Empty messages
      this.error = "";
      this.success = "";
      this.delete = "";

      if (this.tool.category == null || this.tool.brand == null || this.tool.size == null) {
        this.error = "<strong>Formuläret är felaktigt ifyllt.</strong>"
        // If statement that checks which input data that is empty and adds messages to a variable
        if (this.tool.category == null) {
          this.error += "<li>Du har inte fyllt i en kategori för verktyget.</li>"
        }
        if (this.tool.brand == null) {
          this.error += "<li>Du har inte fyllt i något märke för verktyget.</li>"
        }
        if (this.tool.size == null) {
          this.error += "<li>Du har inte valt storlek på verktyget.</li>"
        }
      } else {
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

        // Empty form
        this.tool.category = null;
        this.tool.brand = null;
        this.tool.size =  null;

        this.success = "Verktyget är sparat."

        // Call of method
        this.getTools();
      }
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
      this.error = "";
      this.success = "";
      this.delete = "";

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

      // Call of method
      this.getTools();

      // Save delete message to variable
      this.delete = "Verktyget är raderat."
    }
  },
  mounted() {
    // Call of method
    this.getTools();
  },
  computed: {
    toolTableMessage() {
      // If statement that checks if the array with categories is empty and saves a message to variable
      if (this.tools.length < 1) {
        let message = "Det finns inga verktyg sparade.";
        return message;
      }
    }
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
      <br />
      <!-- If statement that prints error messages if there are any -->
      <p v-if="error != ''" class="alert alert-danger" role="alert">
      <ul v-html="error"></ul>
      </p>
      <p v-if="success != ''" class="alert alert-success" role="alert">{{ success }}</p>
    </section>

    <br />

    <section>
      <h2>Sparade verktyg</h2>
      <!-- Message if array is empty -->
      <p>{{ toolTableMessage }}</p>
      <!-- Message when tool is deleted -->
      <p v-if="this.delete != ''" class="alert alert-success" role="alert">{{ this.delete }}</p>
      <!-- Table for tools -->
      <table v-if="this.tools.length > 0" class="table">
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