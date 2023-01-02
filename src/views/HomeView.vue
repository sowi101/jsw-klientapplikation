<script>
export default {
  data() {
    return {
      projects: [],
      array: "",
      image: ""
    }
  },
  methods: {
    // Method to get all projects from database
    async getProjects() {
      // Fetch to get all documents
      const resp = await fetch("http://localhost:3000/projects", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        }
      });
      // Save reponse from API to a new variable
      const data = await resp.json();

      // Save all objects to an array
      this.projects = data;
    }
  },
  mounted() {
    // Call of method
    this.getProjects();
  },
  computed: {
    // Functions that return the length of different arrays depending on status
    projectIdeas() {
      return this.projects.filter(({ status }) => status === 'Idé').length
    },
    projectStarted() {
      return this.projects.filter(({ status }) => status === 'Påbörjad').length
    },
    projectFinished() {
      return this.projects.filter(({ status }) => status === 'Avslutad').length
    }
  }
}
</script>

<template>
  <main class="container col-10 col-md-7 mx-auto card my-5 py-2 shadow">
    <h1 class="text-center my-2">I loggen just nu</h1>

    <!-- Card for project ideas -->
    <div class="card col-10 mx-auto my-3card col-10 mx-auto my-3 shadow row g-0row g-0">
      <div class="row g-0">
        <div class="col-md-1 d-flex flex-wrap justify-content-end align-items-center">
          <!-- SVG icon -->
          <img src="../assets/iconmonstr-light-bulb-thin.svg" class="w-50" alt="Glödlampa">
        </div>
        <div class="col-md-11">
          <div class="card-body">
            <!-- Heading with if/else statement -->
            <h2 v-if="projectIdeas === 1" class="card-title">{{ projectIdeas }} projektidé</h2>
            <h2 v-else class="card-title">{{ projectIdeas }} projektidéer</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Card for started project -->
    <div class="card col-10 mx-auto my-3card col-10 mx-auto my-3 shadow row g-0row g-0">
      <div class="row g-0">
        <div class="col-md-1 d-flex flex-wrap justify-content-end align-items-center">
          <!-- SVG icon -->
          <img src="../assets/iconmonstr-gear-thin.svg" alt="Kugghjul" class="w-50">
        </div>
        <div class="col-md-11">
          <div class="card-body">
            <!-- Heading with if/else statement -->
            <h2 v-if="projectStarted === 1" class="card-title">{{ projectStarted }} påbörjat projekt</h2>
            <h2 v-else class="card-title">{{ projectStarted }} påbörjade projekt</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Card for finished projects -->
    <div class="card col-10 mx-auto my-3card col-10 mx-auto my-3 shadow row g-0row g-0">
      <div class="row g-0">
        <div class="col-md-1 d-flex flex-wrap justify-content-end align-items-center">
          <!-- SVG icon -->
          <img src="../assets/iconmonstr-check-mark-thin.svg" class="w-50" alt="Bockmarkering">
        </div>
        <div class="col-md-11">
          <div class="card-body">
            <!-- Heading with if/else statement -->
            <h2 v-if="projectFinished === 1" class="card-title">{{ projectFinished }} avslutat projekt</h2>
            <h2 v-else class="card-title">{{ projectFinished }} avslutade projekt</h2>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
