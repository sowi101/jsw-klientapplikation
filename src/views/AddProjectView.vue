<script>
import ProjectForm from '../components/ProjectForm.vue';

export default {
    components: { ProjectForm },
    data() {
        return {
            project: [],
            error: "",
        }
    },
    methods: {
        // Method to add project to database
        async addProject(form) {
            // Empty messages
            this.error = "";

            if (this.project.name == null || this.project.link == null || this.project.status == null || this.project.tool == null || this.project.yarn == null || this.project.information == null) {
                this.error = "<strong>Formuläret är felaktigt ifyllt.</strong>"
                // If statement that checks which input data that is empty and adds messages to a variable
                if (this.project.name == null) {
                    this.error += "<li>Du har inte fyllt i något namn på projektet.</li>"
                }
                if (this.project.link == null) {
                    this.error += "<li>Du har inte fyllt i någon länk till mönster för projektet.</li>"
                }
                if (this.project.status == null) {
                    this.error += "<li>Du har inte valt status på projektet.</li>"
                }
                if (this.project.tool == null) {
                    this.error += "<li>Du har inte valt vilket verktyg för projektet.</li>"
                }
                if (this.project.yarn == null) {
                    this.error += "<li>Du har inte valt vilket garn för projektet.</li>"
                }
                if (this.project.information == null) {
                    this.error += "<li>Du har inte fyllt i någon övrig information om projektet.</li>"
                }
            } else {
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

                // Redirection to ProjectsView
                this.$router.push({ name: 'projekt' });
            }
        }
    }
}
</script>

<template>
    <main class="container col-10 col-md-7 mx-auto card my-5 py-2 shadow">
        <h1>Lägg till projekt</h1>
        <!-- ProjectForm component -->
        <ProjectForm :project="project" btntext="Spara" @on-submit="addProject()" />
        <br />
        <!-- If statement that prints error messages if there are any -->
        <p v-if="error != ''" class="alert alert-danger" role="alert">
            <ul v-html="error"></ul>
        </p>
    </main>
</template>