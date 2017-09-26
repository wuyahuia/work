;(function($){
    var h = $(".pullDown").height();
    var pullup=document.querySelector(".pullUp")
    var scroller = new iScroll("main",{
        topOffset:h,
        onScrollMove:function(){
            if(this.y>10 && !$(".pullDownIcon").is(".flip")){
                $(".pullDownIcon").addClass('flip');
                $(".pullDownLabel").text("释放更新...")
                this.minScrollY=0;
            }else if(this.y<10 && $(".pullDownIcon").is(".flip")){
                $(".pullDownIcon").removeClass('flip');
                $(".pullDownLabel").text("下拉刷新...");
                this.minScrollY=-h;
            }else if(this.y<this.scrollY-10 && !pullup.className.match("flip")){

            }
        }
    })
})(Zepto)