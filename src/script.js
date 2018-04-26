import _ from "lodash";
import * as moment from "moment";
//Vue js
import Vue from "vue";
import VueResource from "vue-resource";

import { component as userComponent } from "./userComponentVariation";

Vue.component("user-component", userComponent);

//Add vue ressource to vue js (for having http support)
Vue.use(VueResource);

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Trapil!',
        user: {
            firstname: "jerome",
            name: "chaaban",
            age: 18
        }
    },
    methods: {
        reversedMessageMethod: function (message) {
            return this.message.split('').reverse().join('')
        }
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    },
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
}, 2000);

(async () => {
    await new Promise((resolve, reject) => resolve(112));
})();


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Page loaded on ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Vue avec npm' },
            { text: 'Vue avec webpack' },
            { text: 'Vue sans file://' }
        ]
    }
});