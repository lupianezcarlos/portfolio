








module.exports.utils = {
    getString : function(num, call) {
    var abc = 'abcdefghijklmnopqrstuvwxyz';
        var arr = [];
        for(i =0;i<num;i++) {
            var st = '';
            for(j = 0;j < Math.round(Math.random() * 100);j++){
                    st += abc[ Math.round(Math.random() * abc.length) ]
                }
            arr[i] = st.charAt(0).toUpperCase() + st.slice(1);
            
        }
       
        
        return arr;

    },

    isEmail:function(input){
        var expr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return expr.test(input)
    }

}