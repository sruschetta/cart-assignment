<script>

import CartItemTable from '../components/cart-item-table.vue'
import CartItem from '../components/cart-item.vue'
import CartTotal from '../components/cart-total.vue'
import CartSuccess from '../components/cart-success.vue'
import Loader from '../components/common/loader.vue'

import { getCart, submitOrder } from '../services/api'

export default{
    components: { CartItem, CartTotal, CartSuccess, Loader, CartItemTable },
    data() {
        return {
            cartId: null,
            items: [],
            itemsLoading: true,
            orderLoading: false,
            errorMessage: null,
            checkoutSuccess: false
        }
    },
    computed: {
        checkoutEnabled() {
            return (this.items.length > 0)
        },
        orderTotal() {

            let total = 0;
            this.items.forEach( item => {
                total += (item.price*item.qty)
            }) 
            return total
        }
    },
    async mounted() {
        try{
            const res = await getCart(Math.floor(Math.random() * 1000))
            this.cartId = res.id
            this.items = res.items
        }
        catch(error){
            console.log(error)
        } 
        this.itemsLoading = false
    },
    methods: {
        async submitOrderHandler() {

            this.errorMessage = null
            this.orderLoading = true

            const items = this.items.map( (item) => {
                return {
                    sku: item.sku,
                    qty: item.qty
                }
            });

            try {
                const res = await submitOrder(this.cartId, items)
                if(res.cart_id === this.cartId){
                    this.checkoutSuccess = true
                }
                else {
                    throw('checkout error')
                }
            }
            catch(error){
                console.log(error)
                this.errorMessage = 'Qualcosa è andato storto! Prova ad effettuare nuovamente il Checkout!'
            };

            this.orderLoading = false
        },
        itemDeleteHandler(sku){
            this.items = this.items.filter( item => item.sku !== sku );
        }
    }
}

</script>

<template>
    <div class="cart_container">
        <CartSuccess v-if="checkoutSuccess" 
            :title="'Ottime notizie!'"
            :body="'Il tuo ordine è stato eseguito con successo!'"
        />
        <div v-else>
            <CartItemTable :title="'Il tuo Carrello'"
                           :headers="['', 'Descrizione', 'Prezzo', 'Elimina']"
                           :loading="itemsLoading">
                <CartItem v-for="item in items" 
                    :key="item.sku" 
                    :sku="item.sku"
                    :name="item.name" 
                    :price="item.price" 
                    :quantity="item.qty"
                    :imageUrl="item.image"
                    @onItemDelete="itemDeleteHandler"
                />
            </CartItemTable>
            <CartTotal :cartTotalLabel="'Totale'" 
                    :cartTotal="`${orderTotal} €`"
                    :buttonLabel="'Checkout'"
                    :disabled="!checkoutEnabled"
                    :loading="orderLoading"
                    @onCheckout="submitOrderHandler" />
            <div v-if="errorMessage" class="cart_error_message">{{errorMessage}}</div>
        </div>
    </div>
</template>

<style scoped>
    .cart_container{
        width: 80%;
        padding: 32px;
        margin: 0 auto;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 8px;
    }
    .cart_items_container{
        width: 100%;
    }
    .cart_error_message{
        padding: 16px;
        margin-top: 20px;
        background-color: #ffdbdb;
        color: #f95668;
        border-radius: 8px;
        border: #f95668 1px solid;
    }
</style>