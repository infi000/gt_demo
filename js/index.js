'use strict';
Vue.component("component-main", {
    template: '<div>\
    				<header>铁路新闻</header>\
        			<component-navbar></component-navbar>\
        			<div class="content">\
        			    <template>\
        			        <component-newslist v-for="item in newsList" :news="item"></component-new>\
        			    </template>\
        			</div>\
        		</div>',
    data: function() {
        var data = news.feed.entry,
            arr = [],
            page = 1,
            PWT = localStorage.getItem("lastTIME") || "",
            nowT = +new Date(),
            tlimite = 60 * 60 * 1000 * 4; //4小时
        if (PWT) {
            var t = nowT - parseInt(PWT);
                if (t > tlimite) {
                    page = Math.ceil(t / tlimite);
                    if (page > 5) {
                        page = 1;
                        localStorage.setItem("lastTIME", +new Date());
                    }
                }
        } else {
            //不存在设置缓存 上次访问时间
            localStorage.setItem("lastTIME", +new Date());
        }
        for (var key in data) {
            if ((page - 1) * 10 < key && key < (page * 10 - 1))
                arr.push(data[key])
        };
        return { newsList: arr }
    }
})
var app = new Vue({
    el: "#app",
    data: {},
    router,
})
