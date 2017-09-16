/**
 * Created by 77 on 2017/9/7.
 */
//------------------------------本地存储的方法
var store = (function(){
    'use strict';
    return {
        get:function(key,defaultValue){
            var val = localStorage.getItem(key);
            try{
                val = JSON.parse(val);
            }
            catch (error){
                val = null;
            }
            if(defaultValue && val === null){
                val = defaultValue;
            }
            return val;
        },
        update :function (key,value) {
            if(value){
                localStorage.setItem(key,JSON.stringify(value));
            }
        },
        add:function (key,value) {
            this.update(key,value);
        },
        remove:function (key) {
            localStorage.removeItem(key);
        }
    }
})();
