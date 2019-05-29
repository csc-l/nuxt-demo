<template>
  <section class="container">
    <header-bar></header-bar>
    <div class="banner-wrap">
      <Carousel v-model="filmIndex" :autoplay-speed="3000" loop autoplay>
        <template v-for="(item, index) in films" >
          <CarouselItem :key="index">
            <nuxt-link :to="`/film/detail/${index}`">
              <img :src="item.imgUrl" :alt="item.title">
            </nuxt-link>
          </CarouselItem>
        </template>
      </Carousel>
    </div>
    <div class="demo-list">
      <Card v-for="(item, index) in films" :key="index">
          <p slot="title">
              <Icon type="ios-film-outline"></Icon>
              {{item.title}}
          </p>
          <nuxt-link :to="`/film/detail/${index}`" slot="extra">
            <Icon type="ios-loop-strong"></Icon>
            详情
          </nuxt-link>
          <p>
            {{item.content}}
          </p>
      </Card>
    </div>
    <page-footer></page-footer>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import headerBar from '~/components/headerBar.vue'
import pageFooter from '~/components/pageFooter.vue'
import axios from '~/plugins/axios2'
export default {
  components: {
    Logo,
    headerBar,
    pageFooter
  },
  head () {
    return {
      title: 'nuxt-demo | 首页',
      meta: [
        { hid: 'description', name: 'description', content: 'content 测试' }
      ],
    };
  },
  async asyncData(context) {
    // console.log();
    const newsPageData = await axios.get('/rest/film/list')
    // console.log(newsPageData)
    const { list } = newsPageData.data;
    return {
      films: list && list.length > 0 ? list.slice(0,6) : []
    };
  },
  data() {
    return {
      filmIndex: 0
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 500)
    // })
  }
}
</script>

<style lang="less" scoped>

.container {
  margin: 0 auto;
  min-height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  /* text-align: center; */
}
.banner-wrap{
  width: 1200px;
  margin: 0 auto;
  margin-top: 15px;
  cursor: pointer;
}
.demo-list{
  width: 1200px;
  min-height: 50px;
  display: block;
  margin: 0 auto 20px auto;
  & /deep/ .ivu-card{
    display: inline-block;
    vertical-align: top;
    text-align: left;
    width: 100%;
    margin: 20px 20px 0 auto;
  }
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>