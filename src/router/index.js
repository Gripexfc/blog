
import Login from '../pages/login/index'
import Home from '../pages/home/index'
import PostEditor from '../pages/PostEditor/index'
import IndividualCenter from '../pages/views/individualCenter/individualCenter'

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
        path: '/individualCenter',
        component: IndividualCenter,
    }
];


