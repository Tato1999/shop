<template>
  <headerMarkUp />
  <cartItem v-for="(item, index) in getData" :key="index" :data="item"/>
      <h2 style="position: absolute; top: 20%; left: 50%;">total money: {{getFullBalance}}</h2>
</template>

<script>

import headerMarkUp from '../components/header.vue'
import store from '../store/index'
import cartItem from '../components/cartItem.vue'

export default {
    components: {
        headerMarkUp,
        cartItem,
     },
     data(){
         return
     },
     computed: {
        getData(){
            return store.getters.getProducts
        },
        getFullBalance(){
            let balance = 0
            this.getData.forEach(item => {
                balance += item.price
            });
            return balance
        }
     }
}
</script>

<style scoped>
    .prod{
        width: 30vh;
        height: 40vh;
        background-color: cadetblue;
        position: static;
        display: block;
        margin: 5%;
        padding: 5%;
        left:-28%;
    }
    .prod button {
        height: 5vh;
        margin-left: -63%;
        margin-top: 130%;
        display: inline-flex;
        position: static;
        text-align: center;
    }
    div img{
        position: static;
        display: inline-flex;
        width: 15em;
        height: 20em;
        margin-left: -2%;
        margin-top: -2%;
    }
</style>