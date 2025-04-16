<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router' 
import countriesData from '../countries.json'

const route = useRoute()
const countryCode = ref('')
const actualCountry = reactive({
    name: ''
})

/**
 * A partir del alpha3Code, busca el país en el array de
 * países que has obtenido en @see fetchCountryDetail
 */
const getCountryDetail = (countriesList) => {
    const countryDetail = countriesList.find(country => country.alpha3Code === countryCode.value)
    console.log(countryDetail)
    if (countryDetail) {
        actualCountry.name = countryDetail.name.official
    }
}

const fetchCountryDetail = async () => {
    try {
        // const data = await fetch()
        // const countris = await data.json()
        const countries = countriesData
        getCountryDetail(countries)
    } catch (err) { console.log(err)}
}

onMounted(() => {
    const { alpha3Code } = route.params
    countryCode.value = alpha3Code
    fetchCountryDetail()

    watch(
        () => route.params.alpha3Code,
        (newCountryCode) => {
            countryCode.value = newCountryCode
            fetchCountryDetail()
        }
    )
})
</script>

<template>
    <div class="country-details">
        <h1>CountryDetail</h1>
        <h4>{{ countryCode }}</h4>
        <h5 v-show="actualCountry.name !== ''">{{ actualCountry.name }}</h5>
    </div>

</template>

<style scoped>
.country-details {
    width: 35%;
    height: 100px;
    padding: 20px 10px;
    border-bottom: solid 1px lightgray
}
</style>