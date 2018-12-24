import Vue from 'vue';
import Vuex from 'vuex';

import AdminStore from './modules/admin.store.js'
import TagsStore from './modules/tags.store.js'
import FilterStore from './modules/filter.store.js'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    namespaced: false,
    state: {
        baseUrl: '/api/v1',
    },
    modules: {
        AdminStore,
        TagsStore,
        FilterStore
    },
    plugins: [
        // createPersistedState(),
    ],
})