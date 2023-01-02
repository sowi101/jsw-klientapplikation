<script>
import SubmitButton from './SubmitButton.vue';
import BaseInput from './BaseInput.vue';
import BaseSelect from './BaseSelect.vue';

export default {
    name: "ToolForm",
    components: { SubmitButton, BaseInput, BaseSelect },
    data() {
        return {
            form: {
                category: this.tool?.category || "",
                brand: this.tool?.brand || "",
                size: this.tool?.size || "",
            },
        }
    },
    props: {
        tool: Object,
        btntext: String
    }
}
</script>


<template>
    <!-- Form for tools -->
    <form @submit.prevent="$emit('on-submit', form)">
        <div class="row">
            <!-- Input element for category -->
            <BaseInput label="Kategori" id="category" type="text" v-model="tool.category" class="col-12 col-md-4" />

            <!-- Input element for brand -->
            <BaseInput label="Märke" id="brand" type="text" v-model="tool.brand" class="col-12 col-md-4" />

            <!-- Select element for size -->
            <BaseSelect id="size" label="Storlek" v-model="tool.size" content="storlek" />
        </div>

        <p>
            <!-- Submit button -->
            <SubmitButton :value="btntext" class="col-12 col-md-3 float-end" />
        </p>
    </form>
</template>

