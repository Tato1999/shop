<template>
  <div class="prod" style="aligne-content: center">
       <img :src="data.url" class="card-img">
       <h1 style="position:static;">{{data.title}}</h1>
       <h4 style="position:static;">ჯამი: {{data.price}}</h4>
       <h3 style="position:static;">რაოდენობა: {{data.amount}}</h3>
       <h3 style="position:static;">{{data.desc}}</h3>
       <button @click="test">Delete</button>
  </div>
</template>

<script>
import store from '../store/index'
export default {
    props: {
        data: {
            required: true
        }
    },
    data(){
        return
    },
    computed: {
        getData(){
         return {
            storeData: store.getters.getProducts
            }
        }
    },
    methods:{
        test(){
            console.log(this.storeData)
        }
    }
    
}
</script>

<style scoped>
.prod{
        width: 30vh;
        height: 40vh;
        background-color: cadetblue;
        display: inline-flex;
        position:relative;
        margin: 5%;
        padding: 5%;
        left:-28%;
    }
        div img{
        position: static;
        display: inline-flex;
        width: 7em;
        height: 7em;
        margin-left: -22%;
        margin-top: -20%;
        border-radius: 50%;
    }
</style>