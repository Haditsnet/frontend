<template>
  <div id="container">
		<Navbar></Navbar>
    <div class="col-md-9 col-sm-7">
      <router-view></router-view>
    </div>
    <div class="col-md-3 col-sm-5">
      <div class="list-group">
        <div class="list-group-item" v-for="hadit in hadits">
          <a v-bind:href=haditUrl(hadit) >
            <h4 class="list-group-item-heading">{{ hadit.imam_name }} #{{ hadit.number }} - Bab {{ hadit.detail.bab.title}}</h4>
            <p class="list-group-item-text" >{{ hadit.text_indonesia_truncated }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Navbar from '@/components/Navbar'

  export default{
    name: 'index',
    components: { Navbar },
    data () {
      return {
        hadits: []
      }
    },

    created () {
      this.fetchHadist()
    },

    methods: {
      haditUrl (hadit) {
        let url = `#/hadist/${hadit.imam_name.toLowerCase()}/${hadit.number}`
        return url
      },

      fetchHadist () {
        axios.get(`/api/imams/bukhari/hadits.json?page=1&random=true`)
        .then(function (hadits) {
          this.hadits = hadits.data
        }.bind(this))
        .catch(e => {
          alert(e)
        })
      }
    }

  }

</script>
