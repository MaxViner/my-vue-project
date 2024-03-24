
import { createStore } from 'vuex';


export default createStore({
  modules: {
    proj: {
      namespaced: true,
      state: {
        project: {},
      },
      mutations: {
        setProj(state, project) {
          console.log(project);
          state.project = project;
        },
      },
      getters: {
        getProject: state => state.project,
      },
    },
    checkboxes: {
      namespaced: true,
      state: {
        selected: 'kitchen',
      },
      getters: {
        getSelectedCheckbox: state => state.selected,
      },
      mutations: {
        setSelectedCheckbox(state, option) {
          state.selected = state.selected === option ? null : option;
        },
      },
      actions: {
        selectCheckbox({ commit }, option) {
          commit('setSelectedCheckbox', option);
        },
      },
    },
    paginationNews: {
      namespaced: true,
      state: {
        activePage: 1,
      },
      mutations: {
        setActivePage(state, pageNumber) {
          state.activePage = pageNumber;
        },
      },
      getters: {
        getActivePage: state => state.activePage,
      },
    },
  },
});