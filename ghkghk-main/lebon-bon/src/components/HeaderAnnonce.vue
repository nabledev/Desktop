<script setup>

</script>

<template>
<div class="Banniere">
    <span class="titro">C'est le moment de vendre</span>
    <span class="Button">Deposer une annonce</span>
</div>
</template>

<style scoped>
.Banniere{
    background-color: rgb(255, 145, 105);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    height: 80px;
}

.Button{
    background-color: orangered;
    padding: 7px 18px 7px 18px;
    border-radius: 14px;
    color: white;
    cursor: pointer;
    font-weight: bold;
}
.Button:hover{
    background-color: rgb(180, 68, 27);
}

.titro{
    font-weight: bold;
    margin-right: 24px;
}
</style>
