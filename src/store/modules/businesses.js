import axios from 'axios';

const state = {
    businesses: []
};

const getters = {
    allBusinesses: (state) => state.businesses
};

const actions = {
    async fetchBusinesses({ commit }) {
        var response = await axios.get('https://localhost:44323/businesses');
        commit('setBusinesses', response.data.value);
    },
    async searchBusinesses({ commit }, search) {
        var response;
        if (search) {
            response = await axios.get(`https://localhost:44323/businesses?search=name co ${search}`);
        } else {
            response = await axios.get(`https://localhost:44323/businesses`);
        }
        commit('setBusinesses', response.data.value);

    },
};

const mutations = {
    setBusinesses: (state, businesses) => (state.businesses = businesses),
};

export default {
    state,
    getters,
    actions,
    mutations
}