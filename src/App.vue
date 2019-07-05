<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import rem from '@/common/rem.js'
export default {
  name: 'App',
  mounted:function(){
      rem(document, window);
  }
}
// document.addEventListener('DOMContentLoaded', () => {
//   const html = document.querySelector('html');
//   let fontSize = window.innerWidth / 10;
//   fontSize = fontSize > 50 ? 50 : fontSize;
//   html.style.fontSize = fontSize + 'px';
// })
</script>

<style lang='less'>
@import 'assets/style/common.less';
</style>
