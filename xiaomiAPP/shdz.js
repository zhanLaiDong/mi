/**
 * Created by 77 on 2017/9/14.
 */
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
        var province =  $('#provinceID').val();
        var city = $('#cityID').val();
        var country = $('#countryID').val();
        var addressXX =  $('#inputAddress').val();
        var zipcode =  $('#inputZipcode').val();

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


        addressList.push(address);

        store.update('USER_KEY',addressList);

        var html = '';
        html += '<div class="text-center" data-num="'+address.myID+'" style="margin:0;width: 265px;height: 180px;border: 1px solid #e0e0e0;float: left">';
        html += '<p>'+ addressList[i].myName +'</p>';
        html += '<p>'+ addressList[i].myPhone +'</p>';
        html += '<p>'+ addressList[i].myProvince + addressList[i].myCity + addressList[i].myCountry+'</p>';
        html += '<p>'+ addressList[i].myAddressXX +'</p>';
        html += '<p>'+ addressList[i].myZipcode +'</p>';
        html += '<p><a href="#" class="change" data-toggle="modal" data-target="#changeModal" >修改</a><a href="#" class="shanchu">删除</a></p> </div>';
        $('.add').append(html);
    }

});

$('.add').on('click','.shanchu',function () {
    var id= $(this).parent().parent().data('num');
    $(this).parent().parent().remove();
    for(var i=0;i<addressList.length;i++){
        if(addressList[i].myID==id){
            addressList.splice(i,1);
        }
    }
    store.update('USER_KEY',addressList);
});


$('.add').on('click','.change',function () {
    var id= $(this).parent().parent().data('num');
    for(var i=0;i<addressList.length;i++){
        if(addressList[i].myID==id){
            address = addressList[i];
            break;
        }
    }

    $('#changeName').val(address.myName);
    $('#changePhone').val(address.myPhone);
    $('#changeProvince>option:checked').text(address.myProvince);
    $('#changeCity>option:checked').text(address.myCity);
    $('#changeCountry>option:checked').text(address.myCountry);
    $('#changeAddress').val(address.myAddressXX);
    $('#changeZipcode').val(address.myZipcode);
    console.log(address);
});

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