<template>
      <div class="prod" style="aligne-content: center">
          <img :src="data.url" class="card-img">
          <h6></h6>
         
          <button @click="openInner">
              <p style="margin-left: -80px;margin-top: 10px; position: static;">View More</p>
          </button>
    
      </div>
</template>

<script>
export default {
    props:{
        data:{
            required: true

        }
    },
    methods: {
        openInner(){
            this.$router.push({path: 'more', query: { plan: this.data.id}})
        }
    }

}
</script>

<style scoped>
 .prod{
        width: 10vh;
        height: 20vh;
        background-color: cadetblue;
        display: inline-flex;
        position:static;
        margin: 5%;
        padding: 5%;
    }
    .prod button {
        margin-left: -116px;
        padding-left: 145%;
        height: 5vh;
        display: inline-flex;
        margin-top: 180%;
        position: static;
        text-align: center;
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