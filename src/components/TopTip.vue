<template>
  <div class="top_tips">
    <span class="num_tip">{{level}}</span>
  </div>
</template>
<script>
export default {
  props: {
    tipContent: {
      type: String,
      required: true
    }
  },
  data() {
    return {
        
    };
  },
  computed:{
      level: function(){
         return this.tipContent;
      }
  }
};
</script>
<style lang="less">
.top_tips {
  position: absolute;
  height: 7.35rem;
  width: 3.25rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url(../assets/images/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;
  z-index: 10;
  .num_tip {
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.6rem;
    font-family: "黑体";
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
};
</style>

