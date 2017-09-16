/**
 * Created by 77 on 2017/9/6.
 */
//-----------------------------账号登录和扫描验证码的转换
$(function () {
    $('#zhanghaodenglu').click(function () {
        $('#zhanghaoDL').show();
        $('#saomiaoDL').hide();
        $(this).css('color','#ff6700');
        $('#saomiaodenglu').css('color','#666')
    });
    $('#saomiaodenglu').click(function () {
        $('#saomiaoDL').show();
        $('#zhanghaoDL').hide();
        $(this).css('color','#ff6700');
        $('#zhanghaodenglu').css('color','#666')
    });


    
    //------------------------------------------登录的验证以成功状态导航栏的改变
    var user = store.get('User');
    $('#lijidenglu').click(function () {
        console.log($('#username').val());
        console.log($('#password').val());
        console.log(user);
        if( $('#username').val() == user.name && $('#password').val() == user.password){
            store.add('isLogin',true);
            location.href = 'homepage.html';
        }else{
            alert('账号或密码错误！');
        }
        return false;
    })
});
