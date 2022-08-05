<script>
export default {
    props: {
        big: Boolean,
    }
}
</script>

<template>
    <div class="loader" :class="{'big' : big }"></div>
</template>

<style scoped>
    .loader {
        display: inline-block;
        border: 2px solid #eaeaea; /* Light grey */
        border-top: 2px solid white; /* Blue */
        border-radius: 50%;
        width: 14px;
        height: 14px;
        animation: spin 0.75s linear infinite;
    }

    .big {
        border: 8px solid #f49626; /* Light grey */
        border-top: 8px solid white; /* Blue */
        width: 120px;
        height: 120px;
        animation: spin 0.75s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>