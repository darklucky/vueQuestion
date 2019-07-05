<template>
  <div>
    <div class="top_blank"></div>
    <div class="score_container">
      <header class="score">
        <span class="score_num">{{score}}</span>
        <span class="score_unit">分！</span>
      </header>
      <div class="score_tip">{{scoreTips}}</div>
    </div>
    <div class="share_button" @click="showCover"></div>
    <div class="share_code">
      <header class="share_header">关注葡萄之家，获取答案。</header>
      <img src="../assets/images/4-4.png" alt="关注" class="code_img" />
    </div>
    <div class="share_cover" v-show="showHide" @click="showCover">
      <img src="../assets/images/5-2.png" alt class="share_img" />
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ScorePage",
  data() {
    return {
      showHide: false,
      score: 0,
      scoreTips: "",
      scoreTipsArr: [
        "你说，是不是把知识都还给小学老师了？",
        "还不错，但还需要继续加油哦！",
        "不要嘚瑟还有进步的空间！",
        "智商离爆表只差一步了！",
        "你也太聪明啦，葡萄之家欢迎你！"
      ]
    };
  },
  methods: {
    showCover: function() {
      this.showHide = !this.showHide;
    },
    computeScore() {
      var answerMap = this.itemList.map((item, index) => {
        return getRightAnswer(item.topic_answer);
      }, this.itemList);
      this.answerIdArr.forEach((item, index) => {
        if (item === answerMap[index]) {
          this.score += 20;
        }
      });
    },
    getScoreTip() {
      var index = Math.ceil(this.score / 20) - 1;
      index = index < 0 ? 0 : index;
      this.scoreTips = this.scoreTipsArr[index];
    }
  },
  computed: {
    ...mapState(['answerIdArr', 'itemList'])
  },
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].className = "scoreBodyBg";
  },
  created() {
    //计算分数
    this.computeScore();
    //获取分数提示
    this.getScoreTip();
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  }
};

function getRightAnswer(arr) {
  var answerId = "";
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i].is_standard_answer === 1) {
      answerId = arr[i].topic_answer_id;
      break;
    }
  }
  return answerId;
}
</script>
<style lang="less" scoped>
.top_blank {
  height: 1.2rem;
}
.score_container {
  width: 9.7rem;
  height: 9.1rem;
  background: url(../assets/images/4-2.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto 0;
  position: relative;
  .score {
    position: absolute;
    width: 100%;
    text-indent: 3.3rem;
    top: 4.7rem;
    font-size: 1.4rem;
    font-weight: 900;
    -webkit-text-stroke: 0.05rem #412318;
    font-family: "Microsoft YaHei";
    .score_num {
      font-family: Tahoma, Helvetica, Arial;
      color: #a51d31;
    }
    .score_unit {
      color: #a51d31;
    }
  }
  .score_tip {
    position: absolute;
    top: 7rem;
    width: 9rem;
    left: 0.6rem;
    color: #3e2415;
    font-size: 0.65rem;
    text-align: center;
  }
}
.share_button {
  width: 6.025rem;
  height: 2.4rem;
  margin: 0.8rem auto 0;
  background: url(../assets/images/4-3.png) no-repeat 0.4rem 0;
  background-size: 5.825rem 100%;
}
.share_code {
  width: 5.3rem;
  margin: 1.5rem auto 0;
  .share_header {
    color: #664718;
    font-size: 0.475rem;
    font-family: "Microsoft YaHei";
    width: 7rem;
    font-weight: 500;
  }
  .code_img {
    height: 5.3rem;
    width: 5.3rem;
    margin-top: 0.5rem;
  }
}
.share_cover {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  background: url(../assets/images/5-1.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0.92;
}
.share_img {
  height: 10.975rem;
  width: 11.95rem;
  position: fixed;
  top: 0.5rem;
  left: 50%;
  margin-left: -5.975rem;
}
</style>

