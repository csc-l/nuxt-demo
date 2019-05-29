<template>
  <div class="film-detail-container">
    <header-bar></header-bar>
    <div class="film-detail-wrapper">
      <h2>{{film.title}}</h2>
      <img :src="film.imgUrl" :alt="film.title">
      <div class="content-wrap" v-html="film.content"></div>
    </div>
    <page-footer></page-footer>
  </div>
</template>
<script>
import headerBar from '~/components/headerBar.vue'
import pageFooter from '~/components/pageFooter.vue'
import axios from '~/plugins/axios2'
export default {
  name: 'filmDetail',
  middleware: 'authorization',
  components: {
    headerBar,
    pageFooter
  },
  head () {
    return {
      title: 'nuxt-demo | ' + this.film.title,
      meta: [
        { hid: 'description', name: 'description', content: this.film.content }
      ]
    }
  },
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  async asyncData(context) {
    const id = context.route.params.id
    const newsPageData = await axios.get(`/rest/film/detail/${id}`)
    const data = newsPageData.data;
    if (!data) {
      return context.error({ statusCode: 404, message: 'Post not found' })
    }
    return {
      film: data
    }
  }
}
</script>
<style lang="less" scoped>
.film-detail-container{
  .film-detail-wrapper{
    min-height:700px;
    width: 1200px;
    margin: 0 auto;
    h2{
      font-size: 20px;
      line-height: 50px;
      height: 50px;
    }
  }
}
</style>
