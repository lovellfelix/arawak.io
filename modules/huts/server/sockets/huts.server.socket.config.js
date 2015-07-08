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
    exec('clone '+name + ' https://github.com/heroku/node-js-sample', 'dokku@arawak.space').pipe(process.stdout);

    // process.stdin
    //   .pipe(exec('echo try typing something; cat -', 'dokku@arawak.space'))
    //   .pipe(process.stdout);

    });




};
