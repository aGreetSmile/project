$(function(){
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


    // 修改购买手机的数量
    var num = 0;
    $(".reduce").click(function () {
        num--;
        if (num < 1) {
            alert("数量不能为0!")
            return;
        }
        $(".textnum").val(num)
    })
    $(".plus").click(function () {
        num++;
        $(".textnum").val(num)
    })

})