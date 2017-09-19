/**
 * Created by Administrator on 2017/9/16.
 */
$(document).ready(function (){
    /*下拉框*/
    $('.selectbox').wrap('<div class="select_wrapper"></div>')
    $('.selectbox').parent().prepend('<span>'+ $(this).find(':selected').text() +'</span>');
    $('.selectbox').parent().children('span').width($('.selectbox').width());
    $('.selectbox').css('display', 'none');
    $('.selectbox').parent().append('<ul class="select_inner"></ul>');
    $('.selectbox').children().each(function(){
        var opttext = $(this).text();
        var optval = $(this).val();
        $('.selectbox').parent().children('.select_inner').append('<li id="' + optval + '">' + opttext + '</li>');
    });

    $('.selectbox').parent().find('li').on('click', function (){
        var cur = $(this).attr('id');
        $('.selectbox').parent().children('span').text($(this).text());
        $('.selectbox').children().removeAttr('selected');
        $('.selectbox').children('[value="'+cur+'"]').attr('selected','selected');
        alert($('.selectbox').children('[value="'+cur+'"]').text());
        /*console.log($('.selectbox').children('[value="'+cur+'"]').text());*/
    });

    $('.selectbox').parent().on('click', function (){
        $(this).find('ul').slideToggle('fast');
    });

});