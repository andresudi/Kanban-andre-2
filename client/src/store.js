import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allTasks: '',
    backlogTasks: '',
    todoTasks: '',
    doingTasks: '',
    approvedTasks: ''
  },
  mutations: {
    ALL_TASKS(state, payload) {
      state.allTasks = payload
    },
    BACKLOG_TASKS(state, payload) {
      state.backlogTasks = payload
    },
    TODO_TASKS(state, payload) {
      state.todoTasks = payload
    },
    DOING_TASKS(state, payload) {
      state.doingTasks = payload
    },
    APPROVED_TASKS(state, payload) {
      state.approvedTasks = payload
    }
  },
  actions: {
    createTask (context, payload) {
      db.ref(`tasks/`).push(payload)
    },

    getAllTasks(context, payload) {
      
      db.ref('tasks/').on('value', function (snapshot) {
        let allTasks = snapshot.val()
        let backlogTasks = []
        let doingTasks = []
        let todoTasks = []
        let approvedTasks = []
        
        for (let index in allTasks) {
          let task = allTasks[index]
          task.id = index
          
          if (task.status === 0) {
            backlogTasks.push(task)
          } else if (task.status === 1) {
            todoTasks.push(task)
          } else if (task.status === 2) {
            doingTasks.push(task)
          } else if (task.status === 3) {
            approvedTasks.push(task)
          }
        }
        context.commit('ALL_TASKS', allTasks)
        context.commit('BACKLOG_TASKS', backlogTasks)
        context.commit('TODO_TASKS', todoTasks)
        context.commit('DOING_TASKS', doingTasks)
        context.commit('APPROVED_TASKS', approvedTasks)
      })
    },

    updateStatus(context, data) {
      console.log('=====>>>>>', data);
      
      if (data.next) {
        data.task.status--
      } else {
        data.task.status++
      }
      db.ref(`tasks/${data.task.id}`).set(data.task)
    },

    removeTask(contest, payload) {
      db.ref(`tasks/${payload}`).remove()
    }
  }
})