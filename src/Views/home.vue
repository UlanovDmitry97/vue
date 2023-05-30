<template>
  <h1 class="title">
    {{name}}
  </h1>
</template>

<script>
import {get} from "../utils/http";

export default {
  data() {
    return {
      dataApi: 'test',
      name: ''
    }

  },
  mounted() {
    get('https://swapi.dev/api/people/1/').then((result) =>  {
      this.dataApi = result
      this.name = result.name
    })
  }
}
</script>

<style lang="scss" scoped>
  .title {
    margin-top: 20px;
    text-align: center;
    color: black;
  }
</style>
