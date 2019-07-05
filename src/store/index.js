import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex);

const state = {
    level: '第一周', //活动周数
    itemIndex: 1, // 第几题
    allTime: 0,  //总共用时
    timer: '', //定时器
    answerIdArr: [], //答案id
    itemList: [{
        item_id: 20,
        item_name: "题目一",
        topic_answer: [
            {
                topic_answer_id: 1,
                answer_name: "答案aaaa",
                is_standard_answer: 0
            },
            {
                topic_answer_id: 2,
                answer_name: "正确答案",
                is_standard_answer: 0
            },
            {
                topic_answer_id: 3,
                answer_name: "答案cccc",
                is_standard_answer: 0
            },
            {
                topic_answer_id: 4,
                answer_name: "答案dddd",
                is_standard_answer: 1
            }
        ]
    },
    {
        item_id: 21,
        item_name: "题目二",
        active_id: 1,
        topic_answer: [
            {
                topic_answer_id: 5,
                answer_name: "答案A",
                is_standard_answer: 1
            },
            {
                topic_answer_id: 6,
                answer_name: "答案B",
                is_standard_answer: 0
            },
            {
                topic_answer_id: 7,
                answer_name: "正确答案",
                is_standard_answer: 0
            },
            {
                topic_answer_id: 8,
                answer_name: "答案D",
                is_standard_answer: 0
            }
        ]
    },
    {
        item_id: 21,
        item_name: "题目三",
        topic_answer: [
            {
                topic_answer_id: 9,
                answer_name: "测试A",
                is_standard_answer: 1
            },
            {
                topic_answer_id: 10,
                answer_name: "BBBBBB",
                is_standard_answer: 0
            },
            {
                topic_answer_id: 11,
                answer_name: "CCCCCC",
                is_standard_answer: 0
            },
            {
                topic_answer_id: 12,
                answer_name: "正确答案",
                is_standard_answer: 0
            }
        ]
    },
    {
        item_id: 21,
        item_name: "题目四",
        topic_answer: [
            {
                topic_answer_id: 13,
                answer_name: "正确答案",
                is_standard_answer: 1
            },
            {
                topic_answer_id: 14,
                answer_name: "A是错的",
                is_standard_answer: 0
            },
            {
                topic_answer_id: 15,
                answer_name: "D是对的",
                is_standard_answer: 0
            },
            {
                topic_answer_id: 16,
                answer_name: "C说的不对",
                is_standard_answer: 0
            }
        ]
    },
    {
        item_id: 21,
        item_name: "题目五",
        topic_answer: [
            {
                topic_answer_id: 17,
                answer_name: "错误答案",
                is_standard_answer: 1
            },
            {
                topic_answer_id: 18,
                answer_name: "正确答案",
                is_standard_answer: 0
            },
            {
                topic_answer_id: 19,
                answer_name: "错误答案",
                is_standard_answer: 0
            },
            {
                topic_answer_id: 20,
                answer_name: "错误答案",
                is_standard_answer: 0
            }
        ]
    }]
};

export default new Vuex.Store({
    state,
    actions,
    mutations
})