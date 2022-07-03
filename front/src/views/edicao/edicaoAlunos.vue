<template>
  <div>{{id}}</div>
</template>

<script>
export default {
  props:{ id: String},
   data(){
    return{}
  },
  methods: {
    executeLoad() {
      console.log(this.id)
    }
  },
  mounted() {
    this.executeLoad()
  },
}
</script>

<style>

</style>