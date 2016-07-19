#!/usr/bin/env node
var pluginlist = [
    "https://github.com/JasonElbert/LocalyticsAndroid.git --variable YOUR_APP_KEY=27424d26b294e5b3c4adf50-d4f0874c-447e-11e6-186e-00cef1388a40 --variable PACKAGE_NAME=com.localytics.test --variable YOUR_PUSH_ID=testlocalytics",
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