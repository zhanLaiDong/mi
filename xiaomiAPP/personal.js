/**
 * Created by 77 on 2017/9/5.
 */
$(function () {

    // ---------------------------------------------------------------mi下拉菜单
    $('#xiaomishouji').mouseover(function () {
        // $('#miXiaLaCaiDan').show();
        $('#miXiaLaCaiDan').slideDown(300);
    });
    $('#xiaomishouji').mouseout(function () {
        // $('#miXiaLaCaiDan').hide();
        $('#miXiaLaCaiDan').slideUp(300);
    });
    //---------------------------------------------------------------搜索
    $('#searchBtn').mouseover(function () {
        $('#searchBtn').css('backgroundColor','#ff6700');
        $('#searchBtn').css('border','#ff6700');
        $('#search').css('color','white')
    });
    $('#searchBtn').mouseout(function () {
        $('#searchBtn').css('backgroundColor','white');
        $('#searchBtn').css('border',' 1px solid #cccccc');
        $('#search').css('color','black')
    });

    $('#input').click(function () {
        $('#input').css('border','1px solid #ff6700');
        $('#searchBtn').css('border',' 1px solid #ff6700');
    });
    //------------------------------------------------------------侧边栏
    $('#ceBianLan ul').find('li').mouseover(function () {
        $('#ceBianLan ul').find('li').css('background','none');
        $(this).css('background','#ff6700');
        $(this).find('a').css('color','white')
    });
    $('#ceBianLan ul').find('li').mouseout(function () {
        $('#ceBianLan ul').find('li').css('background','none');
        $(this).find('a').css('color','#424242')
    });
    //    -----------------------------------------------------------侧边栏-隐藏
    $('#dianhuaka').mouseover(function () {
        $('#leftCe1').show();
    });
    $('#dianhuaka').mouseout(function () {
        $('#leftCe1').hide();
    });
    $('#bijiben').mouseover(function () {
        $('#leftCe2').show();
    });
    $('#bijiben').mouseout(function () {
        $('#leftCe2').hide();
    });
    $('#hezi').mouseover(function () {
        $('#leftCe3').show();
    });
    $('#hezi').mouseout(function () {
        $('#leftCe3').hide();
    });
    $('#luyouqi').mouseover(function () {
        $('#leftCe4').show();
    });
    $('#luyouqi').mouseout(function () {
        $('#leftCe4').hide();
    });
    $('#ALL').mouseover(function () {
        $('#ceBianLan').show();
    })
    $('#ALL').mouseout(function () {
        $('#ceBianLan').hide();
    });
    $('#user').mouseover(function () {
        $('#user').css('color','#ff6700');
        $('#user').css('backgroundColor','white');
        $('#userJT').css('color','#ff6700');
    })
    $('#user').mouseout(function () {
        $('#user').css('color','#b0b0b0');
        $('#user').css('backgroundColor','#333');
        $('#userJT').css('color','#b0b0b0');
    })
    $('#shoppingCart').mouseover(function () {
        $('#GWC').show();
    });
    $('#shoppingCart').mouseout(function () {
        $('#GWC').hide();
    });
    $('#user').mouseover(function () {
        // $('#gerenzhongxin').slideDown(300);
        $('#gerenzhongxin').show();
    });
    $('#user').mouseout(function () {
        // $('#gerenzhongxin').slideUp(300);
        $('#gerenzhongxin').hide()
    });
    $('#gerenzhongxin').mouseover(function () {
        $('#gerenzhongxin').show();
        $('#user').css('color','#ff6700');
        $('#user').css('backgroundColor','white');
        $('#userJT').css('color','#ff6700');
    });
    $('#gerenzhongxin').mouseout(function () {
        $('#gerenzhongxin').hide();
        $('#user').css('color','#b0b0b0');
        $('#user').css('backgroundColor','#333');
        $('#userJT').css('color','#b0b0b0');
    });
    $('#gerenzhongxin li').mouseover(function () {
        $(this).css('backgroundColor','#f0f0f0')
    });
    $('#gerenzhongxin li').mouseout(function () {
        $(this).css('backgroundColor','white')
    });
    $('#wodegrzx').click(function () {
        $('#WDGRZX').show();
        $('#WDDD').hide();
        $('#SHDZ').hide();
        $('#SDPJ').hide();
    })
    $('#wodedd').click(function () {
        $('#WDDD').show();
        $('#WDGRZX').hide();
        $('#SHDZ').hide();
        $('#SDPJ').hide();
    })
    $('#shouhuodz').click(function () {
        $('#SHDZ').show();
        $('#WDGRZX').hide();
        $('#WDDD').hide();
        $('#SDPJ').hide();
    })
    $('#pingjiasd').click(function () {
        $('#SDPJ').show();
        $('#WDGRZX').hide();
        $('#WDDD').hide();
        $('#SHDZ').hide();
    });
    //--------------------------------------------------时间问候
    
    var now = new Date();
    var hour = parseInt( now.getHours() );
    var minite = now.getMinutes();
    var hourMinite = hour+':'+minite;
    if( hour<6 ){
        $('#hello').html('当前时间为：'+hourMinite+',凌晨好！')
    }else if( hour<12 ){
        $('#hello').html('当前时间为：'+hourMinite+',早上好！')
    }else if( hour<18 ){
        $('#hello').html('当前时间为：'+hourMinite+',下午好！')
    }else{
        $('#hello').html('当前时间为：'+hourMinite+',晚上好！')
    }
    
//-------------------------------------------------------------------------------------------------收货地址

//    ---------------------------------------------------在本地存储中创建一个数组储存地址数据
    var addressList=store.get('USER_KEY',[]);
    //-----------------------------------------------页面初始化
    var html='';
    for(var i=0;i<addressList.length;i++){
        html += '<div class="text-center" data-num="'+addressList[i].myID+'" style="margin:0;width: 265px;height: 180px;border: 1px solid #e0e0e0;float: left">';
        html += '<p>'+ addressList[i].myName +'</p>';
        html += '<p>'+ addressList[i].myPhone +'</p>';
        html += '<p>'+ addressList[i].myProvince + addressList[i].myCity + addressList[i].myCountry+'</p>';
        html += '<p>'+ addressList[i].myAddressXX +'</p>';
        html += '<p>'+ addressList[i].myZipcode +'</p>';
        html += '<p><a href="#" class="change" data-toggle="modal" data-target="#changeModal" >修改</a><a href="#" class="shanchu">删除</a></p> </div>';
    
    }
    console.log(addressList);
    $('.add').append(html);
    //---------------------------------------------添加收货地址
    $('#save').click(function () {
            if( $('#inputName').val() ==''
                || $('#inputPhone').val() ==''
                || $('#inputAddress').val() ==''
                || $('#inputZipcode').val() ==''
                || $('#provinceID').val() == '请选择省份'
                || $('#cityID').val() == '请选择城市'
                || $('#countryID').val() == '请选择地区'){
                alert('请将信息填写完整！')
            }else{
                var name =  $('#inputName').val();
                var phone =  $('#inputPhone').val();
                var province =  $('#provinceID>option:checked').text();
                var city = $('#cityID>option:checked').text();
                var country = $('#countryID>option:checked').text();
                var addressXX =  $('#inputAddress').val();
                var zipcode =  $('#inputZipcode').val();
                //---------------------------------------------设置数据
                var id=1;
                if(addressList.length>0){
                    id=addressList[addressList.length-1].myID+1;
                }
                var address={
                    "myID":id,
                    "myName":name,
                    "myPhone":phone,
                    "myProvince":province,
                    "myCity":city,
                    "myCountry":country,
                    "myAddressXX":addressXX,
                    "myZipcode":zipcode
                };

                //------------------------------------添加数据到数组
                addressList.push(address);
                //--------------------------------------向本地存储添加地址
                store.update('USER_KEY',addressList);
                //--------------------------------------向页面添加地址框
                var html = '';
                html += '<div class="text-center" data-num="'+address.myID+'" style="margin:0;width: 265px;height: 180px;border: 1px solid #e0e0e0;float: left">';
                html += '<p>'+ address.myName +'</p>';
                html += '<p>'+ address.myPhone +'</p>';
                html += '<p>'+ address.myProvince + addressList[i].myCity + addressList[i].myCountry+'</p>';
                html += '<p>'+ address.myAddressXX +'</p>';
                html += '<p>'+ address.myZipcode +'</p>';
                html += '<p><a href="#" class="change" data-toggle="modal" data-target="#changeModal" >修改</a><a href="#" class="shanchu">删除</a></p> </div>';
                $('.add').append(html);
                $('#myModal').modal('hide');
            }
    });
    //---------------------------------------------删除地址数据
    $('.add').on('click','.shanchu',function () {
        var sure = confirm('是否删除');
        if( sure == true){
            var id= $(this).parent().parent().data('num');
            $(this).parent().parent().remove();
            for(var i=0;i<addressList.length;i++){
                if(addressList[i].myID==id){
                    addressList.splice(i,1);
                }
            }
        }else{
            return false
        }
        
        //--------------------------------------重新上传数据
        store.update('USER_KEY',addressList);
    });

    
    
//    -------------------------------------------------修改地址数据

    $('.add').on('click','.change',function () {
        var id= $(this).parent().parent().data('num');
        for(var i=0;i<addressList.length;i++){
            if(addressList[i].myID==id){
              address = addressList[i];
                break;
            }
        }
    //    --------------------------------------初始化
        $('#changeName').val(address.myName);
        $('#changePhone').val(address.myPhone);
        $('#changeProvince>option:checked').text(address.myProvince);
        $('#changeCity>option:checked').text(address.myCity);
        $('#changeCountry>option:checked').text(address.myCountry);
        $('#changeAddress').val(address.myAddressXX);
        $('#changeZipcode').val(address.myZipcode);
        console.log(address);
    });
    //-------------------------------------保存被修改的数据
    $('#change').click(function () {
        address.myName =  $('#changeName').val();
        address.myPhone =   $('#changePhone').val();
        address.myProvince =  $('#changeProvince>option:checked').text();
        address.myCity =   $('#changeCity>option:checked').text();
        address.myCountry =   $('#changeCountry>option:checked').text();
        address.myAddressXX =  $('#changeAddress').val();
        address.myZipcode =   $('#changeZipcode').val();
        store.update('USER_KEY',addressList);

        var html = '';
        html += '<div class="text-center" data-num="'+address.myID+'" style="margin:0;width: 265px;height: 180px;border: 1px solid #e0e0e0;float: left">';
        html += '<p>'+  address.myName +'</p>';
        html += '<p>'+ address.myPhone +'</p>';
        html += '<p>'+ address.myProvince + address.myCity + address.myCountry +'</p>';
        html += '<p>'+ address.myAddressXX +'</p>';
        html += '<p>'+ address.myZipcode +'</p>';
        html += '<p><a href="#" class="change" data-toggle="modal" data-target="#changeModal" >修改</a><a href="#" class="shanchu">删除</a></p> </div>';
        $('[data-num='+address.myID+']').html(html);
        
    })

    

});

