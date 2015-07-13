'use strict';

/**
 * Module dependencies.
 */
var exec = require('ssh-exec'),
Writable = require('stream').Writable;

// Create the chat configuration
module.exports = function(io, socket) {

    socket.on('createHut', function(req, res){

    //exec('clone lovelltest https://github.com/heroku/node-js-sample', 'dokku@arawak.space').pipe(process.stdout);
    var name=req.name;
    //var type=res.type;
    if (process.env.NODE_ENV === 'production') {
    exec('arawak:deploy '+name, 'dokku@arawak.space').pipe(process.stdout);
    }

    // process.stdin
    //   .pipe(exec('echo try typing something; cat -', 'dokku@arawak.space'))
    //   .pipe(process.stdout);

    });

    socket.on('deleteHut', function(req, res){

    var name=req.name;
    if (process.env.NODE_ENV === 'production') {
    exec('arawak:remove '+name, 'dokku@arawak.space').pipe(process.stdout);
    }

    });




};
