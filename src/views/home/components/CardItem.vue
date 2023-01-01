<script>
import gql from "graphql-tag";

export default {
    name: 'CardItem',
    data() {
        return {
            characters: [],
            pageNumber: parseInt(this.$route.params.page)
        }
    },
    apollo: {
        characters: {
            query: gql`
                query getCharacters($page: Int!){
                    characters(page: $page) {
                        results {
                            id,
                            name,
                            image,
                            status
                        }
                    }
                }`,
            variables() {
                return {
                    page: this.pageNumber
                }
            }
        }
    },
    watch: {
        $route(newValue) {
            this.pageNumber = parseInt(this.$route.params.page)
        }
    }
}
</script>

<template>
    <template v-if="$apollo.loading">
        <div class="sk-folding-cube">
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
        </div>
    </template>
    <template v-else>
        <div class="character-container" v-for="(character, index) in characters.results" :key="character.name">
            <div class="character__image" :data-status="character.status">
                <img :src="character.image" :alt="character.name" loading="lazy" />
            </div>
            <div class="character__infos">
                <h3 class="character__name">{{ character.name }}</h3>
                <RouterLink :to="{ name: 'detail', params: { id: character.id } }" class="character__btn">Detaylar
                </RouterLink>
            </div>
        </div>
    </template>

</template>

<style>

</style>