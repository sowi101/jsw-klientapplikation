<script>
import ProjectForm from '../components/ProjectForm.vue';

export default {
    components: { ProjectForm },
    data() {
        return {
            project: Object,
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
            /*
            // Empty message
            this.error = "";
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
           
           /*
            // If statement to check if response from API has errors and save error messages to a variable
            if (resp.status === 422) {
                this.error = "Formuläret är felaktigt ifyllt."
                if (data.errors.name != null) {
                    this.error += " Du har inte fyllt i något namn på kategorin."
                }
            } else {
                // Emit to parent component
                this.$emit("categoryUpdated");
                // Redirection to CategoryListView
                this.$router.push({ name: 'kategorier' });
            }
            */
           // Redirection to ProjectsView
        this.$router.push({ name: 'projekt' });
        },
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
        <!-- ProjectForm component -->
        <ProjectForm :project="project" btntext="Ändra" @on-submit="updateProject()" />
    </main>
</template>