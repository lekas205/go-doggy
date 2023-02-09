<template>
    <div class="">
        <input v-bind="$attrs"  @input="$emit('update:modelValue',($event.target as HTMLInputElement).value)" />
    </div>
</template>

<script lang="ts" setup>
defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
input{
    outline: none;
    height: 50px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #ECECEC;
    background-color: #F9F9F9;
    padding:0 35px;

    &:focus{
        border: 1px solid #211D52;
    }
}
</style>
