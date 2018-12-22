var app = new Vue({
    el:"#app",
    
    data:{
        date: new Date(),
        msg: "Hello Vue",
        html: "<h2> Hello vue</h2>",
        s:'active',
        blue:'blue',
        countnum:0,
    },
    filters:{
        formatDate: function(value){
            var date = new Date(value);

            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day =  plusDate(date.getDate());
            var hour =  plusDate(date.getHours());
            var minutes = plusDate(date.getMinutes());
            var second = plusDate(date.getSeconds());

            return year + "-" + month + "-" + day +"-" + hour +"-" +minutes +"-" + second;
          
        },
    },
    methods:{
        count:function(){
          this.countnum++;
        }
    },

    mounted:function(){           // 实时更新  在挂载到DOM后 更新date
        // var _this = this;
        setInterval(() => {
            this.date= new Date();
        }, 1000);
    }
})




var plusDate = function(value){
    return value < 10 ? '0'+ value : value;
}