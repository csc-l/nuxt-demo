<template>
  <div class="footer-wrap" :class="{'fixed': fixed}">
    <p class="reference">nuxt-demo &copy;</p>
  </div>
</template>
<script>
export default {
  name: 'pageFooter',
  props: ['fixed']
}
</script>
