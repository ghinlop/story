
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

// const files = require.context('./', true, /\.vue$/i)

// files.keys().map(key => {
//     return Vue.component(_.last(key.split('/')).split('.')[0], files(key))
// })

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// --> Require Components
import listCategory from './components/admin/category';
import formCategory from './components/admin/add_cate';
import postList from './components/admin/posts';
import newPost from './components/admin/new_post';
import vTags from './components/admin/tags';

import store from './stores/store';

import { mapState, mapMutations } from 'vuex';


const app = new Vue({
    store,
    components:{
        listCategory,
        formCategory,
        postList,
        vTags,
        newPost
    },
    data: {
        header_dropdown: false
    },
    created() {

    },
    computed: {
    },
    methods: {
        async NavLinkActive(urlMatch) {
            const isCheck = new RegExp(`${urlMatch}[^\w+]`)
            let result = await isCheck.exec(window.location.pathname)
            console.log('urlMatch: '+urlMatch)
            console.log('result: '+result)
            console.log('widown: '+window.location.pathname)
            return result;
        },
        submenu(event){
            for(let i of event.path){
                let isClass = /(admin-dropdown)/
                if (isClass.test(i.className)){
                    i.classList.toggle('active')
                    return;
                }
            }
        },
        removesubmenu(event){
            for (let i of event.path) {
                let isClass = /(admin-dropdown active)/
                if (isClass.test(i.className)) {
                    i.classList.remove('active')
                        return;
                }
            }
        }
    }
}).$mount('#app');

