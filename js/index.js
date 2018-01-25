function $id(id){
    return document.getElementById(id);
}
(function(){
    var oBox = $id('box');
    var oImgList = $id('img-list');
    var aImgList = Array.from(oImgList.children);
    var oFlashBtn = $id('flash-btn'),
        aFlashBtn = Array.from(oFlashBtn.children);

    // 复制第一个LI，添加到UL的后面
    oImgList.innerHTML += oImgList.firstElementChild.outerHTML;

    var iLen = oImgList.children.length;
    // 计算UL的宽度
    const PER_WIDTH = 1280;
    oImgList.style.width = iLen * PER_WIDTH + 'px';

    // 默认显示第0张
    var iIndex = 0;
    var iTimer = null;

    oBox.addEventListener('mouseenter', function () {
        clearInterval(iTimer);
        // oDirectionBtn.style.display = 'block';
    });

    oBox.addEventListener('mouseleave', function () {
        // oDirectionBtn.style.display = 'none';
        autoMove();
    });

    // oLeftBtn.addEventListener('click', function () {
    //     iIndex--;
    //     if (iIndex < 0) {
    //         oImgList.style.left = - (iLen - 1) * PER_WIDTH + 'px';
    //         iIndex = iLen - 2;
    //     }

    //     bufferMove(oImgList, { left: -iIndex * 1280 });
    // });

    // oRightBtn.addEventListener('click', function () {
    //     rightMove();
    // });

    // 自动运行
    autoMove();
    function autoMove() {
        iTimer = setInterval(function () {
            rightMove();
        }, 3000);
    }
    // 往右运动
    function rightMove() {
        iIndex++;
        if (iIndex >= iLen) {
            oImgList.style.left = 0;
            iIndex = 1;
        }
        bufferMove(oImgList, { left: -iIndex * PER_WIDTH });
    }
    aFlashBtn.forEach(function (v, k) {
        v.addEventListener('mouseenter', function () {
            iIndex = (k - 1);
            rightMove();
            if (iIndex >= iLen) {
                oImgList.style.left = 0;
                iIndex = 1;
            }
            // 按钮的处理
            aFlashBtn.forEach(function (x, y) {

                x.className = '';
            });
            this.className = 'active';
        });
    });
    // 商品详情
    var ass = document.getElementsByClassName("details3")[0].children; 
    var oDetailsLeft = document.getElementsByClassName("detailsLeft");
    // oDetailsLeft = Array.from(oDetailsLeft);
    ass = Array.from(ass);
    ass.forEach(function (v, k) {
        v.addEventListener('mouseover',function () {
            this.style.background = '#2eabe5';
            oDetailsLeft[k].style.display = "block";
        })
        setTimeout(function(){
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
        },200)
    })

// jQuery效果
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
    $(".list").mouseenter(function(){
        $(".textLeftp").css("display", "block")
    })
    $(".list").mouseleave(function(){
        $(".textLeftp").css("display", "none")
    })
    // 我的收藏滑过效果
    $(".navmy").mouseenter(function(){
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
    // 关闭左边画出效果的详情页
    $(".remove").click(function(){
        $(".detailsLeft").css("display","none")
    })
    // 侧边楼层滑过效果
    // $("#leftBar").mouseenter(function () {
    //     $(this).css("display", "block")
    // })
    // $(".navmy").mouseleave(function () {
    //     $(".navmyCollection").css("display", "none")
    // })
    $(".border-5").each(function(v,k){
        k.addEventListener("mouseover",function(){
            
            // $(".floor_s")[v].style.display = "none";
            $(this).children().first().css("display", "none")
            $(this).children().last().css("display","block")
            
            // $(".floor_h")[v].style.display = "block";
        })
        k.addEventListener("mouseout", function () {
            windowScroll();
            if (v != a){
                $(this).children().first().css("display", "block")
                $(this).children().last().css("display", "none")
            }
            // $(".floor_s")[v].style.display = "block";
            // $(".floor_h")[v].style.display = "none";
        })

        // 楼层点击跳转
    $(window).scroll(function (ev) {
        var that = $(this);
        k.addEventListener("click", function () {
                if (v == 0) {
                    that.scrollTop(1000);
                }
                if (v == 1) {
                    that.scrollTop(1550);
                }
                if (v == 2) {
                    that.scrollTop(2100);
                }
                if (v == 3) {
                    that.scrollTop(2650);
                }
                if (v == 4) {
                    that.scrollTop(3200);
                }
                if (v == 5) {
                    that.scrollTop(3750);
                }
                if (v == 6) {
                    that.scrollTop(4300);
                }
                if (v == 7) {
                    that.scrollTop(4850);
                }
            })
            // $(".floor_s")[v].style.display = "block";
            // $(".floor_h")[v].style.display = "none";
        })

        // 楼层自动跳转效果
        var a = 0;
        windowScroll();
        function windowScroll(){
        $(window).scroll(function (ev) {
            var e = ev || window.event;
            console.log($(this).scrollTop())
            if ($(this).scrollTop() < 1000){
                $("#leftBar").css("display", "none")
            }
            if ($(this).scrollTop() >= 1000 && $(this).scrollTop() < 1550){
                $("#leftBar").css("display", "block")
                $(".floor_s:eq(0)").css("display", "none")
                $(".floor_s:eq(0)").next().css("display", "block")
                a = 0;
            }else{
                $(".floor_s:eq(0)").css("display", "block")
                $(".floor_s:eq(0)").next().css("display", "none")
            }
            if ($(this).scrollTop() >= 1550 && $(this).scrollTop() < 2100) {
                $("#leftBar").css("display", "block")
                $(".floor_s:eq(1)").css("display", "none")
                $(".floor_s:eq(1)").next().css("display", "block")
                a = 1;
            } else {
                $(".floor_s:eq(1)").css("display", "block")
                $(".floor_s:eq(1)").next().css("display", "none")
            }
            if ($(this).scrollTop() >= 2100 && $(this).scrollTop() < 2650) {
                $("#leftBar").css("display", "block")
                $(".floor_s:eq(2)").css("display", "none")
                $(".floor_s:eq(2)").next().css("display", "block")
                a = 2;
            } else {
                $(".floor_s:eq(2)").css("display", "block")
                $(".floor_s:eq(2)").next().css("display", "none")
            }
            if ($(this).scrollTop() >= 2650 && $(this).scrollTop() < 3200) {
                $("#leftBar").css("display", "block")
                $(".floor_s:eq(3)").css("display", "none")
                $(".floor_s:eq(3)").next().css("display", "block")
                a = 3;
            } else {
                $(".floor_s:eq(3)").css("display", "block")
                $(".floor_s:eq(3)").next().css("display", "none")
            }
            if ($(this).scrollTop() >= 3200 && $(this).scrollTop() < 3750) {
                $("#leftBar").css("display", "block")
                $(".floor_s:eq(4)").css("display", "none")
                $(".floor_s:eq(4)").next().css("display", "block")
                a = 4;
            } else {
                $(".floor_s:eq(4)").css("display", "block")
                $(".floor_s:eq(4)").next().css("display", "none")
            }
            if ($(this).scrollTop() >= 3750 && $(this).scrollTop() < 4300) {
                $("#leftBar").css("display", "block")
                $(".floor_s:eq(5)").css("display", "none")
                $(".floor_s:eq(5)").next().css("display", "block")
                a = 5;
            } else {
                $(".floor_s:eq(5)").css("display", "block")
                $(".floor_s:eq(5)").next().css("display", "none")
            }
            if ($(this).scrollTop() >= 4300 && $(this).scrollTop() < 4850) {
                $("#leftBar").css("display", "block")
                $(".floor_s:eq(6)").css("display", "none")
                $(".floor_s:eq(6)").next().css("display", "block")
                a = 6;
            } else {
                $(".floor_s:eq(6)").css("display", "block")
                $(".floor_s:eq(6)").next().css("display", "none")
            }
            if ($(this).scrollTop() >= 4850) {
                $("#leftBar").css("display", "block")
                $(".floor_s:eq(7)").css("display", "none")
                $(".floor_s:eq(7)").next().css("display", "block")
                a = 7;
            } else {
                $(".floor_s:eq(7)").css("display", "block")
                $(".floor_s:eq(7)").next().css("display", "none")
            }
        });
    }
})
})();
    



