<template>
  <div>
    <header class="item_title">{{question.item_name}}</header>
    <ul>
      <li class="item_list" v-for="(item, index) in question.topic_answer" :key="item.topic_answer_id"  @click="choosed(item.topic_answer_id)">
        <span
          class="option_style"
          v-bind:class="{'isChoosed':choosedId===item.topic_answer_id}"
        >{{chooseType(index)}}</span>
        <span class="option_detail">{{item.answer_name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['question'],
  data() {
    return {
      itemId: null,
      choosedId: null,
      answerIndexMap: ["A", "B", "C", "D", "E"]
    };
  },
  methods: {
    choosed(id) {
      this.choosedId = id;
      this.$emit('choosed', id);
    },
    chooseType(index) {
      return this.answerIndexMap[index];
    }
  },
  computed: {}
};
</script>
<style lang="less" scoped>
.item_title{
		font-size: 0.65rem;
		color: #fff;
		line-height: 0.7rem;
	}
.item_list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }
  .option_style {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: "Arial";
  }
  .isChoosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
</style>


