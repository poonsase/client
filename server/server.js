var net = require('net');
var HOST = '172.26.116.110';
var PORT = 8000;
var server = net.createServer();
var i = 1
var c = 1
let answer = Math.floor(Math.random() * 21)
server.listen(PORT, HOST);
server.on('connection', (sock) => {

  console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
  console.log('ANSWER IS: ' + answer.toString())
  sock.on('data', (data) => {
    console.log('data' + '[' + i + ']' + sock.remoteAddress + ' data: ' + data)
    if (i == 1) {
      sock.write('OK')
    } else if (i >= 2) {
      if (data == answer) {
        sock.write('BINGO')
      } else {
        sock.write('FAIL')
      }
    }
    i++
    c++
  })
  sock.on('close', (data) => {
    console.log('connection is CLOSED: ');
  });


});