$.getJSON("city.json", function (obj) {
    cityJson = obj;
    var sb = new StringBuffer();
    $.each(obj, function (i, val) {
        if (val.item_code.substr(2, 4) == '0000') {
            sb.append("<option value='" + val.item_code + "'>" + val.item_name + "</option>");
        }
    });
    $("#shengfen").after(sb.toString());
});
// 省值变化时 处理市
function doProvAndCityRelation(){
    var city = $("#cityID");
    var county = $("#countryID");
    if (city.children().length > 1) {
        city.empty();
    }
    if (county.children().length > 1) {
        county.empty();
    }
    if ($("#chengshi").length == 0) {
        city.append("<option id='chengshi' value='-1'>请选择城市</option>");
    }
    if ($("#diqu").length == 0) {
        county.append("<option id='diqu' value='-1'>请选择地区</option>");
    }
    var sb = new StringBuffer();
    $.each(cityJson, function (i, val) {
        if (val.item_code.substr(0, 2) == $("#provinceID").val().substr(0, 2) && val.item_code.substr(2, 4) != '0000' && val.item_code.substr(4, 2) == '00') {
            sb.append("<option value='" + val.item_code + "'>" + val.item_name + "</option>");
        }
    });
    $("#chengshi").after(sb.toString());
}
// 市值变化时 处理区/县
function doCityAndCountyRelation(){
    var cityVal = $("#cityID").val();
    var county = $("#countryID");
    if (county.children().length > 1) {
        county.empty();
    }
    if ($("#diqu").length == 0) {
        county.append("<option id='diqu' value='-1'>请选择地区</option>");
    }
    var sb = new StringBuffer();
    $.each(cityJson, function (i, val) {
        if (cityVal == '110100' || cityVal == "120100" || cityVal == "310100" || cityVal == "500100") {
            if (val.item_code.substr(0, 3) == cityVal.substr(0, 3) && val.item_code.substr(4, 2) != '00') {
                sb.append("<option value='" + val.item_code + "'>" + val.item_name + "</option>");
            }
        } else {
            if (val.item_code.substr(0, 4) == cityVal.substr(0, 4) && val.item_code.substr(4, 2) != '00') {
                sb.append("<option value='" + val.item_code + "'>" + val.item_name + "</option>");
            }
        }
    });
    $("#diqu").after(sb.toString());


}
function StringBuffer(str) {
    var arr = [];
    str = str || "";
    var size = 0;  // 存放数组大小
    arr.push(str);
    // 追加字符串
    this.append = function (str1) {
        arr.push(str1);
        return this;
    };
    // 返回字符串
    this.toString = function () {
        return arr.join("");
    };
    // 清空
    this.clear = function (key) {
        size = 0;
        arr = [];
    };
    // 返回数组大小
    this.size = function () {
        return size;
    };
    // 返回数组
    this.toArray = function () {
        return buffer;
    };
    // 倒序返回字符串
    this.doReverse = function () {
        var str = buffer.join('');
        str = str.split('');
        return str.reverse().join('');
    }
}

