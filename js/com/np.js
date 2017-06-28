// newspage
Vue.component("component-newspage",{
	template:'<div class="page">\
				<header><a @click="router.go(-1)">返回</a></header>\
				<article class="weui-article">\
                    <h1>{{title}}</h1>\
                    <section>\
                        <p>\
                            <video :src="url" controls="controls"><video>\
                        </p>\
                    </section>\
                </article></div>',
    data:function(){
    	var t=this.$route.query.title,u=this.$route.query.url;
    	console.log(t)
    	console.log(u)
    	return {
    		title:t,
    		url:u
    	}
    },
    mounted:function(){
    },
    destroyed:function(){
    },
})