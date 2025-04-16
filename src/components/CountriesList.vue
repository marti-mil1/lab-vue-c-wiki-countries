<script setup>
import { RouterLink, RouterView } from 'vue-router';
import countries from '../countries.json'
</script>

<template>
    <main>
        <aside>
            <div class="countries-list">
                <RouterLink
                    v-for="country in countries"
                    :key="country.alpha3Code"
                    :to="`/list/${country.alpha3Code}`">
                    {{ country.name.official }}
                </RouterLink>
            </div>
        </aside>
        <RouterView />  
    </main>  
</template>

<style scoped>
main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 72px);
}
aside {
    width: 40%;
    height: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
}
.countries-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 90%;
    overflow-y: scroll;
}

a {
    text-decoration: none;
}
</style>