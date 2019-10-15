import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // todos: [
        //     { id: 1, text: 'read', done: true },
        //     { id: 2, text: 'false', done: false }
        // ]
        count: 1
    },
    // getters: {
    //     doneTodos: state => {
    //         return state.todos.filter(todo => todo.done)
    //     },
    //     getDonelength: (state, getters) => {
    //         return getters.doneTodos.length
    //     }
    // },
    getters: {
        getState(state) {
            return state.count
        }
    },
    mutations: {
        INCREMENT(state, payload) {
            // state.count += payload.amount
            state.count++
        },
        DECREMENT(state, payload) {
            // state.count += payload.amount
            state.count--
        }
    },
    actions: {
        // increment({ commit }) {
        //     commit('increment')
        // }
        increment(context) {
            context.commit('INCREMENT')
        },
        decrement(context) {
            context.commit('DECREMENT')
        }
    }
})

// const store = {
//     state: {
//         count: 123
//     }
// }
// export { store }
// export default {
//     state: {
//         count: 13
//     }
// }