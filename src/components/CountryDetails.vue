<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const country = ref(null)

watch(
  () => route.params.alpha3Code,
  async (newCode) => {
    const res = await fetch(`https://ih-countries-api.herokuapp.com/countries/${newCode}`)
    country.value = await res.json()
  },
  { immediate: true }
)
</script>


<template>
    <div v-if="country" class="country-details">

      <img
        :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"/>
      
        
        <h1>{{ country.name.common }}</h1>

        <p><span>Capital</span>{{ country.capital[0] }}</p>

        <p><span>Area</span>{{ country.area }} km²</p>

        <div class="borders">
            <p>Borders</p>
            <ul>
                <li v-for="border of country.borders" :key="border">
                    <router-link :to="`/list/${border}`"> {{ border }}</router-link>
                </li>
            </ul>
        </div>

    </div>
</template>



<style scoped>
.country-details {
    width: 80%;
    height: auto;
    padding: 10px 30px 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start
}

img {
    width: 144px;
    height: 108px
}

h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 40px;
    color:  #495057;
    width: 100%;
    border-bottom: solid 1px lightgray;
    padding: 20px 0;
}

p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color:  #495057;
    width: 100%;
    border-bottom: solid 1px lightgray;
    padding: 20px 0;
}

span {
    display: inline-block;
    width: 30%;
}

.borders {
    width: 100%;
    display: flex;
    height: auto;
    
}

.borders p {
    width: 30%;
    border-bottom: none
}

ul {
    padding: 20px 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    
}

a {
    text-decoration: none;
    color: #007bff;  
}

</style>
  

  