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
    //关闭弹窗
    $(".msg-close").click(function(){
        $("#myModal").modal('hide');
    });
    $(".PriceModal-close").click(function(){
        $("#PriceModal").modal('hide');
    });
    $('.successModal-close').click(function(){
        $("#successModal").modal('hide');
    });
    //清空弹出框的初始化值
    $('#myModal').on('hidden.bs.modal', function () {
        $(".customer-name input[name='customerName']").val('');
        $(".phone-number input[name='customerPhone']").val('');
    });

    //校验框绑定blur事件


    $(".customer-name input[name='customerName']").blur(function(){
        if(this.value){
            $(".alert-danger").addClass("hidden");
        }
    });
    $(".phone-number input[name='customerPhone']").keyup(function(){
        if(this.value && (/^1[34578]\d{9}$/).test(this.value)){
            $(".alert-danger").addClass("hidden");
        }
    });

    //预约套餐报价
    $("#bookPrice").click(function(){
        var cusName = $(".customer-name input[name='customerName']").val();
        var phone = $(".phone-number input[name='customerPhone']").val();
        var reg = /^1[34578]\d{9}$/;
        var result = reg.test(phone);
        if(!cusName) {
            $(".alert-danger").removeClass("hidden");
            $(".alert-content").html("请输入姓名！");
            return;
        }else if(!phone){
            $(".alert-danger").removeClass("hidden");
            $(".alert-content").html("请输入手机号！");
            return;
        }
        if(phone && !result){
            $(".alert-danger").removeClass("hidden");
            $(".alert-content").html("请输入正确的手机号！");
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
                    $("#successModal").modal('show');
                }
            });
        }
    });



});