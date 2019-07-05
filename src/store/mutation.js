const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'

export default {
    [ADD_ITEMNUM](state, num){
        state.itemIndex += num;
    },

    [REMBER_ANSWER](state, id){
        state.answerIdArr.push(id);
    },

    [REMBER_TIME](state){
        state.timer = setInterval(() => {
            state.allTime++;
        }, 1000);
    },

    [INITIALIZE_DATA](state){
        state.itemIndex = 1;
        state.allTime = 0;
        state.answerIdArr = [];
    }
}