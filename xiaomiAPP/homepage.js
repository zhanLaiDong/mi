/**
 * Created by 77 on 2017/8/31.
 */
$(function () {
    $.ajax({
        type:"GET",
        url:"shoppingcart.json",
        dataType:"json",
        success:function (data) {
            console.log(data);
            var html = '';
            for(var i=0;i<data.length;i++){
                html+='<tr class="tr"><td><img src="images/xiaomishouji.jpg" alt="" class="thumbnail"></td><td style="line-height: 60px">'+data[i].name+'</td><td style="line-height: 60px;" >'+data[i].price+'</td>';
                html+='<td style="line-height: 60px" class="TR">'+data[i].number+'</td>>';
                html+='<td style="line-height: 60px;"><a href="#" class="shanchu"><span class="glyphicon glyphicon-remove"></span></a></td></tr>'
            }
            $('#myTbody').html(html);

            $('#myTbody').find('.shanchu').on('click',function () {
                $(this).parents('tr').remove();
            });

               //------------------------------------------------------------购物车结算
            var num = 0;
            for(var i = 0;i<data.length;i++){
                num += parseInt(data[i].number);
            }
            $('#Number').html(num);
            console.log(num);
            var sum=0;
            $('.tr').find('.shanchu').on('click',function () {
               sum=  $(this).parent().prev().text();
                num=num-sum;
                console.log(num);
                $('#Number').html(num);
            });
            var numPrice = 0;
            for(var i = 0;i<data.length;i++){
                numPrice += parseInt(data[i].price);
            }
            $('#zongJia').html(numPrice);
            console.log(numPrice);
            var sumPrice=0;
            $('.tr').find('.shanchu').on('click',function () {
                sumPrice=  parseInt($(this).parents('tr').find('td').eq(2).text());
                numPrice=numPrice-sumPrice;
                console.log(numPrice);
                $('#zongJia').html(numPrice);

                if( numPrice == 0 ){
                    alert('快去选购吧！');
                    $('#jiesuan').hide()
                }
            });
               //----------------------------------------------------------购物车移入移除
               $('#shoppingCart').mouseover(function () {
                   $('#shoppingCartList').show();
                   $('#jiesuan').show();
                   $('#qq').css('color','#ff6700');
                   $('#wx').css('color','#ff6700');
                   $('#shoppingCart').css('background','white')
               })
               $('#shoppingCart').mouseout(function () {
                   $('#shoppingCartList').hide();
                   $('#jiesuan').hide();
                   $('#qq').css('color','white');
                   $('#wx').css('color','white');
                   $('#shoppingCart').css('background','#ff6700')
               })

               $('#shoppingCartList').mouseover(function () {
                   $('#shoppingCartList').show();
                   $('#jiesuan').show();
               });
               $('#shoppingCartList').mouseout(function () {
                   $('#shoppingCartList').hide();
                   $('#jiesuan').hide();
               });
                    $('#jiesuan').mouseover(function () {
                        $('#shoppingCartList').show();
                        $('#jiesuan').show();
                    });
                    $('#jiesuan').mouseout(function () {
                        $('#shoppingCartList').hide();
                        $('#jiesuan').hide();
                });
            //-------------------------------------------------------------设置计算距离头部的位置
            $('#jiesuan').css('top',str);
            var height = $('#shoppingCartList').outerHeight();
            var str = height-3+'px';
            $('#jiesuan').css('top',str);
            $('.shanchu').on('click',function () {
                $('#jiesuan').css('top',str);
                var height = $('#shoppingCartList').outerHeight();
                var str = height-3+'px';
                $('#jiesuan').css('top',str);
            });
        //    ---------------------------------------------------------------mi下拉菜单

            var enterTimer = null;
            var leaveTimer = null;
            $('#xiaomishouji').mouseenter(function () {
                var $a = $(this);
                clearTimeout(enterTimer);
                enterTimer = setTimeout(function () {
                    var target = $a.data('target');
                    $(target).slideDown();
                },400);

            });
            $('#xiaomishouji').mouseleave(function () {
                var $a = $(this);
                clearTimeout(leaveTimer);
                leaveTimer = setTimeout(function () {
                    var target = $a.data('target');
                    $(target).slideUp();
                },400);
            });
            $('#miXiaLaCaiDan').mouseenter(function () {
                $('#miXiaLaCaiDan').show();
                clearTimeout(leaveTimer);
            });
            $('#miXiaLaCaiDan').mouseleave(function () {
                $('#miXiaLaCaiDan').slideUp();
                clearTimeout(enterTimer);
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

            //-------------------------------------------------------------侧边栏
            $('#ceBianLan ul').find('li').mouseover(function () {
                $('#ceBianLan ul').find('li').css('background','none');
                $(this).css('background','#ff6700');
                $('#ceBianLan').css('opacity','1');
            });
            $('#ceBianLan ul').find('li').mouseout(function () {
                $('#ceBianLan ul').find('li').css('background','none');
                $('#ceBianLan').css('opacity','0.7');
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
            $('#hotdoor').mouseover(function () {
                $('#REMEN').show();
                $('#TV').hide();
                $('#hotdoor a').css('color','#ff6700');
                $('#dianshiyy a').css('color','black');
                $('#dianshiyy').css('border','0');
                $('#hotdoor').css('border-bottom','2px solid #ff6700')
            });
            $('#dianshiyy').mouseover(function () {
                $('#TV').show();
                $('#REMEN').hide();
                $('#dianshiyy a').css('color','#ff6700');
                $('#hotdoor a').css('color','black');
                $('#dianshiyy').css('border-bottom','2px solid #ff6700');
                $('#hotdoor').css('border','0')
            });
        //    -------------------------------------------------------小米明星单品
            $('#btn1').click(function () {
                $('#leftRight').animate({marginLeft:'0px'},'slow')
            });
            $('#btn2').click(function () {
                $('#leftRight').animate({marginLeft:'-1298px'},'slow')
            });
            $('#btn1').mouseover(function () {
                $('#btn1').css('color','#ff6700');
            });
            $('#btn2').mouseover(function () {
                $('#btn2').css('color','#ff6700');
            });
            $('#btn1').mouseout(function () {
                $('#btn1').css('color','#e0e0e0');
            });
            $('#btn2').mouseout(function () {
                $('#btn2').css('color','#e0e0e0');
            });
            
        //    -----------------------------------------------------智能
            $('#chuxing').mouseover(function () {
                $('#zhineng').hide();
                $('#zhineng2').show();
                $('#chuxing').css('border-bottom','2px solid #ff6700');
                $('#remen2').css('border','0')
            });
            $('#remen2').mouseover(function () {
                $('#zhineng2').hide();
                $('#zhineng').show();
                $('#remen2').css('border-bottom','2px solid #ff6700');
                $('#chuxing').css('border','0')
            });
            //-------------------------------------------------------个人中心

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

            $('#shoppingCart1').mouseover(function () {
                $('#GWC').show();
            });
            $('#shoppingCart1').mouseout(function () {
                $('#GWC').hide();
            });

            $('#user').mouseover(function () {
                $('#gerenzhongxin').show();
            });
            $('#user').mouseout(function () {
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
            })

            $('#gerenzhongxin li').mouseover(function () {
                $(this).css('backgroundColor','#f0f0f0')
            })
            $('#gerenzhongxin li').mouseout(function () {
                $(this).css('backgroundColor','white')
            })
            
            var isLogin = store.get('isLogin',false);
            if( isLogin == true ){
                $('#success').show();
                $('#index').hide();
            }else{
                $('#success').hide();
                $('#index').show();
            }

            $('#quit').click(function () {
                if( isLogin == true ){
                    $('#success').hide();
                    $('#index').show();
                }else{
                    $('#success').hide();
                    $('#index').show();
                }
                store.remove('isLogin')
            });
            
            $('#leftCe1').mouseenter(function () {
                $('#leftCe1').show()
            })
            $('#leftCe1').mouseleave(function () {
                $('#leftCe1').hide()
            })

        }
    });
});

