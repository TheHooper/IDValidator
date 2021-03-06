define(function(require, exports, module) {

    var IDValidator = require('IDValidator');
    var GB2260 = require('GB2260');

    function log() {
        for(var i=0;i<arguments.length;i++){
            var m = arguments[i];
            if( typeof m == 'object' ){
                for( var k in m ){
                    if( m.hasOwnProperty(k) ){
                        log(k+':',m[k]);
                    }
                }
            }else{
                var p = document.createElement('p');
                p.innerText = m.toString();
                document.body.appendChild(p);
            }
        }
    }

    var testId = "371001198010082394";
    var fakeId = "345955198706122245";
    var fifteenId = "431389760616601";

    var Validator = new IDValidator();

    //检测是否合法
    log( '\nID:'+testId+'的合法性为:\n', Validator.isValid( testId ) );
    log( '\n假ID:'+fakeId+'的合法性为:\n', Validator.isValid( fakeId ) );
    //15位
    log( '\n15位ID:'+fifteenId+'的合法性为:\n', Validator.isValid( fifteenId ) );

    var Validator2 = new IDValidator( GB2260 );

    //输出分析信息
    log( '\nID:'+testId+'的信息为(带地址):\n', Validator2.getInfo( testId ) );

    //伪造一个ID
    var makeID = Validator.makeID();
    log( '\n制作的ID:'+makeID+'的信息为:\n',Validator2.getInfo( makeID ) );


    //伪造一个15位ID
    var makeID2 = Validator.makeID(true);
    log( '\n制作的15位ID:'+makeID2+'的信息为:\n',Validator2.getInfo( makeID2 ) );


    //随机地址码伪造一个ID
    var makeID3 = Validator2.makeID();
    log( '\n随机地址码制作的ID:'+makeID3+'的信息为:\n',Validator2.getInfo( makeID3 ) );
  
});
