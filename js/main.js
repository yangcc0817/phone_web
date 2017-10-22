/**
 * Created by Administrator on 2017/9/16.
 */
$(document).ready(function (){
    var reg = /^1[34578]\d{9}$/;
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
        var doValue = $('#cal-form2 input[name="do"]').val();
        var dede_fields= $('#cal-form2 input[name="dede_fields"]').val();
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
                cache: true,
                type: "POST",
                url:"",//"/plus/diy.php"
                data:{
                    "phone": phone,
                    "action": "post",
                    "diyid":14,
                    "do":doValue,
                    "name":cusName,
                    "dede_fields":dede_fields,
                    "dede_fieldshash":"f8130eef5454e4d8a0e15adafca06a59"
                },
                async: false,
                error: function(request) {
                    //alert("Connection error");
                    console.log("提交失败。");
                },
                success: function(data) {
                    $("#myModal").modal('hide');
                    $("#successModal").modal('show');
                }
            });
        }
    });
    //报价结果弹框
    $("#cal-form input[type='button']").click(function(){
        var square = $("#cal-form input[name='square']").val();
        var phone = $("#cal-form input[name='phone']").val();
        var doValue = $('#cal-form input[name="do"]').val();
        var dede_fields= $('#cal-form input[name="dede_fields"]').val();
        var result = reg.test(phone);
        if(!square){
            alert("请先输入房间面积！");
            return;
        }
        if(!phone){
            alert("请先输入手机号码！");
            return;
        }
        if(phone && !reg.test(phone)){
            alert("请输入正确的手机号码！");
            return;
        }
        /*  获取select 选中的 text :
            $("#ddlregtype").find("option:selected").text();
            获取select选中的 value:
            $("#ddlregtype ").val();
        */
        if(square && phone && result){
            $.ajax({
                cache: true,
                type: "POST",
                url:"",//"/plus/diy.php"
                data:{
                    "phone": phone,
                    "action": "post",
                    "diyid":14,
                    "do":doValue,
                    "dede_fields":dede_fields,
                    "dede_fieldshash":"f8130eef5454e4d8a0e15adafca06a59"
                },
                async: false,
                error: function(request) {
                    //alert("Connection error");
                    console.log("提交失败。");
                },
                success: function(data) {
                    $("#PriceModal").modal('show');
                    var square = $("#cal-form input[name='square']").val("");
                    var phone = $("#cal-form input[name='phone']").val("");
                }
            });
        }
    });

    //选择机型表格提交
    $("#cal-form3 .cal-form3-submit input").click(function(){
        var len = $(".choose-machine-content input:radio:checked").length;
        var len2 = $(".choose-type-content input:radio:checked").length;
        var phone = $("#cal-form3 input[name='phone']").val();
        var doValue = $('#cal-form3 input[name="do"]').val();
        var dede_fields= $('#cal-form3 input[name="dede_fields"]').val();
        if(!len){
            alert("请先选择机型！");
            return;
        }
        if(!len2){
            alert("请先选择类型！");
            return;
        }
        if(!phone){
            alert("请先输入手机号码！");
            return;
        }
        if(phone && !reg.test(phone)){
            alert("请输入正确的手机号码！");
            return;
        }
        if(len && len2 && reg.test(phone)){
            $.ajax({
                cache: true,
                type: "POST",
                url:"",//"/plus/diy.php"
                data:{
                    "phone": phone,
                    "action": "post",
                    "diyid":14,
                    "do":doValue,
                    "dede_fields":dede_fields,
                    "dede_fieldshash":"f8130eef5454e4d8a0e15adafca06a59"
                },
                async: false,
                error: function(request) {
                    //alert("Connection error");
                    console.log("提交失败。");
                },
                success: function(data) {
                    $("#PriceModal").modal('show');
                    $('#cal-form3 input:radio').removeAttr('checked');
                    var phone = $("#cal-form3 input[name='phone']").val("");
                }
            });
        }
    });
    //我想在未来买空调表单
    $("#cal-form4 input[type='button']").click(function(){
        var name = $("#cal-form4 input[name='name']").val();
        var phone = $("#cal-form4 input[name='phone']").val();
        var doValue = $('#cal-form4 input[name="do"]').val();
        var dede_fields= $('#cal-form4 input[name="dede_fields"]').val();
        if (!name){
            alert("请先输入姓名！");
            return;
        }
        if(!phone){
            alert("请先输入手机号码！");
            return;
        }
        if(phone && !reg.test(phone)){
            alert("请输入正确的手机号码！");
            return;
        }
        if(name && phone && reg.test(phone)) {
            $.ajax({
                cache: true,
                type: "POST",
                url: "",//"/plus/diy.php"
                data: {
                    "phone": phone,
                    "action": "post",
                    "diyid": 14,
                    "do": doValue,
                    "dede_fields": dede_fields,
                    "dede_fieldshash": "f8130eef5454e4d8a0e15adafca06a59"
                },
                async: false,
                error: function (request) {
                    //alert("Connection error");
                    console.log("提交失败。");
                },
                success: function (data) {
                    $("#PriceModal").modal('show');
                    $("#cal-form4 input[name='name']").val("");
                    $("#cal-form4 input[name='phone']").val("");
                }
            });
        }
    });



});