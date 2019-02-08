var net = require('net');
var HOST = '172.26.116.110';
var PORT = 8000;
var client = new net.Socket();
var i = 1

client.connect(PORT, HOST, function () {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    if (i == 1) {
        client.write('5735512079');
        i++
    }
});
client.on('data', function (data) {
    if (i == 2) {
        
        if (data == 'OK') {
            console.log('DATA: ' + data);
            client.write('16')
            
        }else if(data == 'BINGO'){
            console.log('Your number is : ' + data)
            client.destroy();
            
        }else if(data == 'FAIL'){
            console.log('data : ' + data)
            client.destroy();
        }
            
    }
    
});
// Add a 'close' event handler for the client socket
client.on('close', function () {
    console.log('Connection closed');
});