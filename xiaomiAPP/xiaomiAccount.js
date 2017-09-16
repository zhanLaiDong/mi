/**
 * Created by 77 on 2017/9/6.
 */
//--------------------------------------------账号安全 个人信息 小米服务的转换
$(function () {
    $('#zhanghaoAQ').click(function () {
        $('#zhanghaoanquan').show();
        $('#gerenxinxi').hide();
        $('#xiaomifuwu').hide();
        $(this).css('color','#ff6700');
        $('#gerenXX').css('color','#333');
        $('#xiaomiFW').css('color','#333')
        
    });
    $('#gerenXX').click(function () {
        $('#gerenxinxi').show();
        $('#xiaomifuwu').hide();
        $('#zhanghaoanquan').hide();
        $(this).css('color','#ff6700');
        $('#zhanghaoAQ').css('color','#333');
        $('#xiaomiFW').css('color','#333')
    });
    $('#xiaomiFW').click(function () {
        $('#xiaomifuwu').show();
        $('#zhanghaoanquan').hide();
        $('#gerenxinxi').hide();
        $(this).css('color','#ff6700');
        $('#zhanghaoAQ').css('color','#333');
        $('#gerenXX').css('color','#333')
    });
    
    //---------------------------------------------------------------修改密码
    var USER_KEY = 'User';
    var user = store.get(USER_KEY);
    $('#confirm-MM').click(function () {
        var newPassword = $('#newPass').val();
        if( $('#newPass').val() == $('#newPassAgain').val() && $('#oldPass').val() == user.password ){
            alert('设置成功!');
            user.password = newPassword;
            store.update(USER_KEY,user);
            return true;
        }else{
            alert('输入有误！');
            return false;
        }
    })
    //---------------------------------------------------------------修改个人信息
    var USER_KEY = 'User';
    var user = store.get(USER_KEY,{});

    $('#confirm-XX').click(function () {
        if(  $('#name').val() !='' && $('#birthday').val() !='' && $('#sex').val() !=''){
            user.GRname = $('#name').val();
            user.birthday = $('#birthday').val();
            user.sex = $('#sex').val();
            store.update(USER_KEY,user);
            alert('设置成功！');
            return true;
        }else{
            alert('输入框不能为空！');
            return false;
        }

        console.log('姓名：'+GRname+' 生日：'+birthday+' 性别：'+sex);
    });

    $('#nameSpan').html(user.GRname);
    $('#birthdaySpan').html(user.birthday);
    $('#sexSpan').html(user.sex);
    
    
    
    
});
