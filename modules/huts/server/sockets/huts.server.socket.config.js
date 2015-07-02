'use strict';

/**
 * Module dependencies.
 */
var exec = require('ssh-exec'),
Writable = require('stream').Writable;

// Create the chat configuration
module.exports = function(io, socket) {
	// Emit the status event when a new socket client is connected
    // io.emit('chatMessage', {
    //     type: 'status',
    //     text: 'Is now connected',
    //     created: Date.now(),
    //     profileImageURL: socket.request.user.profileImageURL,
    //     username: socket.request.user.username
    // });

    // Send a chat messages to all connected sockets when a message is received
    socket.on('chatMessage', function(message) {
        message.type = 'message';
        message.created = Date.now();
        message.profileImageURL = socket.request.user.profileImageURL;
        message.username = socket.request.user.username;

        // Emit the 'chatMessage' event
        io.emit('chatMessage', message);
    });

    // Emit the status event when a socket client is disconnected
    socket.on('disconnect', function() {
        io.emit('chatMessage', {
            type: 'status',
            text: 'disconnected',
            created: Date.now(),
            username: socket.request.user.username
        });
    });

    socket.on('writeFile', function(data){

      exec('touch' + data.name);

    });

    socket.on('sshkey', function(data){
    //exec('touch ssh.pub ; echo '+data.mysshkey+' > ssh.pub; cat ~/ssh.pub | sudo sshcommand acl-add dokku '+ data.name, credentials).pipe(process.stdout);
    exec('touch ssh.pub ; echo '+data.mysshkey + ' > ssh.pub; cat ~/ssh.pub | ');
    });

    socket.on('AppCreate',function(data){
     var name=data.name;
     var type=data.type;
     exec('dokku create' + name ).pipe(process.stdout);
    // exec('dokku '+type+':create '+name, credentials).pipe(process.stdout);
  });

  //   socket.on('cmd', function(data){
  //   var cmd=data.cmd;
  //   var name=data.name;
  //   exec('dokku run ' + name + ' ' + cmd, credentials).pipe(process.stdout);
  // });

};
