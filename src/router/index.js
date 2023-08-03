
import Login from '../pages/login/index'
import Home from '../pages/home/index'
import PostEditor from '../pages/PostEditor/index'
import PersonalCenter from '../pages/PersonalCenter/index'
import Article from '../pages/views/article/index'

export default [
    {
        path: '/',
        component: Home,
        // exact: true,
        // routes: [
        //   {
        //     path: '/Login',
        //     component: Login,
        //     routes: []
        //   }
        // ]
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/postEditor',
        component: PostEditor,
    },
    {
        path: '/article/:id',
        component: Article,
    },
    {
        path: '/personalCenter',
        component: PersonalCenter,
    }
];


