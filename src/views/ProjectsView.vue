<script>
import AccordionItem from '../components/AccordionItem.vue';

export default {
  components: { AccordionItem },
  data() {
    return {
      projects: [],
      delete: ""
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
    },
    projectDeleted() {
      // Call of method
      this.getProjects();

      // Save delete message to variable
      this.delete = "Projektet är raderat."
    }
  },
  mounted() {
    // Call of method
    this.getProjects();
  },
  computed: {
    // Functions that returns differents arrays dependning on status
    projectIdeas() {
      return this.projects.filter(({ status }) => status === 'Idé')
    },
    projectStarted() {
      return this.projects.filter(({ status }) => status === 'Påbörjad')
    },
    projectFinished() {
      return this.projects.filter(({ status }) => status === 'Avslutad')
    }
  }
}
</script>

<template>
  <main class="container col-10 col-md-7 mx-auto card my-5 py-2 shadow">
    <h1>Projekt</h1>
    <!-- Message when project is deleted -->
    <p v-if="this.delete != ''" class="alert alert-success" role="alert">{{ this.delete }}</p>
    <section>
      <h2>Projektidéer</h2>
      <!-- Accordion element for project ideas -->
      <div v-if="projectIdeas.length > 0" class="accordion my-3" id="accordionProjectIdeas">
        <!-- Accordion component with for each loop -->
        <AccordionItem v-for="project in projectIdeas" :key=project.id :project="project"
          @projectDeleted="projectDeleted()" parent="#accordionProjectIdeas" />
      </div>
      <!-- Message if array is empty -->
      <p v-else>Det finns inga projektidéer sparade i loggen.</p>
    </section>

    <section>
      <h2>Påbörjade projekt</h2>
      <!-- Accordion element for projects started -->
      <div v-if="projectStarted.length > 0" class="accordion my-3" id="accordionProjectStarted">
        <!-- Accordion component with for each loop -->
        <AccordionItem v-for="project in projectStarted" :key=project.id :project="project"
          @projectDeleted="getProjects()" parent="#accordionProjectStarted" />
      </div>
      <!-- Message if array is empty -->
      <p v-else>Det finns inga påbörjade projekt sparade i loggen.</p>
    </section>

    <section>
      <h2>Avslutade projekt</h2>
      <!-- Accordion element for projects finished -->
      <div v-if="projectFinished.length > 0" class="accordion my-3" id="accordionProjectFinished">
        <!-- Accordion component with for each loop -->
        <AccordionItem v-for="project in projectFinished" :key=project.id :project="project"
          @projectDeleted="projectDeleted()" parent="#accordionProjectFinished" />
      </div>
      <!-- Message if array is empty -->
      <p v-else>Det finns inga avslutade projekt sparade i loggen.</p>
    </section>
  </main>
</template>
