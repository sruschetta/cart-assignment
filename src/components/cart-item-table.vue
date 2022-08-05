<script>
import Loader from './common/loader.vue';
export default {
    props: {
        title: String,
        headers: Array,
        loading: Boolean,
    },
    components: { Loader }
}
</script>

<template>
    <div v-if="loading" class="loader_container">
        <Loader :big="true"/>
    </div>
    <div v-else>
        <h1>{{title}}</h1>
        <table class="cart_item_table">
            <tr class="table_header">
                <th v-for="header in headers" class="table_header_cell">{{header}}</th>
            </tr>
            <slot></slot>
        </table>
    </div>
</template>

<style scoped>
.table_header{
    border-bottom: 1px solid #eaeaea;
    text-align: left;
}
.table_header_cell{
    padding: 16px;
}
.loader_container{
    display: flex;
    align-items: center;
    justify-content: center;
}
.cart_item_table{
    width: 100%;
    border-collapse: collapse;
}
</style>