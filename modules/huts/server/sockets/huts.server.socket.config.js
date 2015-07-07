'use strict';

/**
 * Module dependencies.
 */
var exec = require('ssh-exec'),
Writable = require('stream').Writable;

// Create the chat configuration
module.exports = function(io, socket) {
  io.sockets.on('connection', function(socket){

    socket.on('dbCreate',function(data){

    // exec('ls', 'dokku@arawak.space').pipe(process.stdout);
    var name=data.name;
    var type=data.type;
    exec('dokku '+type+':create '+name, 'dokku@arawak.space').pipe(process.stdout);
    });


    });


};
