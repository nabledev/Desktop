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
      <h2>{{ item.TitreAnnonce }}</h2>
      <h4>{{item.DescriptionAnnonce}}</h4>

      <div class="iconVal"> <img class="imgIcon" src="../../public/Timer.png" alt=""> <span>{{ item.DureeMinimumSejour }} jours</span></div>
      <div class="iconVal"> <img class="imgIcon" src="../../public/People.png" alt=""> <span>{{ item.NbPersonnesMax }} Max</span></div>
      <div class="iconVal"> <img class="imgIcon" src="../../public/Money.png" alt=""> <span>{{ item.PrixParNuit }} euros par nuit</span></div>
      <div class="iconVal"> <img class="imgIcon" src="../../public/Bed.png" alt=""> <span>{{ item.NbChambres }}</span></div>
      <div class="iconVal"> <img class="imgIcon" src="../../public/Region.png" alt=""> <span>{{ item.Ville }}</span></div>
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

.imgIcon{
    width: 20px;
    padding-right: 8px;
}

.iconVal{
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>
