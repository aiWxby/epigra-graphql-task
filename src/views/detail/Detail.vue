<script>
import CharacterProfile from './components/CharacterProfile.vue';
import CharacterDetail from './components/CharacterDetail.vue';
import gql from "graphql-tag";

export default {
    name: 'Detail',
    components: {
        CharacterProfile,
        CharacterDetail
    },
    data() {
        return {
            charID: this.$route.params.id,
            character: []
        }
    },
    apollo: {
        character: {
            query: gql`
                query getCharacter($characterID: ID!) {
                    character(id: $characterID) {
                        image
                        name
                        species
                        status
                        gender
                        origin {
                            name
                        }
                        location {
                            name
                        }
                        episode {
                            name
                        }
                    }
                }`,
            variables() {
                return {
                    characterID: this.charID
                }
            }
        }
    }
}
</script>

<template>
    <main>
        <template v-if="$apollo.loading">
            <div class="sk-folding-cube">
                <div class="sk-cube1 sk-cube"></div>
                <div class="sk-cube2 sk-cube"></div>
                <div class="sk-cube4 sk-cube"></div>
                <div class="sk-cube3 sk-cube"></div>
            </div>
        </template>
        <template v-else>
            <div class="detail-container">
                <CharacterProfile :characterImage="character.image" :characterName="character.name" />
                <CharacterDetail :characterDetails="character" />
            </div>
        </template>
    </main>
</template>

<style>

</style>