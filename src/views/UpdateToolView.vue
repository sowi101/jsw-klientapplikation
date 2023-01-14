<script>
/*
*Code written by Sofia Widholm. 
*JavaScriptbaserad webbutveckling, Webbutveckling, Mittuniversitetet.
*Last update 2023-01-14
*/

import ToolForm from '../components/ToolForm.vue';

export default {
    components: { ToolForm },
    data() {
        return {
            tool: Object,
            error: ""
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
            // Empty message
            this.error = "";

            if (this.tool.category == "" || this.tool.brand == "" || this.tool.size == "") {
                this.error = "<strong>Formuläret är felaktigt ifyllt.</strong>"
                // If statement that checks which input data that is empty and adds messages to a variable
                if (this.tool.category == "") {
                    this.error += "<li>Du har inte fyllt i någon kategori för verktyget.</li>"
                }
                if (this.tool.brand == "") {
                    this.error += "<li>Du har inte fyllt i något märke för verktyget.</li>"
                }
                if (this.tool.size == "") {
                    this.error += "<li>Du har inte valt storlek på verktyget.</li>"
                }
            } else {
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

                // Redirection to ToolsView
                this.$router.push({ name: 'verktyg' });
            }
        }
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
        <!-- If statement that prints error messages if there are any -->
        <p v-if="error != ''" class="alert alert-danger" role="alert">
        <ul v-html="error"></ul>
        </p>
        <br />
        <!-- ToolForm component -->
        <ToolForm :tool="tool" btntext="Ändra" @on-submit="updateTool()" />
    </main>
</template>