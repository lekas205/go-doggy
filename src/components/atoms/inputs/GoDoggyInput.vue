<template>
    <div class="">
        <input v-bind="$attrs"  />
    </div>
</template>

<style lang="scss" scoped>
input{
    outline: none;
    height: 50px;
    width: 100%;
    border: 1px solid #ECECEC;
    background-color: #F9F9F9;
    padding:0 35px;

    &:focus{
        border: 1px solid #211D52;
    }
}
</style>
