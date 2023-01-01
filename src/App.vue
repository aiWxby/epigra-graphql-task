<script>
import HeaderComponent from './components/common/header/HeaderComponent.vue';
import FooterComponent from './components/common/footer/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<template>
  <HeaderComponent />
  <RouterView></RouterView>
  <FooterComponent />
</template>

<style scoped>

</style>
