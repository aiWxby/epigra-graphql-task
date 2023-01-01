<script>
import BannerComponent from "./components/BannerComponent.vue";
import MenuComponent from "./components/MenuComponent.vue";

export default {
    name: 'HeaderComponent',
    components: {
        BannerComponent,
        MenuComponent
    }
}
</script>

<template>
    <BannerComponent />
    <MenuComponent />
</template>

<style scoped>

</style>