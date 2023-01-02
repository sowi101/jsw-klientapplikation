<script>
import YarnForm from '../components/YarnForm.vue';

export default {
    components: { YarnForm },
    data() {
        return {
            yarn: Object,
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
            /*
            // Empty message
            this.error = "";
            */
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
            // Redirection to YarnsView
            this.$router.push({ name: 'garn' });
        },
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
        <!-- YarnForm component-->
        <YarnForm :yarn="yarn" btntext="Ändra" @on-submit="updateYarn()" />
    </main>
</template>