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

    // 手机短信验证消息
    $(".phoneVerification").mouseover(function(){
        $(this).css({
            "background": "#d3d3d3",
            "color":"#fff"
        })
    })
    $(".phoneVerification").mouseout(function () {
        $(this).css({
            "background": "#efefef",
            "color": "#828282"
        })
    })


//用户名是否存在
// var usernameExists = true;
//     //用户名存在性验证
//     $("#txtusername").blur(function () {
//         console.log(1)
//         $.ajax({
//             url: "php/usercheck.php",
//             type: "get",
//             data: { "username": $("#txtusername").val() },
//             success: function (data) {
//                 if (data == "0") {
//                     usernameExists = false;
//                     $("#usernameMsg").html("该用户名可用");
//                 } else {
//                     usernameExists = true;
//                     $("#usernameMsg").html("该用户名已存在");
//                 }
//             }
//         });
//     });

    var usernameExists = false;
//用户名存在性验证
$("#txtusername").blur(function () {
    $.ajax({
        url: "php/usercheck.php",
        type: "get",
        data: { "username": $("#txtusername").val() },
        success: function (data) {
            console.log(data)
            if (data == "0") {
                $(".usernameMsg1").html("该用户名已存在");
            } else {
                usernameExists = true;
                $(".usernameMsg1").html("该用户名可用");
            }
        }
    });
    // function isUser() {
    //     var reg1 = /^[a-zA-Z]\w*$/i;
    //     if ($("#txtusername").val() && !reg1.test($("#txtusername").val())) {
    //         $(".usernameMsg1").html("");
    //     } else {
    //         $(".usernameMsg1").html("该用户名格式不正确");
    //     }
    // }
    // isUser();
});




    $("#txtusername").blur(function () {
        $.ajax({
            url: "php/usercheck.php",
            type: "get",
            data: { "username": $("#txtusername").val() },
            success: function (data) {
                if (data == "0") {
                    usernameExists = false;
                    // $(".usernameMsg1").html("该用户名可用");
                } else {
                    usernameExists = true;
                    // $(".usernameMsg1").html("该用户名已存在");
                }
            }
        });
        function isUser() {
            var reg1 = /^[a-zA-Z]\w*$/i;
            if (usernameExists && $("#txtusername").val() && !reg1.test($("#txtusername").val())) {
                // oSpan1.style.display = "inline-block";
                $(".usernameMsg1").css("display", "inline-block")
                // $(".usernameMsg1").html("")
            } else {
                // $(".usernameMsg1").html("用户名格式不正确！")
                $(".usernameMsg1").css("display", "none")
                // oSpan1.style.display = "none";
            }
        }
        isUser();
    });

// 验证第一次密码
    var pass1 = false;

    function isPassword() {
        var reg2 = /^([a-zA-z]+[0-9]+)|([0-9]+[a-zA-Z]+)$/i;

        if ($("#password1").val().length >= 8 && reg2.test($("#password1").val())) {
            pass1 = true;
            $(".usernameMsg2").html("")
        } else {
            $(".usernameMsg2").html("密码格式不正确")
        }
    }
    $("#password1").blur(function(){
        isPassword();
    })


// 验证第二次密码
    var pass2 = false;
    $("#password2").blur(function () {
        if ($("#password1").val() !== $("#password2").val()){
            $(".usernameMsg3").html("两次密码不一致！")
        }else{
            pass = true;
            $(".usernameMsg3").html("")
        }
    })


// 验证邮箱
    var emailck = false;
    $("#emails").blur(function(){
        isMail();
    })
    function isMail() {
        var reg3 = /^([a-zA-Z0-9_-])+\@([a-zA-Z0-9_-])+.([a-zA-Z])+$/;
        if ($("#emails").val() && reg3.test($("#emails").val())) {
            $(".usernameMsg4").html("")
            emailck = true;
        } else {
            $(".usernameMsg4").html("邮箱格式不正确")
        }
    }

    // 验证手机号
    var phoneck = false;
    $("#phoneNum").blur(function(){
        phone();
    })
    function phone(){
        var regPhone = /^1(3|4|5|7|8|9)\d{9}$/;  //一共十一位数，1开头，后面是十位数字
        if (!regPhone.test($("#phoneNum").val())) {
            $(".usernameMsg5").html("手机格式不正确")
        }else{
            phoneck = true;
            $(".usernameMsg5").html("")
        }
    }
    // 验证验证码
    var yzmck = false;
    $("#phoneyz").blur(function () {
        yzmyza();
    })
    function yzmyza() {
        if ($("#phoneyz").val() == "") {
            $(".usernameMsg6").html("请输入验证码")
        } else {
            yzmck = true;
            $(".usernameMsg6").html("")
        }
    }
    
    // 发送服务器
    $("#f").submit(function () {
        if (!usernameExists && !pass1 && !pass2 && !emailck && !phoneck && !yzmck) {
            alert("亲,注册输入格式不正确！");
            return false;//阻止浏览器的默认行为。
        }
        $.ajax({
            url: "php/regsave.php",
            type: "post",
            data: { "username": $("#txtusername").val(), "userpass": $("#password1").val() },
            // success: function (data) {
            //     if (data == "0") {
            //         usernameExists = false;
            //         // $(".usernameMsg1").html("该用户名可用");
            //     } else {
            //         usernameExists = true;
            //         // $(".usernameMsg1").html("该用户名已存在");
            //     }
            // }
        });
        alert(data);
    });
})
