<script>
    export default{
        props:{
            title: String,
            body: String
        }
    }
</script>

<template>
    <div class="cart_checkout_message">
        <h2>{{title}}</h2>
        <h3>{{body}}</h3>
    </div>
</template>

<style scoped>
.cart_checkout_message{
    display: flex;
    min-height: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.cart_checkout_message h2 {
    color: #f49626
}
</style>