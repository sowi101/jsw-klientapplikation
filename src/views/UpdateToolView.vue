<script>
import ToolForm from '../components/ToolForm.vue';

export default {
    components: { ToolForm },
    data() {
        return {
            tool: Object,
        }
    },
    methods: {
        // Method to get a tool from database
        async getTool() {
            // Fetch to get a specific document
            const resp = await fetch("http://localhost:3000/tools/" + this.$route.params.id, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                }
            });

            // Save response to a new variable
            const data = await resp.json();

            // Save the object to an array
            this.tool = data;
        },
        // Method to update a tool
        async updateTool(form) {
            /*
            // Empty message
            this.error = "";
            */
            // Save data from form to a variable
            let toolBody = {
                category: this.tool.category,
                brand: this.tool.brand,
                size: this.tool.size,
            };
            // Fetch to update a specific document
            const resp = await fetch("http://localhost:3000/tools/" + this.$route.params.id, {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                },
                body: JSON.stringify(toolBody)
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
            // Redirection to ToolsView
            this.$router.push({ name: 'verktyg' });
        },
    },
    mounted() {
        // Call of method
        this.getTool();
    }
}
</script>

<template>
    <main class="container col-10 col-md-7 mx-auto card my-5 py-2 shadow">
        <h1>Ändra verktyg</h1>
        <!-- ToolForm component -->
        <ToolForm :tool="tool" btntext="Ändra" @on-submit="updateTool()" />
    </main>
</template>