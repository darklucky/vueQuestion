export default {
    addNum({commit, state}, id){
        commit('REMBER_ANSWER', id);
        if(state.itemIndex < state.itemList.length){
            commit('ADD_ITEMNUM', 1)
        }
    },

    initializeData({commit}){
        commit('INITIALIZE_DATA');
    }

}