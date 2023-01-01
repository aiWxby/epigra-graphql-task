<script>
export default {
    name: 'MenuComponent'
}
</script>

<template>
    <header>
        <nav class="menu">
            <ul>
                <RouterLink :to="{ name: 'home', params: { page: 1 } }" tag="a">
                    <li>Anasayfa</li>
                </RouterLink>
                <a href="https://github.com/aiWxby" target="_blank">
                    <li>GitHub</li>
                </a>
            </ul>
        </nav>
    </header>
</template>

<style scoped>

</style>