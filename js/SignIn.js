
var tes1 = false;
var tes2 = false;

var regPhone = /^1(3|4|5|7|8|9)\d{9}$/;  //一共十一位数，1开头，后面是十位数字
// 验证账号
function username() {
    var xphoneId = $(".phoneId").val();
    if (xphoneId == "") {
        $(".prompt1").html("请输入账号！")
        return;
    } else {
        $(".prompt1").html("")
    }
    if (!regPhone.test(xphoneId)) {
        $(".prompt1").html("手机号不合法！")
        return;
    } else {
        tes1 = true;
        $(".prompt1").html("")
    }
}

// 验证密码
function userpass() {
    var xpassword = $(".password").val();
    if (xpassword == "") {
        $(".prompt2").html("请输入密码！")
        return;
    } else {
        tes2 = true;
        $(".prompt2").html("")
    }
}




$(function(){
    $(".phoneId").blur(function(){
        username();
    })
    $(".password").blur(function () {
        userpass();
    })
    $(".clicksin").click(function(){
        username();
        userpass();
        if(tes1 && tes2){
            location.href = "index.html"
        }
    })
})();

