<template>
  <div>
      <br>
      <div style="aligne-content: center">
            <input v-model="searchWord" type="search" class="search" placeholder="shearch, write georgian...">
      </div>
      <br>
      <prodMarkUp v-for="(item,index) in getData" :key= "index" :data="item"/>
      <p v-if="errorMsg">Oops, we dont have this item, sorry</p>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import prodMarkUp from '../components/prod.vue'
import prData from '../products.json'
export default {
    components: {
        prodMarkUp,
        prData
    },
    data() {
        return {
            productsData: prData,
            searchWord: "",
            errorMsg: false
        }

    },
    computed: {
        getData(){
            return this.productsData.filter(el => el.title.includes(this.searchWord))
        }
    },
    watch: {
        getData: {
            immediate: true,
        handler: function(){
            if(this.getData.length === 0){
                this.errorMsg= true
            }else{
                this.errorMsg = false
            }
         }
        }
    }

}
</script>

<style scoped>

    .search{
        position: absolute;
        width: 300px;
        margin-left: -150px
    }

</style>