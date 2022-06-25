<template>
  <headerMarkUp/>
  <bodyMarkUp/>
</template>

<script>
import headerMarkUp from '../components/header.vue'
import bodyMarkUp from '../components/body.vue'

export default {
  components: {
    headerMarkUp,
    bodyMarkUp
  }
}
</script>

<style>
    .search{
        position: absolute;
        width: 300px;
        margin-left: -150px
    }
</style>