var newspage={template:"<component-newspage></component-newspage"};
var main={template:"<component-main></component-main"};
var routes=[{path:"/news",component:newspage},{path:"/",component:main}];
var router=new VueRouter({
	routes,
})