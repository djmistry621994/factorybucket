<template>
    <Header/>
    <router-view/>
</template>

<script>
import Header from "@/views/includes/Header";

export default {
    name: 'App',
    components: {
        Header
    }
}
</script>

<style>
#app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
