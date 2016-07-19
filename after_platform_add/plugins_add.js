#!/usr/bin/env node
var pluginlist = [
    "https://github.com/JasonElbert/LocalyticsAndroid.git --variable YOUR_APP_KEY=value --variable PACKAGE_NAME=value --variable YOUR_PUSH_ID=value"
];

var fs = require('fs');
var path = require('path');
var sys = require('sys');
var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
    sys.puts(stdout);
};

pluginlist.forEach(function(plug) {
    exec("cordova plugin add " + plug, puts);
});