<script>
export default {
    name: 'CharacterDetail',
    props: {
        characterDetails: Object
    }
}
</script>

<template>
    <div class="detail-section">
        <h1 class="detail__name">{{ characterDetails.name }}</h1>
        <h3 class="detail__species">{{ characterDetails.species }}</h3>
        <div class="detail-list">
            <div class="detail-list__item"><span>Status</span>: {{ characterDetails.status }} </div>
            <div class="detail-list__item"><span>Origin</span>: {{ characterDetails.origin.name }} </div>
            <div class="detail-list__item"><span>Gender</span>: {{ characterDetails.gender }} </div>
            <div class="detail-list__item"><span>Location</span>: {{ characterDetails.location.name }} </div>
            <div class="detail-list__item"><span>Episode(s)</span>:
                <template v-for="episode in characterDetails.episode">
                    {{ episode.name }}<br>
                </template>
            </div>
        </div>
    </div>
</template>

<style>

</style>