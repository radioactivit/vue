
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Trapil!'
    }
});

setTimeout(() => {
    app.message = "Thanks Trapil";
}, 2000);

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