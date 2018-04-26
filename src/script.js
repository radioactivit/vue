import Vue from "vue";
import Vuex from 'vuex'
import { mapState } from 'vuex'
import Vuetify from 'vuetify'

Vue.use(Vuex);
Vue.use(Vuetify);

const store = new Vuex.Store({
    state: {
        count: 0,
        firstname: "luc"
    },
    mutations: {
        increment(state) {
            state.count++
        },
        incrementBy(state, payload) {
            state.count += payload.number;
        }
    },
    actions: {
        incrementAction(context) {
            setTimeout(() => {
                context.commit('increment')
            }, 2000);
        }
    }
});
store.subscribe((mutation, state) => {
    console.log(mutation.type)
    console.log(mutation.payload)
});
var mapStateCount = mapState(["count"]);

var app = new Vue({
    el: '#app',
    store,
    data: {
        dialog: false,
        drawer: null,
        items: [
            { icon: 'contacts', text: 'Contacts' },
            { icon: 'history', text: 'Frequently contacted' },
            { icon: 'content_copy', text: 'Duplicates' },
            {
                icon: 'keyboard_arrow_up',
                'icon-alt': 'keyboard_arrow_down',
                text: 'Labels',
                model: true,
                children: [
                    { icon: 'add', text: 'Create label' }
                ]
            },
            {
                icon: 'keyboard_arrow_up',
                'icon-alt': 'keyboard_arrow_down',
                text: 'More',
                model: false,
                children: [
                    { text: 'Import' },
                    { text: 'Export' },
                    { text: 'Print' },
                    { text: 'Undo changes' },
                    { text: 'Other contacts' }
                ]
            },
            { icon: 'settings', text: 'Settings' },
            { icon: 'chat_bubble', text: 'Send feedback' },
            { icon: 'help', text: 'Help' },
            { icon: 'phonelink', text: 'App downloads' },
            { icon: 'keyboard', text: 'Go to the old version' }
        ]
    },
    methods: {
        increment: function () {
            this.$store.getTodoById(4455);
            this.$store.commit("incrementBy", { number: 10 });
        }
    },
    computed: {
        count: function () {
            return this.$store.state.count;
        }
    }
});