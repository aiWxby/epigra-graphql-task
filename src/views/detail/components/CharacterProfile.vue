<script>
export default {
    name: 'CharacterProfile',
    props: {
        characterImage: String,
        characterName: String
    }
}
</script>

<template>
    <div class="profile-section">
        <img class="profile__image" :src="characterImage" :alt="characterName" loading="lazy">
    </div>
</template>

<style>

</style>