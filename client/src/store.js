import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    task: '',
    id: ''
  },
  mutations: {
    GET_TASKS(state, payload) {
      state.tasks = payload
    },

    GET_ONE(state, payload) {
      state.task = payload
    },

    SET_ID(state, payload) {
      state.id = payload
    }
  },
  actions: {
    createTask (context, payload) {
      db.ref(`tasks/`).push(payload)
    },

    updateBackLog(context, data) {
      db.ref(`tasks/${data.id}`).set({
        title: data.title,
        description: data.description,
        point: data.point,
        assignedTo: data.assignedTo,
        status: 'backlog'
      })
    },

    updateToDo(context, data) {
      db.ref(`tasks/${data.id}`).set({
        title: data.title,
        description: data.description,
        point: data.point,
        assignedTo: data.assignedTo,
        status: 'todo'
      })
    },

    updateDoing(context, data) {
      db.ref(`tasks/${data.id}`).set({
        title: data.title,
        description: data.description,
        point: data.point,
        assignedTo: data.assignedTo,
        status: 'doing'
      })
    },

     updateApproved(context, data) {
      db.ref(`tasks/${data.id}`).set({
        title: data.title,
        description: data.description,
        point: data.point,
        assignedTo: data.assignedTo,
        status: 'approved'
      })
     },

    getAllTask(context) {
      db.ref('tasks/').on('value', function(snapshot) {
        let tasks = snapshot.val()
        context.commit('GET_TASKS', tasks) 
        console.log('ini all task', tasks)
      })
    },

    getOneTask(context, id) {
      console.log('ini',id);
      db.ref('tasks/' + id).once('value', function(snapshot) {
        let task = snapshot.val()
        context.commit('GET_ONE', task) 
        context.commit('SET_ID', id) 
        console.log('ini task', task)
      })
    },

    removeTask(contest, data) {
      db.ref('tasks/').child(data).remove()
    }
  }
})