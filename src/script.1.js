import _ from "lodash";
import * as moment from "moment";
//Vue js
import Vue from "vue";
import VueResource from "vue-resource";
import Vuex from 'vuex'
import { mapState } from 'vuex'
import VueRouter from 'vue-router'

import { component as userComponent } from "./userComponent";
import { component as userComponentVariation } from "./userComponentVariation";

//Add Vuex and VueResource
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/old', component: userComponent },
        { path: '/new', component: userComponentVariation },
        {
            path: '/user/:id', name: "user", component: {
                template: '<div>User id = {{ $route.params.id }}</div>'
            }
        }
    ]
});

//Define components
Vue.component("user-component", userComponent);
Vue.component("test-component-in-component", {
    template: "<div>Subsubsub-component</div>"
});

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
});

//array and object destructuring
let [a, b] = [5, 2];
let { c, d } = { c: 43, d: 67 };

let myFunction = ({ firstname, name }) => {
    console.log(firstname, name);
};

myFunction({ firstname: "luc", name: "loyant", age: 43, sex: "h" });

var app = new Vue({
    el: '#app',
    router,
    store,
    data: {
        message: 'Hello Trapil!',
        user: {
            id: 124,
            firstname: "jerome",
            name: "chaaban",
            age: 18
        },
        classes: ['alert']
    },
    methods: {
        reversedMessageMethod: function (message) {
            return this.message.split('').reverse().join('')
        },
        goBack: function () {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
        },
        increment: function () {
            debugger;
            this.$store.commit("increment");
        }
    },
    computed: Object.assign({}, mapState(["count"]), {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    }),
    watch: {
        // whenever question changes, this function will run
        message: function (newMessage, oldMessage) {
            /*this.answer = 'Waiting for you to stop typing...'
            this.getAnswer()*/
        }
    }
});

setTimeout(() => {
    app.message = "Thanks Trapil";
    app.classes.push('alert-primary');
}, 2000);

/*(async () => {
    await new Promise((resolve, reject) => resolve(112));
})();*/

const users = [
    { firstname: "luc", name: "loyant", "age": 50, "since": 2002 },
    { firstname: "aime", name: "broohm", "age": 47, "since": 2005 },
    { firstname: "david", name: "dellier", "age": 42, "since": 2004 },
    { firstname: "jerome", name: "chaaban", "age": 26, "since": 2018 }
];

users.map(aUser => aUser.id = aUser.firstname + aUser.name);

const userRouter = new VueRouter({
    routes: [
        {
            path: "/users/:id",
            name: "userDetail",
            component: {
                template: `<div>Hello {{user.id}}
                <p v-for='prop in user'>{{prop}}</p>
                <test-component-in-component></test-component-in-component>
                </div>`,
                data: function () {
                    return {
                        user: null
                    }
                },
                created: function () {
                    console.log("CREATED");
                    setTimeout(() => {
                        this.user = users.find(user => user.id === this.$route.params.id);
                    }, 3000);
                }
            }
        }
    ]
});

var myAppUsersThatCanBeNamedWhatever = new Vue({
    el: '#appUsers',
    router: userRouter,
    data: {
        users
    }
});