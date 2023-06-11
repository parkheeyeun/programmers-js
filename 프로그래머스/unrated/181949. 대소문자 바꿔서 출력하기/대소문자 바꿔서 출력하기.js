const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    var arr = []
      for (var i = 0; i < str.length; i++) {
            if (str[i] === str[i].toUpperCase()) {
                arr.push(str[i].toLowerCase(str))
            } else{
                arr.push(str[i].toUpperCase(str))
            }
        }
     console.log(arr.join(''))

});