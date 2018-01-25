$(function(){
    // 商品详情
    var ass = document.getElementsByClassName("details3")[0].children;
    var oDetailsLeft = document.getElementsByClassName("detailsLeft");
    // oDetailsLeft = Array.from(oDetailsLeft);
    ass = Array.from(ass);
    ass.forEach(function (v, k) {
        v.addEventListener('mouseover', function () {
            this.style.background = '#2eabe5';
            oDetailsLeft[k].style.display = "block";
        })
        setTimeout(function () {
            oDetailsLeft[k].addEventListener('mouseover', function () {
                oDetailsLeft[k].style.display = "block";
            })
            v.addEventListener('mouseout', function () {
                this.style.background = '';
                oDetailsLeft[k].style.display = "none";
            })
            oDetailsLeft[k].addEventListener('mouseout', function () {
                oDetailsLeft[k].style.display = "none";
            })
        }, 200)
    })


    // $(".details3 li").on("mouseover", function () {
    //     var index = $(this).index();
    //     $(this).css("background", "#2eabe5")
    //     $(".detailsLeft").eq(index).css("display", "block")
    // })

    // $(".details3 li").on("mouseout", function () {
    //     var index = $(this).index();
    //     $(this).css("background", "")
    //     $(".detailsLeft").eq(index).css("display", "none")
    // })




    // 输入框左边商品效果
    $(".list").mouseenter(function () {
        $(".textLeftp").css("display", "block")
    })
    $(".list").mouseleave(function () {
        $(".textLeftp").css("display", "none")
    })
    // 我的收藏滑过效果
    $(".navmy").mouseenter(function () {
        $(".navmyCollection").css("display", "block")
    })
    $(".navmy").mouseleave(function () {
        $(".navmyCollection").css("display", "none")
    })
    // 客服中心
    $(".Customer").mouseenter(function () {
        $(".Cust").css("display", "block")
    })
    $(".Customer").mouseleave(function () {
        $(".Cust").css("display", "none")
    })

    // 给左边详情页引导添加显示，消失效果
    $(".AllGoods").mouseover(function(){
        $(".details1").css("display","block")
    })
    $(".AllGoods").mouseout(function () {
        $(".details1").css("display", "none")
    })

    // 关闭左边画出效果的详情页
    $(".remove").click(function () {
        $(".detailsLeft").css("display", "none")
    })


    console.log($(".showTop").parent().next())

    // 点击显示、隐藏左边详情
    // 点击显示
    $(".showTop").each(function(v,k){
        k.addEventListener("click", function (){
            $(this).css("display", "none")
            $(this).next().css("display", "inline")
            $(this).parent().parent().next().css({
                "display": "none"
            })
        })
    })
    // 点击隐藏
    $(".hideBottom").each(function (v, k) {
        k.addEventListener("click", function () {
            $(this).css("display", "none")
            $(this).prev().css("display","inline")
            $(this).parent().parent().next().css({
                "display": "inline"
            })
        })
    })
})