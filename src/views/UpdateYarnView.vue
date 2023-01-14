<script>
/*
*Code written by Sofia Widholm. 
*JavaScriptbaserad webbutveckling, Webbutveckling, Mittuniversitetet.
*Last update 2023-01-14
*/

import YarnForm from '../components/YarnForm.vue';

export default {
    components: { YarnForm },
    data() {
        return {
            yarn: Object,
            error: ""
        }
    },
    methods: {
        // Method to get a yarn from database
        async getYarn() {
            // Fetch to get a specific document
            const resp = await fetch("http://localhost:3000/yarns/" + this.$route.params.id, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                }
            });

            // Save response to a new variable
            const data = await resp.json();

            // Save the object to an array
            this.yarn = data;
        },
        // Method to update a yarn in database
        async updateYarn(form) {

            // Empty message
            this.error = "";

            if (this.yarn.category == "" || this.yarn.brand == "" || this.yarn.size == "") {
                this.error = "<strong>Formuläret är felaktigt ifyllt.</strong>"
                // If statement that checks which input data that is empty and adds messages to a variable
                if (this.yarn.category == "") {
                    this.error += "<li>Du har inte fyllt i någon kategori för garnet.</li>"
                }
                if (this.yarn.brand == "") {
                    this.error += "<li>Du har inte fyllt i något märke för garnet.</li>"
                }
                if (this.yarn.name == "") {
                    this.error += "<li>Du har inte fyllt i något namn på garnet.</li>"
                }
            } else {
                // Save data from form to a variable
                let yarnBody = {
                    category: this.yarn.category,
                    brand: this.yarn.brand,
                    name: this.yarn.name
                };
                // Fetch to update a document
                const resp = await fetch("http://localhost:3000/yarns/" + this.$route.params.id, {
                    method: "PUT",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(yarnBody)
                });

                // Save response to a variable
                const data = await resp.json();

                // Redirection to YarnsView
                this.$router.push({ name: 'garn' });
            }
        }
    },
    mounted() {
        // Call of method
        this.getYarn();
    }
}
</script>

<template>
    <main class="container col-10 col-md-7 mx-auto card my-5 py-2 shadow">
        <h1>Ändra garn</h1>
        <!-- If statement that prints error messages if there are any -->
        <p v-if="error != ''" class="alert alert-danger" role="alert">
        <ul v-html="error"></ul>
        </p>
        <br />
        <!-- YarnForm component-->
        <YarnForm :yarn="yarn" btntext="Ändra" @on-submit="updateYarn()" />
    </main>
</template>