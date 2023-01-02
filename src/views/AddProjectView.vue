<script>
import ProjectForm from '../components/ProjectForm.vue';

export default {
    components: { ProjectForm },
    data() {
        return {
            project: []
        }
    },
    methods: {
        // Method to add project to database
        async addProject(form) {
            /*
            // Empty messages
            this.error = "";
            this.success = "";
            */

            // Save data from form to a variable
            let projectBody = {
                name: this.project.name,
                link: this.project.link,
                status: this.project.status,
                tool: this.project.tool,
                yarn: this.project.yarn,
                information: this.project.information
            };

            // Fetch to add document in database
            const resp = await fetch("http://localhost:3000/projects", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                },
                body: JSON.stringify(projectBody)
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

            // Redirection to ProjectsView
            this.$router.push({ name: 'projekt' });
        }
    }
}
</script>

<template>
    <main class="container col-10 col-md-7 mx-auto card my-5 py-2 shadow">
        <h1>Lägg till projekt</h1>
        <!-- ProjectForm component -->
        <ProjectForm :project="project" btntext="Spara" @on-submit="addProject()" />
    </main>
</template>