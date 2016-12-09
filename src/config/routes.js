import Index from '../views/index/Index.vue'
import signIn from '../views/index/signIn.vue'
import indexPage from '../views/right/indexPage.vue'
import userList from '../views/right/userList.vue'
import Hello from "../components/Hello.vue"
export const routes=[
	{
		path:'/index',
		component:Index,
    children:[
      {
        path:'profile',
        name:'profile',
        component:indexPage
      },
      {
        path:'userlist',
        name:'userlist',
        component:userList
      }
    ]
	},
	{
		path:'/',
		component:Hello
	}
]
