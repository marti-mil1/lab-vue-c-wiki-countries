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

                   <div class="list-group">

                        <!-- FLAG IMAGE -->
                        <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`">

                        <!-- COUNTRY NAME -->
                        {{ country.name.official }}

                   </div>

                    
                </RouterLink>
            </div>
        </aside>
        <RouterView />  
    </main>  
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 72px);
    padding: 0 30px
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

.list-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 350px;
    padding: 1rem ;
    text-align: center;
    border: solid 2px lightgray;
    border-bottom: none
}

img {
    width: 72px;
    height: 54px
}

a {
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    color:  #495057;
}

a:last-child {
    border-bottom: solid 2px lightgray;
}

</style>