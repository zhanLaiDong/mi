/**
 * Created by 77 on 2017/9/6.
 */
//------------------------------按钮倒计时
    var countdown = 60;
    function sendemail(){
        var obj = $("#achieve");
        settime(obj);
    }
    function settime(obj) { //发送验证码倒计时
        if (countdown == 0) {
            obj.attr('disabled',false);
            //obj.removeattr("disabled");
            obj.val("免费获取验证码");
            countdown = 60;
            return;
        } else {
            obj.attr('disabled',true);
            obj.val("重新发送(" + countdown + ")");
            countdown--;
        }
        setTimeout(function() {
                settime(obj) }
            ,1000);

        $("#index").click(function () {
            if($('#shuruYZM').val() == random){
                location.href = 'setNameAndPassword.html';
            }else{
                return false;
            }
        });
    }
    //----------------------------------------------手机短信验证
$(function () {
    $('#achieve').click(function () {
        var mobile = $('#shuruSJHM').val();
        random = Math.round(9999*Math.random());
        console.log(random);
        var param = {
            no:random.toString()
        };
        $.ajax({
            url: 'http://sms.market.alicloudapi.com/singleSendSms',
            type: 'GET',
            dataType: 'json',
            data: {
                ParamString:JSON.stringify(param),
                RecNum:mobile,
                SignName: "詹来东",
                TemplateCode: 'SMS_95560056'
            },
            headers: {
                Authorization: 'APPCODE f2c0968e4166437f8d818e2f457f11de'
            }
        }).done(function (data) {
        });
    });

});

    //----------------------------------------------------------------------国家
    $(function () {
        $.getJSON('country.json',function (data) {
            var html = '';
            for (category in data) {
                html += '<h4>' + category + '</h4>';
                html += '<div class="list-group aa">';
                for (var i = 0, len = data[category].length; i < len; i++) {
                    html += '<a class="list-group-item ss" href="#" data-code="'+data[category][i].N+'">' + data[category][i].C + '</a>'
                }
                html += '</div>'
            }
            $('#nationnality').html(html);
            $('.list-group-item').on('click',function () {
                $('#china').val($(this).text());
            });
        })
    });
    //--------------------------------------------------------区号
    $(function () {
        $.getJSON('country.json',function (data) {
            var html2 = '';
            for (category in data) {
                html2 += '<h4>' + category + '</h4>';
                html2 += '<div class="list-group aa">';
                for (var i = 0, len = data[category].length; i < len; i++) {
                    html2 += '<a class="list-group-item1 ss" href="#" >' + data[category][i].N + '</a>'
                }
                html2 += '</div>'
            }
            $('#phone').html(html2);
            $('.list-group-item1').on('click',function () {
                $('#tel').text($(this).text());

            });
            $('.aa').find('.ss').on('click',function () {
                $('#tel').text($(this).data('code'));

            })
        });

    });

//------------------------------------之前的短信验证
// $(function () {
//     var random = null;
//     $("#achieve").click(function () {
//         var mobile = $('#shuruSJHM').val();
//         random = Math.round(9999*Math.random());
//         console.log(random);
//         $.ajax({
//             type:"GET",
//             url:"http://smsapi.api51.cn/code/",
//             dataType:"json",
//             data:{
//                 mobile:mobile,
//                 code:random
//             },
//             headers:{
//                 Authorization:'APPCODE f2c0968e4166437f8d818e2f457f11de'
//             }
//         }).done(function (data) {
//             console.log(data)
//         });
//     });
//     $("#form").submit(function () {
//         if($('#shuruYZM').val() == random){
//         }else{
//             return false;
//         }
//     });
// });






















