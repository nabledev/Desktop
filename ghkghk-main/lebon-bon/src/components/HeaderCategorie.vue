<script setup>
import { reactive } from 'vue';
const items = reactive([
  { id: 1, name: 'Immobilier' },
  { id: 2, name: 'Vehicules' },
  { id: 3, name: 'Emploi' },
  { id: 4, name: 'Mode' }
]);
</script>

<template>
    <div id="Header">
        <ul class="horizontal-list">
            <li  v-for="item in items" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
   
</template>

<style scoped>
#Header{
    display: flex;
    flex-direction: columns;
    justify-content: center;
    align-self: center;
    margin-bottom: 32px;
    padding-bottom: 16px;
    border-bottom: 1px solid black;

}

.horizontal-list {
    list-style-type: none; /* Pour supprimer les puces */
    display: flex; /* Pour aligner les éléments horizontalement */
}

.horizontal-list li {
    margin-right: 40px; /* Espacement entre les éléments si nécessaire */
}
</style>
