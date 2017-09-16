/**
 * Created by 77 on 2017/9/6.
 */
//-----------------------------------------------输入用户名和密码的正则验证
window.onload = function () {
    var USER_KEY = 'User';
    var userName = document.getElementById('user');
    var oPassword = document.getElementById('password');
    var oPasswordAgain = document.getElementById('passwordAgain');
    var oP1 = document.getElementById('p1');
    var oP2 = document.getElementById('p2');
    var oP3 = document.getElementById('p3');
    
    fn1(userName,oP1,/^[0-9A-Za-z\u4e00-\u9fa5]{4,8}$/);
    fn1(oPassword,oP2,/^[0-9A-Za-z]{4,8}$/);
    fn1(oPasswordAgain,oP3,/^[0-9A-Za-z]{4,8}$/);

    function fn1(obj,p,zz) {
        obj.onfocus = function () {
            p.innerHTML = '请输入4-8位英文数字组成的字符';
            obj.style.borderColor = '';
            if(zz.test(obj.value)){
                obj.style.borderColor = 'green';
            }
        };
        obj.onblur = function () {
            if(!zz.test(obj.value)){
                obj.style.borderColor = 'red';
                p.innerHTML = '输入格式错误！';
                p.style.color = 'red'
            }else{
                obj.style.borderColor = 'green';
                p.innerHTML = '输入格式正确！';
                p.style.color = 'green';
            }
        };
    }
    //-----------------------------------------------------提交成功或失败时的反应 以及把设置好的用户名和密码存入到本地
    $('#submit').click(function () {
        if( /^[0-9A-Za-z]{4,8}$/.test(userName.value) && /^[0-9A-Za-z]{4,8}$/.test(oPassword.value) && /^[0-9A-Za-z]{4,8}$/.test(oPasswordAgain.value) && oPassword.value == oPasswordAgain.value){
            alert('设置成功！');
            
            var user = {};
            user.name = $('#user').val();
            user.password = $('#password').val();
            store.add(USER_KEY,user);
    
        }else{
            alert('输入有误！');
            $('#passwordAgain').css('border','1px solid red');
            // $('#password').css('border','1px solid red');
            // $('#user').css('border','1px solid red');
            // $('#p1').css('color','red');
            // $('#p1').html('输入格式错误！');
            // $('#p2').css('color','red');
            // $('#p2').html('输入格式错误！');
            $('#p3').css('color','red');
            $('#p3').html('输入有误！');
            return false;
        }
    })
    

};




