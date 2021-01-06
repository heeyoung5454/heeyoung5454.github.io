import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Portfolio from "./views/Portfolio";


import Board from "./views/board/Board";
import ContentDetail from "./views/board/ContentDetail";
import Write from "./views/board/Write";
import FAQ from "./views/board/Faq";

import Test from "./views/Test";


/*
import Read from "@/components/boardbackup/Read";
import Create from "@/components/boardbackup/Create";
import Detail from "@/components/boardbackup/Detail";
*/


Vue.use(VueRouter);

const router= new VueRouter ({
    mode : "history",
    routes : [{ 
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
        },

        {
             path:"/board/free", 
             component: Board
        },
        {
            path:"/board/free/detail/:contentId", 
            name:"ContentDetail",
            component: ContentDetail
         },
         {
            path:"/board/free/write/:contentId?", 
            name:"Write",
            component: Write
         },
         

        {
            path:"/faq", 
            component: FAQ
        },

         /*
        {
            path:"/read",
            name:"Read", 
            component: Read
       },
       {
            path:"/create/:contentId?",
            name:"Create", 
            component: Create
        },
        {
            path:"/detail/:contentId",
            name:"Detail", 
            component: Detail
        },
*/
        { 
            path:"/test", 
            component: Test
        },  
    ]
});

export default router;