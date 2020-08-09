import Vue from 'vue'
import Vuex from 'vuex'
import db from "@/fb";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    team: [],
  },
  mutations: {
    addProject(state, project) {
      if (!state.projects.find(cProject => cProject.id === project.id)) {
        state.projects.push(project)
      }
    },
    addMember(state, member) {
      if (!state.team.find(mem => mem.id === member.id)) {
        state.team.push(member)
      }
    }
  },
  actions: {
    getProjects(context) {
      db.collection("projects").onSnapshot((res) => {
        const changes = res.docChanges();
        changes.forEach((change) => {
          if (change.type === "added") {
            context.commit('addProject', {
              ...change.doc.data(),
              id: change.doc.id,
            });
          }
        });
      });
    },
    getTeam(context) {
      db.collection('members').onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if (change.type === 'added') {
            context.commit('addMember', {
              ...change.doc.data(),
              id: change.doc.id,
            })
          }
        })
      })
    }
  },
  modules: {}
})