<template>
<headerMarkUp />
 <div class="prod" style="aligne-content: center">
          <img :src="currentData[0].url" class="card-img">
 </div>
 <div class="increment-decrement">
     <button style="width: 30px; height: 30px; margin: 10px" @click="add">+</button>
     <h3>{{counter}}</h3>
     <button style="width: 30px; height: 30px; margin: 10px" @click="minus">-</button>
 </div>
 <div style="position:absolute; top: 20%; left: 55%">{{currentData[0].title}}</div>
 <div style="position:absolute; top: 40%; left: 55%" >{{currentData[0].desc}}</div>
 <div style="position:absolute; top: 50%; left: 55%">Price: {{balance}}</div>
 
 <button style="position: absolute; top: 60%; width:100px; height: 30px"  @click="addItem">submit</button>
 

 </template>

<script>

import headerMarkUp from '../components/header.vue'
import prData from '../products.json'
import store from '../store/index'
export default {
components: {
    headerMarkUp,
   
  },
  data(){
      return {
          currentData: prData,
          counter: 1,
          balance: 0,
          additem: null
      }
  },
  mounted() {
     this.currentData = prData.filter(el=>el.id === parseInt(this.$route.query.plan)),
     this.balance = this.currentData[0].price
  },
  methods: {
      minus(){
          if(this.counter <=1){
              return
          }
          this.counter--,
          this.decPrice()
      },
      add(){
          this.counter++,
          this.incPrice()
      },
      incPrice(){
          this.balance+=this.currentData[0].price
      },
      decPrice(){
          this.balance-=this.currentData[0].price
      },
      addItem(){
          this.additem ={
              id: this.currentData[0].id,
              title: this.currentData[0].title,
              desc: this.currentData[0].desc,
              url: this.currentData[0].url,
              price: this.balance,
              amount: this.counter,
          }
          store.commit('setProduct', this.additem)

      },
      dissableButton(){
          store.getters.getProducts.forEach(element)
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
        width: 15em;
        height: 20em;
        margin-left: -2%;
        margin-top: -2%;
    }
    .increment-decrement{
        display: inline-flex;
        position:absolute;
        left: 50%;
        top: 58%
    }

</style>