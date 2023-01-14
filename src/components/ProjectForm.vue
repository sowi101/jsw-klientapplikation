<script>
/*
*Code written by Sofia Widholm. 
*JavaScriptbaserad webbutveckling, Webbutveckling, Mittuniversitetet.
*Last update 2023-01-14
*/

import BaseInput from './BaseInput.vue';
import SubmitButton from './SubmitButton.vue';
import BaseSelect from './BaseSelect.vue';
import BaseTextarea from './BaseTextarea.vue';

export default {
    name: "ProjectForm",
    data() {
        return {
            form: {
                name: this.project?.name || "",
                link: this.project?.link || "",
                status: this.project?.status || "",
                tool: this.project?.tool || "",
                yarn: this.project?.yarn || "",
                information: this.project?.information || ""
            },
            tools: [],
            yarns: [],
        }
    },
    props: {
        project: Object,
        btntext: String
    },
    components: { SubmitButton, BaseInput, BaseSelect, BaseTextarea },
    methods: {
        // Method to get all tools from database
        async getTools() {
            // Fetch to get all documents
            const resp = await fetch("http://localhost:3000/tools", {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                }
            });

            // Save reponse from API to a new variable
            const data = await resp.json();

            // Save all objects to an array
            this.tools = data;
        },
        // Method to get all yarns from database
        async getYarns() {
            // Fetch to get all documents
            const resp = await fetch("http://localhost:3000/yarns", {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                }
            });

            // Save reponse from API to a new variable
            const data = await resp.json();

            // Save all objects to an array
            this.yarns = data;
        },
    },
    mounted() {
        // Call of methods
        this.getTools();
        this.getYarns();
    }
}
</script>

<template>
    <!-- Form -->
    <form @submit.prevent="$emit('on-submit', form)">
        <div class="row">
            <!-- Input element for name-->
            <BaseInput label="Namn" id="name" type="text" v-model="project.name" class="col-12 col-md-6" />

            <!-- Input element for link-->
            <BaseInput label="Länk" id="link" type="text" v-model="project.link" class="col-12 col-md-6" />
        </div>

        <div class="row">
            <!-- Select element for status -->
            <BaseSelect id="status" label="Status" v-model="project.status" content="status" />

            <!-- Select element for tools -->
            <BaseSelect :options="tools" id="tools" label="Verktyg" v-model="project.tool" content="ett verktyg" />

            <!-- Select element for yarns -->
            <BaseSelect :options="yarns" id="yarns" label="Garn" v-model="project.yarn" content="ett garn" />
        </div>

        <div class="row">
            <!-- Textarea element for information -->
            <BaseTextarea label="Information" id="information" v-model="project.information" />
        </div>

        <p>
            <!-- Submit button -->
            <SubmitButton :value="btntext" class="col-12 col-md-3 float-end" />
        </p>
    </form>
</template>