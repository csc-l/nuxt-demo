<template>
  <div>
    <header-bar></header-bar>
    <nuxt />
    <page-footer :fixed="true"></page-footer>
  </div>
</template>

<script>
import headerBar from '~/components/loginHeaderBar'
import pageFooter from '~/components/pageFooter'
export default {
  name: 'errorPage',
  components: {
    headerBar,
    pageFooter
  },
  props: ['error'],
  head () {
    return {
      title: 'login page '
    };
  }
}
</script>
