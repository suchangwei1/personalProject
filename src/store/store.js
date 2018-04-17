import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
      count:1
  },
   mutations:{
     reduce(state){
       state.count+=1;
     },
     addAction(state){
       state.count-=1;
     }
  }
})

export default store
