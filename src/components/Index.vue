<template>
  <div id="container">
    <h1>Hello world</h1>
    <h2> {{ hadits }} </h2>
  </div>
</template>

<script>
  import axios from 'axios'

  export default{
    name: 'index',
    data () {
      return {
        hadits: []
      }
    },

    created () {
      this.fetchHadits()
    },

    methods: {
      fetchHadits () {
        axios.get(`/api/imams/bukhari/hadits.json?page=1&random=true`)
        .then(function (hadits) {
          this.hadits = hadits
        })
        .catch(e => {
          alert(e)
        })
      }
    }

  }

</script>
