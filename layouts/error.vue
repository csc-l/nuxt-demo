<template>
  <div class="error-container">
    <header-bar></header-bar>
    <div class="error-wrap">
      <img src="/404.png" alt="">
    </div>
    <page-footer></page-footer>
  </div>
</template>
<script>
import headerBar from '~/components/headerBar.vue'
import pageFooter from '~/components/pageFooter.vue'
export default {
  name: 'errorPage',
  components: {
    headerBar,
    pageFooter
  },
  props: ['error'],
  head () {
    return {
      title: 'nuxt-demo | ' + this.error.message
    };
  }
}
</script>
