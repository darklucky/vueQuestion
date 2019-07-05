import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/StartPage'
import QuestionPage from '@/components/QuestionPage'
import ScorePage from '@/components/ScorePage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'StartPage',
            component: HelloWorld
        }, {
            path: '/item',
            name: 'QuestionPage',
            component: QuestionPage
        },{
            path: '/score',
            name: 'ScorePage',
            component: ScorePage
        }
    ]
})
