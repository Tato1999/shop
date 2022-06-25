<template>
  <div class="hello">
    <div class="header">
      <h1 class="text">Online Market</h1>
      <div :class="{'active' : active }" class="card">
        <router-link to="/card">
        <img src="../assets/logo.png" class="card-img">
        </router-link>
        <div  class="numb-prod">{{getProductLenght}}</div>
      </div>
    </div>
    <br>
    
  </div>
</template>

<script>
import store from '../store/index'
export default {
  data(){
    return {
      active: false
    }
  },
  computed: {
   getProductLenght() {
     return store.getters.getProducts.length
   } 
  },
  watch: {
    getProductLenght: function(){
      this.active = true
      setTimeout(() => {
         this.active = false
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    width: 100%;
    height: 50px;
    background-color: gray;
    position: absolute;
    top: 5px;
  }
  .text{
    color: gold;
    position: absolute;
    left: 15px;
    top: -15px
  }
  .card{
    width: 35px;
    height: 35px;
    position: absolute;
    right: 10px;
    top: 7.5px;
    transition: 0.5s;
  }
  .card.active{
    transform: scale(1.2);
  }
  .card-img{
    width: 35px;
    height: 35px;
  }
  .numb-prod{
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: red;
    color: yellow;
    text-align: center;
    justify-content: center;
    position: absolute;
    top: 20px;
    right: 22px;
  }
</style>
