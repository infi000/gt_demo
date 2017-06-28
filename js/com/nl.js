Vue.component("component-newslist",{
	props:["news"],
	template:'<a  class="weui-media-box weui-media-box_appmsg newsList" @click="read">\
                            <div class="weui-media-box__hd">\
                                <img class="weui-media-box__thumb" :src="news.media$group.media$thumbnail.url" alt="">\
                            </div>\
                            <div class="weui-media-box__bd">\
                                <h4 class="weui-media-box__title">{{news.title.$t}}</h4>\
                                <p class="weui-media-box__desc">{{news.content.$t}}</p>\
                            </div>\
                        </a>',
    mounted:function(){
    },
    methods:{
    	read:function(){
    		router.push({path:"news",query:{title:this.news.title.$t,url:this.news.media$group.media$content[0].url}})
    	}
    }
})