<template>
  <div>
    <header>
      <top-tip :tipContent="topTip"></top-tip>
    </header>
    <div>
      <div class="item_back item_container_style">
        <div class="item_list_container">
          <question-item :question="itemList[itemIndex-1]" @choosed="choosed"></question-item>
        </div>
      </div>
      <span class="next_item button_style" @click="nextItem" v-if="itemIndex < itemList.length"></span>
      <span class="submit_item button_style" v-else @click="submitAnswer"></span>
    </div>
  </div>
</template>

<script>
import TopTip from "@/components/TopTip";
import QuestionItem from "@/components/QuestionItem";
import { mapState, mapActions } from 'vuex';
// import AlertBox from "@/components/AlertBox";
export default {
  name: "QuestionPage",
  components: {
    TopTip,
    QuestionItem
  },
  data() {
    return {
      choosedId: null,
    };
  },
  computed: {
    topTip: function() {
      return "题目" + (this.itemIndex);
    },
    ...mapState([
        'itemIndex',
        'itemList',
        'timer'
    ])
  },
  methods: {
    choosed(id) {
      this.choosedId = id;
    },
    nextItem() {
      if (this.choosedId !== null) {
        //存储已选的题目答案
        this.addNum(this.choosedId);
        this.choosedId = null;
        //题目索引加一
        // this.itemIndex++;
      } else {
        alert("您还没有选择答案呦");
      }
    },
    submitAnswer() {
      if (this.choosedId !== null) {
        //存储最后一题的答案
        this.addNum(this.choosedId);
        //清除计时器
        clearInterval(this.timer);
        //路由跳转到分数页
        this.$router.push('score');
      } else {
        alert("您还没有选择答案呦");
      }
    },
    ...mapActions([
        'addNum'
    ])
  },
  beforeCreate: function () {
    document.getElementsByTagName('body')[0].className = 'itemBodyBg'
  },
  create: function(){

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
.item_list_container {
  position: absolute;
  height: 7rem;
  width: 8rem;
  top: 2.4rem;
  left: 3rem;
  -webkit-font-smoothing: antialiased;
}
.item_back {
  background-image: url(../assets/images/2-1.png);
  background-size: 100% 100%;
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
.next_item {
  background-image: url(../assets/images/2-2.png);
}
.submit_item {
  background-image: url(../assets/images/3-1.png);
}
</style>
