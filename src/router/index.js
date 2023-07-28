
import Login from '../pages/login/index'
import Home from '../pages/home/index'
import PostEditor from '../pages/PostEditor/index'
import IndividualCenter from '../pages/views/individualCenter/individualCenter'
import PersonalCenter from '../pages/PersonalCenter/index'

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
    },
    {
        path: '/personalCenter',
        component: PersonalCenter,
    }
];


