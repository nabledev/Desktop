<script setup>
import { useProdctStore } from "../stores/Annonces";
import { ref, computed } from 'vue'
const products = useProdctStore();

const filter = ref("")

const filteredProducts = computed(() => {
  return products.theStudents.filter(
    stud => stud.Ville.toLowerCase().indexOf(filter.value.toLowerCase()) !== -1)
})

</script>

<template>
    <h2>en dessous les annonces</h2>
    <input v-model="filter">
    <div class="Annonces" v-for="item in filteredProducts" :key="item.IdAnnonce">
      <span>{{ item.TitreAnnonce }}</span>
      <span>{{item.DescriptionAnnonce}}</span>
      <span>{{item.Ville}}</span>
    </div>
   
</template>

<style scoped>

.Annonces{
    padding: 20px;
    border: solid 2px black;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
}
</style>
