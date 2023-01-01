<script>
export default {
    name: 'PageNotFound'
}
</script>

<template>
    <main>
        <div class="not-found">
            <h1>BÖYLE BİR SAYFA YOK HÜÜ :(</h1>
            <img class="not-found__img" 
                src="https://i.pinimg.com/736x/34/9f/a6/349fa657ec1b8f88fda91103cfa49cea.jpg"
                alt="404"
                loading="lazy">
        </div>
    </main>
</template>

<style scoped>
.not-found {
    background-image: -webkit-gradient(linear, left top, right top, from(#0d1b35), color-stop(50%, #0a1425));
    background-image: linear-gradient(to right, #0d1b35, #0a1425 50%);
    padding: 20px;
    margin: 20px 0px;
    border-radius: 10px;
    text-align: center;
    font-size: 1rem;
}

.not-found .not-found__img {
    height: auto;
    width: 300px;
    border-radius: 10px;
    object-fit: cover;
    margin-top: 20px;
    -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2)
}
</style>