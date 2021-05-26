import type {RouteRecordRaw} from 'vue-router';
import type {App} from 'vue';

import {createRouter,createWebHistory} from 'vue-router';

const router = createRouter({
    history:createWebHistory(import.meta),
    routes:[],
    strict: true, //大小写是否敏感
    scrollBehavior: () => ({ left: 0, top: 0 }),
    //路由切换时，滚动的位置
})