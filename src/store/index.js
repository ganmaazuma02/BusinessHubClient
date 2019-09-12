import Vuex from 'vuex';
import Vue from 'vue';
import businesses from './modules/businesses.js'

// Load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    modules: {
        businesses
    }
});