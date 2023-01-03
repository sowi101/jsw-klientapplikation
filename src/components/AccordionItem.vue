<script>
import BaseButton from './BaseButton.vue';

export default {
    name: "AccordionItem",
    components: { BaseButton },
    props: {
        project: Object,
        parent: String
    },
    methods: {
        // Method to delete a project from database
        async deleteProject(id) {
            // Fetch to delete a document
            const resp = await fetch("http://localhost:3000/projects/" + id, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });

            // Save response from API to database
            const data = await resp.json();

            // Emit to ProjectView
            this.$emit("projectDeleted");
        }
    },
    emits: ["projectDeleted"]
}
</script>

<template>
    <!-- Accordion item -->
    <div class="accordion-item">
        <!-- Accordion header -->
        <h2 class="accordion-header" :id="'headingFor' + project.name">
            <!-- Accordion button -->
            <button class="accordion-button collapsed text-dark fw-bold" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#' + project.name" aria-expanded="true" :aria-controls="project.name">
                {{ project.name }}&nbsp
                <!-- Status badges -->
                <span v-if="project.status === 'Idé'" class="badge text-bg-info">Idé</span>
                <span v-if="project.status === 'Påbörjad'" class="badge text-bg-success">Påbörjad</span>
                <span v-if="project.status === 'Avslutad'" class="badge text-bg-danger">Avslutad</span>
            </button>
        </h2>

        
        <div :id="project.name" class="accordion-collapse collapse" :aria-labelledby="'headingFor' + project.name"
            :data-bs-parent="parent">
            <!-- Accordion body-->
            <div class="accordion-body row">
                <ul class="list-group list-group-flush col-12 col-md-6">
                    <li class="list-group-item"><strong>Länk:</strong><a :href="project.link" target="_blank">{{ project.link }}</a></li>
                    <li class="list-group-item"><strong>Verktyg: </strong>
                        {{ project.tool }}
                    </li>
                    <li class="list-group-item"><strong>Garn: </strong>
                        {{ project.yarn }}
                    </li>
                </ul>
                <div class="col-12 col-md-6">
                    <p><strong>Information: </strong>{{ project.information }}</p>
                    <p class="row">
                        <!-- Buttons for update and delete -->
                        <RouterLink class="col mx-1" :to="{ name: 'uppdatera projekt', params: { id: project._id } }">
                            <BaseButton text="Ändra" />
                        </RouterLink>
                        <BaseButton @click="deleteProject(project._id)" class="btn-delete col mx-1" text="Radera" />
                    </p>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn-delete {
    background-color: #ED474A;
    color: #ffffff;
}

.btn-delete:hover {
    background-color: #DF1619;
    color: #ffffff;
}
</style>