// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  parameter:'',
  items: []
}

//to handle state
const getters = {
  
}

//to handle actions
const actions = {
  getItems() {

var options = {
  method: 'GET',
  url: 'https://pokedex2.p.rapidapi.com/pokedex/uk/pikachu',
  headers: {
    'x-rapidapi-host': 'pokedex2.p.rapidapi.com',
    'x-rapidapi-key': 'bf078bacdbmshd455c87a66d94c1p15126ajsn0bc7cba114f7'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}
}

//to handle mutations
const mutations = {
  SET_ITEMS(state, items) {
    state.itens = items
  }
}

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})