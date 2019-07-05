<template>
  <div>
    <header>
      <top-tip :tipContent="topTip"></top-tip>
    </header>
    <div class>
      <div class="home_logo item_container_style"></div>
      <router-link to="item" class="start button_style"></router-link>
    </div>
  </div>
</template>

<script>
import TopTip from "@/components/TopTip";
import { mapState, mapActions } from 'vuex';
export default {
  name: "StartPage",
  components: {
    TopTip
  },
  data() {
    return {
    };
  },
  computed: {
      topTip: function(){
          return this.level;
      },
      ...mapState([
          'level'
      ])
  },
  methods:{
      ...mapActions([
          'initializeData'
      ])
  },
  beforeCreate: function () {
    document.getElementsByTagName('body')[0].className = 'itemBodyBg'
  },
  created: function(){
      this.initializeData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.item_container_style {
  height: 11.625rem;
  width: 13.15rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 4.1rem;
  left: 1rem;
}
.home_logo {
  background-image: url(../assets/images/1-2.png);
  background-size: 13.142rem 100%;
  background-position: right center;
}
.button_style {
  display: block;
  height: 2.1rem;
  width: 4.35rem;
  background-size: 100% 100%;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-left: -2.4rem;
  background-repeat: no-repeat;
}
.start {
  background-image: url(../assets/images/1-4.png);
}
</style>
