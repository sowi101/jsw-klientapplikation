<script>
import SubmitButton from './SubmitButton.vue';
import BaseInput from './BaseInput.vue';

export default {
    name: "YarnForm",
    components: { SubmitButton, BaseInput },
    data() {
        return {
            form: {
                category: this.yarn?.category || "",
                brand: this.yarn?.brand || "",
                name: this.yarn?.name || ""
            }
        }
    },
    props: {
        yarn: Object,
        btntext: String
    }
}
</script>

<template>
    <form @submit.prevent="$emit('on-submit', form)">
        <div class="row">
            <!-- Input element for category -->
            <BaseInput label="Kategori" id="category" type="text" v-model="yarn.category" />

            <!-- Input element for brand -->
            <BaseInput label="Märke" id="brand" type="text" v-model="yarn.brand" />

            <!-- Input element for name -->
            <BaseInput label="Namn" id="name" type="text" v-model="yarn.name" />
        </div>
        <p>
            <!-- Submit button -->
            <SubmitButton :value="btntext" class="col-12 col-md-3 float-end" />
        </p>
    </form>
</template>