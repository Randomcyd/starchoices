import Vue from 'vue'
import Router from 'vue-router';
import Test from '../components/Test.vue'
import Test1 from '../components/test1.vue'
import Test2 from '../components/test2.vue'
import ProInfo from '../components/new/proInfo.vue';
import Updata from '../components/new/updata.vue';
import Finish from '../components/new/finish.vue'

Vue.use(Router);


const routes = [
    {
        name:'test',
        path:'/test',
        alias:'/',
        component:Test
    },
    {
        name:'test1',
        path:'/test1',
        component:Test1
    },
    {
        name:'test2',
        path:'/test2',
        component:Test2
    },
    {
        name:'proinfo',
        path:'/proinfo',
        component:ProInfo
    },
    {
        name:'updata',
        path:'/updata',
        component:Updata
    },
    {
        name:'finish',
        path:'/finish',
        component:Finish
    }
];

export default new Router({
    routes
})