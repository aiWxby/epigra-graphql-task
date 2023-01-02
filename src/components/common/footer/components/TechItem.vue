<script>
export default {
    name: 'TechItem',
    data() {
        return {
            techStacks: [
                {
                    name: 'Vue',
                    url: '/assets/imgs/techs/Vue.png'
                },
                {
                    name: 'SASS',
                    url: '/assets/imgs/techs/Sass.png'
                },
                {
                    name: 'GraphQL',
                    url: '/assets/imgs/techs/GraphQL.png'
                },
                {
                    name: 'Apollo',
                    url: '/assets/imgs/techs/Apollo.png'
                },
                {
                    name: 'Vite',
                    url: '/assets/imgs/techs/Vite.png'
                }
            ]
        }
    }
}
</script>

<template>
    <div class="tech-stack__item" v-for="tech in techStacks" :key="tech.name">
        <img :src="tech.url" :alt="tech.name" class="tech-stack__logo" loading="lazy" />
    </div>
</template>

<style>

</style>