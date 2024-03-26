<script setup>
import { useProdctStore } from "../stores/Annonces";
const products = useProdctStore();
</script>

<template>
    <h2>en dessous les annonces</h2>
    <div class="Annonces" v-for="item in products.theStudents" :key="item.IdAnnonce">
      {{ item.TitreAnnonce }}
      {{item.DescriptionAnnonce}}
    </div>
   
</template>

<style scoped>

.Annonces{
    padding: 20px;
    border: solid 2px black;
    margin-top: 12px;
}
</style>
