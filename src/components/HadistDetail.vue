<template>
  <div id="hadist-detail">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<h2 class="panel-title">Hadist riwayat - Imam #{{ hadit.imam_name}} - {{ hadit.number }}</h2>
			</div>
			<div class="panel-body">
				<div class="well hadist-text-arabic">
					{{ hadit.text_arabic}}
				</div>
				{{ hadit.text_indonesia }}
			</div>
		</div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default{
    name: 'hadist_detail',
    data () {
      return {
        hadit: {}
      }
    },

    created () {
      this.fetchHadist()
    },

    watch: {
      '$route': 'fetchHadist'
    },

    methods: {
      fetchHadist () {
        axios.get('/api/imams/' + this.$route.params.imam_name + '/hadits/' + this.$route.params.hadist_number + '.json')
        .then(function (hadit) {
          this.hadit = hadit.data.hadits
        }.bind(this))
        // axios.get('/api/imams')
      }
    }
  }

</script>

<style scoped>
	.hadist-text-arabic{
		font-size: 1.7em;
		line-height: 2em;
		text-align: right;
		letter-spacing: 1px;
	}
</style>
