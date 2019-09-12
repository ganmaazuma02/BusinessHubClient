import axios from 'axios';

const state = {
    businesses: []
};

const getters = {
    allBusinesses: (state) => state.businesses
};

const actions = {
    async fetchBusinesses({ commit }) {
        //const response = await axios.get('business-api-link');
        var businesses = [
            {
                name: "Nasi Lemak",
                summary: "nasi lemak power",
                guid: "1234-4242"
            },
            {
                name: "Nasi Ayam",
                summary: "nasi ayam power",
                guid: "535-4242"
            },
            {
                name: "Nasi Daging",
                summary: "nasi daging power",
                guid: "766345-4242"
            },
            {
                name: "Mee Kuah",
                summary: "mee kuah power",
                guid: "3434-4242"
            },
            {
                name: "Mee Kari",
                summary: "mee kari power",
                guid: "1234-078976"
            },
            {
                name: "Chicken Chop",
                summary: "chicken chop power",
                guid: "5326-4242"
            },
            {
                name: "Lamb Chop",
                summary: "lamb chop power",
                guid: "1263434-343"
            }
        ]
        // response.data
        commit('setBusinesses', businesses);
    }
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