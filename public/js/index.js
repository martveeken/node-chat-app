var socket = io();

socket.on('connect', function () {
  console.log('connected to server');

  socket.emit('createEmail', {
    to: 'mart.veeken@gmail.com',
    text: 'Hi this is Mart'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
})

socket.on('newMessage', function (message) {
  console.log(message);

  socket.emit('createMessage', function () {
    console.log('Great dude!');
  });
})
