<script>
import gql from "graphql-tag";

export default {
    name: 'Pagination',
    data() {
        return {
            characters: [],
            pages: 0,
            pageNumber: 1
        }
    },
    apollo: {
        characters: {
            query: gql`
                query  {
                    characters {
                        info {
                            count,
                            pages
                        }
                    }
                }`
        }
    },
    methods: {
        goToPage() {
            this.$router.replace('/home/' + this.pageNumber)
        }
    },
    watch: {
        characters(newValue, oldValue) {
            this.pages = newValue.info.pages
        }
    }
}
</script>

<template>
    <div class="pagination">
        <p><span>{{ pages }}</span> sayfa arasından <span>{{ this.$route.params.page }}</span>. sayfadasın.</p>
        <input @input="this.pageNumber = $event.target.value" type="text" placeholder="Sayfa belirt">
        <a href="" @click="goToPage()"><button>Git</button></a>
    </div>
</template>

<style>

</style>