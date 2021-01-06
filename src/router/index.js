import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../views/Home'
import About from "../views/About"
import Contact from "../views/Contact"
import Portfolio from "../views/Portfolio"
Vue.use(Router)

 // eslint-disable-next-line
 /* eslint-disable */ 
export default new Router({  
  routes: [
    {
      path:"/", 
      component: Home
    },

    {
      path:"/about", 
      component: About
  },
  
  {
      path:"/portfolio", 
      component: Portfolio
  },
  {
      path:"/contact", 
      component: Contact
  }    
  ]
});
