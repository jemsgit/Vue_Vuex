import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [{title:'Hello', done: false}, {title: 'Hello2', done: true}]
  },
  mutations: {
    addToDo (state, payload) {
      state.todos.push(payload)
    }
  },
  actions: {

  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    }
  }
});
