/**
 * Created by Administrator on 2017/9/16.
 */
$(document).ready(function (){
    var freeNum = Math.floor(Math.random()*999+1);
    $(".form-num").html(freeNum);

    //提交报价
    $(".cal-form input[type='submit'] ").click(function(){


        $.ajax({
            cache: true,
            type: "POST",
            url:"",
            data:$('#nameForm').serialize(),
            async: false,
            error: function() {

            },
            success: function() {
               freeNum --;
            }
        });
    });

});