<script>
import Loader from './common/loader.vue';
export default{
    props: {
        cartTotalLabel: String,
        cartTotal: String,
        buttonLabel: String,
        loading: Boolean,
        disabled: Boolean
    },
    emits: ["onCheckout"],
    methods: {
        checkoutButtonHandler() {
            this.$emit("onCheckout");
        }
    },
    components: { Loader }
}
</script>

<template>
<div class="cart_total_container">
    <h3>{{cartTotalLabel}}</h3>
    <h3>{{cartTotal}}</h3>
    <button class="cart_checkout_button" :class="{'disabled': disabled || loading}" @click="checkoutButtonHandler">
        <Loader v-if="loading"/>
        <span v-else>{{buttonLabel}}</span>
    </button>
</div>
</template>

<style scoped>
.cart_total_container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.cart_checkout_button{
    width: 100%;
    height: 50px;
    padding: 16px;
    color: white;
    font-weight: bold;
    background-color: #f8ae00;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.1s linear;
}
.cart_checkout_button:hover{
    background-color: #f49626;
}
.cart_checkout_button.disabled {
    background-color: #eaeaea;
    color: black;
    cursor: initial;
}

</style>