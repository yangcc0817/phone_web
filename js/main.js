/**
 * Created by Administrator on 2017/9/16.
 */
$(document).ready(function (){
    var numString = "365";
    var num = parseInt(numString);
    function setNum(str){
        var first = str[0];
        var second = str[1];
        var third =str[2];
        $(".header span").html(first);
        $(".header b").html(second);
        $(".header i").html(third);
    }
    setNum(numString);

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
                num--;
                setNum(num);
            }
        });
    });

});