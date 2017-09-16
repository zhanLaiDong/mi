/**
 * Created by 77 on 2017/9/10.
 */
$(function () {
    $('#LJGM').affix({
        offset: {
            top: 140,
            bottom: function () {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })
});


