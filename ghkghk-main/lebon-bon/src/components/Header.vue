<script setup>

</script>

<template>
<div id="Header">

    
    <h1>Leboncoin</h1>
    <ul class="horizontal-list">
        <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </ul>
</div>
</template>

<style scoped>
#Header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    margin-bottom: 20px;

}

.horizontal-list {
    list-style-type: none; /* Pour supprimer les puces */
    display: flex; /* Pour aligner les éléments horizontalement */
}

.horizontal-list li {
    margin-right: 10px; /* Espacement entre les éléments si nécessaire */
}
</style>
