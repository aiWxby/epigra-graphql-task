<script>
import CardItem from './components/CardItem.vue';
import Pagination from './components/Pagination.vue';

export default {
    name: 'Home',
    components: {
        CardItem,
        Pagination
    }
}
</script>

<template>
    <main>
        <div class="main-container">
            <CardItem />
        </div>
        <Pagination />
    </main>
</template>

<style>

</style>