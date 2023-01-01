<script>
    
    import TechItem from './components/TechItem.vue';

    export default {
        name: 'FooterComponent',
        components: {
            TechItem
        }
    }
</script>

<template>
    <footer>
        <div class="tech-stack">
            <h3 class="tech-stack__title">Teknoloji Havuzu</h3>
            <div class="tech-stack__container">
                <tech-item />
            </div>
        </div>
    </footer>
</template>

<style>

</style>