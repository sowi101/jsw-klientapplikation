<script>
import ProjectForm from '../components/ProjectForm.vue';

export default {
    components: { ProjectForm },
    data() {
        return {
            project: Object,
            error: ""
        }
    },
    methods: {
        // Method to get a project from database
        async getProject() {
            // Fetch to get a specific document
            const resp = await fetch("http://localhost:3000/projects/" + this.$route.params.id, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                }
            });

            // Save response to a new variable
            const data = await resp.json();

            // Save the object to an array
            this.project = data;
        },
        // Method to update a project in database
        async updateProject(projectForm) {
            // Empty message
            this.error = "";

            if (this.project.name == "" || this.project.link == "" || this.project.status == "" || this.project.tool == "" || this.project.yarn == "" || this.project.information == "") {
                this.error = "<strong>Formuläret är felaktigt ifyllt.</strong>"
                // If statement that checks which input data that is empty and adds messages to a variable
                if (this.project.name == "") {
                    this.error += "<li>Du har inte fyllt i något namn på projektet.</li>"
                }
                if (this.project.link == "") {
                    this.error += "<li>Du har inte fyllt i någon länk till mönster för projektet.</li>"
                }
                if (this.project.status == "") {
                    this.error += "<li>Du har inte valt status på projektet.</li>"
                }
                if (this.project.tool == "") {
                    this.error += "<li>Du har inte valt vilket verktyg för projektet.</li>"
                }
                if (this.project.yarn == "") {
                    this.error += "<li>Du har inte valt vilket garn för projektet.</li>"
                }
                if (this.project.information == "") {
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
                // Fetch to update a specific document
                const resp = await fetch("http://localhost:3000/projects/" + this.$route.params.id, {
                    method: "PUT",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(projectBody)
                });

                // Save response to a variable
                const data = await resp.json();

                // Redirection to ProjectsView
                this.$router.push({ name: 'projekt' });
            }
        }
    },
    mounted() {
        // Call of method
        this.getProject();
    }
}
</script>

<template>
    <main class="container col-10 col-md-7 mx-auto card my-5 py-2 shadow">
        <h1>Ändra projekt</h1>
        <!-- If statement that prints error messages if there are any -->
        <p v-if="error != ''" class="alert alert-danger" role="alert">
            <ul v-html="error"></ul>
        </p>
        <br />
        <!-- ProjectForm component -->
        <ProjectForm :project="project" btntext="Ändra" @on-submit="updateProject()" />
    </main>
</template>