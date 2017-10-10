/**
 * Created by Administrator on 2017/9/16.
 */
$(document).ready(function (){
    var numString = "365";
    function setNum(str){
        var first = str[0];
        var second = str[1];
        var third =str[2];
        $(".header span").html(first);
        $(".header b").html(second);
        $(".header i").html(third);
    }
    setNum(numString);
    $(".msg-close").click(function(){
        $("#myModal").modal('hide');
    });
    $(".PriceModal-close").click(function(){
        $("#PriceModal").modal('hide');
    });
    //预约套餐报价
    $("#bookPrice").click(function(){
        var reg = /^1[34578]\d{9}$/;
        var cusName = $(".customer-name input[name='customerName']").val();
        var phone = $(".phone-number input[name='customerPhone']").val();
        if(!cusName) {
            alert("请先输入姓名！");
            return;
        }else if(!phone){
            alert("请输入手机号码！");
            return;
        }
        var result = reg.test(phone);
        if(phone && !result){
            alert("请输入正确的手机号码！");
            return;
        }
        if (phone && result && cusName) {
            $.ajax({
                type: "POST",
                url:"",
                data:{},
                async: false,
                error: function(request) {
                    alert("Connection error");
                },
                success: function(data) {
                    $("#myModal").modal('hide');
                    $(".customer-name input[name='customerName']").val("");
                    $(".phone-number input[name='customerPhone']").val("");
                    //弹出框
                   //alert("报价成功，稍后联系您！");
                }
            });
        }
    });



});