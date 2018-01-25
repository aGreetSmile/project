$(function () {
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

    // $(".details3 li").on("mouseover",function(){
    //     var index = $(this).index();
    //     $(this).css("background","#2eabe5")
    //     $(".detailsLeft").eq(index).css("display","block")
    // })

    // $(".details3 li").on("mouseout", function () {
    //     var index = $(this).index();
    //     $(this).css("background","")
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
    $(".AllGoods").mouseover(function () {
        $(".details1").css("display", "block")
    })
    $(".AllGoods").mouseout(function () {
        $(".details1").css("display", "none")
    })

    // 关闭左边画出效果的详情页
    $(".remove").click(function () {
        $(".detailsLeft").css("display", "none")
    })



        var oBox = document.getElementById('box');
        var oSmallBox = document.getElementById('smallBox');
        var aSmallImg = Array.from(oSmallBox.children);
        var oMiddleImg = document.getElementById('middleImg');
        var oMiddleBox = document.getElementById('middleBox');
        var oLagerImg = document.getElementById('lagerImg');
        var oLagerBox = document.getElementById('lagerBox');
        var oShadow = document.getElementById('shadow');
        //选项卡效果
        aSmallImg.forEach((v) => {
            v.addEventListener('mouseenter', (() => {
                aSmallImg.forEach((m) => {
                    m.className = '';
                })
                v.className = 'active';
                oMiddleImg.src = v.src;
                oLagerImg.src = v.src;
            }).bind(v))
        })

        //放大镜效果

        var
            iMaxL = oMiddleBox.offsetWidth - oShadow.offsetWidth,
            iMaxT = oMiddleBox.offsetHeight - oShadow.offsetHeight;

        oMiddleBox.addEventListener('mousemove', (ev) => {
            var e = ev || window.event;
            var
                iL = e.pageX - oBox.offsetLeft - oShadow.offsetWidth / 2,
                iT = e.pageY - oBox.offsetTop - oShadow.offsetHeight / 2;
            //oShadow 的移动范围； 
            iL = Math.max(iL, 0)
            iT = Math.max(iT, 0)
            iL = Math.min(iL, iMaxL)
            iT = Math.min(iT, iMaxT)
            //大图移动的距离
            var
                oLagerImgL = iL * (oLagerImg.offsetWidth - oLagerBox.offsetWidth) / iMaxL,
                oLagerImgT = iT * (oLagerImg.offsetHeight - oLagerBox.offsetHeight) / iMaxT;

            oShadow.style.left = iL + 'px';
            oShadow.style.top = iT + "px";

            oLagerImg.style.left = -oLagerImgL + 'px';
            oLagerImg.style.top = -oLagerImgT + 'px';

        })
        oMiddleBox.addEventListener('mouseenter', () => {

            oLagerBox.style.display = 'block';
        })
        oMiddleBox.addEventListener('mouseleave', () => {
            oShadow.style.left = '-1000px';
            oLagerBox.style.display = 'none';
        })


    // 修改购买手机的数量
    var num = 0;
    $(".reduce").click(function(){
        num --;
        if(num < 1){
            alert("数量不能为0!")
            return;
        }
        $(".textnum").val(num)
    })
    $(".plus").click(function () {
        num++;
        $(".textnum").val(num)
    })

    //修改选择手机的颜色
    $(".phonmeColor span").each(function(v,k){
        k.addEventListener("click",function(){
            $(".phonmeColor span").removeClass("Choice").addClass("Choice1");
            $(this).removeClass("Choice1").addClass("Choice");
        })
    })

    // 添加商品到购物车
    $(".shopps2").click(function(){
        $(".po_main").css("display","block")
    })
    $(".button_3").click(function () {
        $(".po_main").css("display", "none")
    })
    // 滑过出现购物车详情
    $(".shoping").mouseover(function(){
        $(".hgxsgwc").css("display","block")
    })
    $(".shoping").mouseout(function () {
        $(".hgxsgwc").css("display", "none")
    })
    
})
