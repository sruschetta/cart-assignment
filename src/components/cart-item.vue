
<script>
export default {
    props: {
        sku: String,
        name: String,
        price: String,
        imageUrl: String,
        quantity: Number
    },
    emits: ['onItemDelete'],
    methods: {
        itemDeleteHandler() {
            this.$emit("onItemDelete", this.sku);
        }
    }
}
</script>

<template>
    <tr class="item_container">
        <td>
            <img :src="imageUrl" class="item_image"/>
        </td>
        <td>
            <h5 class="item_name">{{name}}</h5>
            <div><span class="item_price">{{price}} €</span> x <span class="item_quantity">{{quantity}}</span></div>
        </td>
        <td>
            <strong>{{price*quantity}} €</strong>
        </td>
        <td>
            <button class="item_delete_button" @click="itemDeleteHandler">Elimina</button>
        </td>
    </tr>
</template>

<style scoped>

.item_container{
    border-bottom: #eaeaea 1px solid;
    padding: 16px;
}
.item_container td{
    padding: 8px 16px;
}
.item_image{
    width: 160px;
    height: 160px;
}
.item_name{
    font-weight: bold;
    margin-top: 0;
}
.item_price {
    color: #f49626
}

.item_delete_button {
    padding: 8px;
    color: #f95668;
    background-color: #ffdbdb;
    border: #f95668 1px solid;
    border-radius: 4px;
    cursor: pointer;
}
</style>