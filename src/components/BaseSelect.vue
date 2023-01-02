
<script>
export default {
    name: "BaseSelect",
    props: {
        content: {
            type: String,
            default: "",
        },
        id: {
            type: String,
            default: "",
        },
        label: {
            type: String,
            default: "",
        },
        modelValue: {
            type: [String, Number],
            default: "",
        },
        options: Object,
    },
    data() {
        return {
            statusOptions: [{ state: 'Idé' }, { state: 'Påbörjad' }, { state: "Avslutad" }],
            sizeOptions: [{ size: '2 mm' }, { size: '2.5 mm' }, { size: "3 mm" }, { size: '3.5 mm' }, { size: '4 mm' }, { size: "5 mm" }, { size: '6 mm' }, { size: '7 mm' }]
        }
    }
}
</script>

<template>
    <p class="col-12 col-md-4">
        <!-- Label element -->
        <label :for="id" class="form-label fw-bold">{{ label }}</label>
        <!-- Select element -->
        <select :id="id" :value="modelValue" class="form-select"
            @input="$emit('update:modelValue', $event.target.value)">
            <!-- Disabeld option element -->
            <option disabled value="">Välj {{ content }}</option>
            <!-- Option elements with for each loop and if statement -->
            <option v-if="label == 'Verktyg'" v-for="option in options" :value="option.category + ' ' + option.brand + ' ' + option.size">{{ option.category + " " + option.brand + " " + option.size }}</option>
            <option v-if="label == 'Garn'" v-for="option in options" :value="option.category + ' ' + option.brand + ' ' + option.name">{{ option.category + ' ' + option.brand + ' ' + option.name }}</option>
            <option v-if="label == 'Status'" v-for="status in statusOptions" :value="status.state">{{ status.state }}</option>
            <option v-if="label == 'Storlek'" v-for="size in sizeOptions" :value="size.size">{{ size.size }}</option>
        </select>
    </p>
</template>