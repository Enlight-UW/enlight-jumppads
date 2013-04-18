var bb = require('bonescript');
var http = require('http');
var querystring = require('querystring');


function ajaxit(stuff) {
    //Change host to enlight server addr for live.
    
    var options = {
        host: '192.168.7.1',
        port: 80,
        path: '/enlight-webfront/php/act.php',
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': stuff.length
        }
    };
    
    console.log('about to request');
    
    var req = http.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function(chunk){
            consle.log('response: ' + chunk);
        });
    });
    
    req.write(stuff);
    
    console.log('requested');
}

function updateValves(whichones) {
    var data = querystring.stringify({
        request: 'toggleValveState',
        STATE: whichones
    });
    
    ajaxit(data);
}

var inputPin1 = bone.P8_37;
var inputPin2 = bone.P8_38;
var inputPin3 = bone.P8_39;
var inputPin4 = bone.P8_40;
var inputPin5 = bone.P8_41;
var inputPin6 = bone.P8_42;
var inputPin7 = bone.P8_43;
var inputPin8 = bone.P8_44;

setup = function() {
    pinMode(inputPin1, INPUT);
    pinMode(inputPin2, INPUT);
    pinMode(inputPin3, INPUT);
    pinMode(inputPin4, INPUT);
    pinMode(inputPin5, INPUT);
    pinMode(inputPin6, INPUT);
    pinMode(inputPin7, INPUT);
    pinMode(inputPin8, INPUT);
    
    attachInterrupt(inputPin1, CHANGE, function(pin, value) {
        updateStates(3);
    });
    attachInterrupt(inputPin2, CHANGE, function(pin, value) {
       updateStates(12);
    });
    attachInterrupt(inputPin3, CHANGE, function(pin, value) {
        updateStates(48);
    });
    attachInterrupt(inputPin4, CHANGE, function(pin, value) {
        updateStates(192);
    });
    
    
    attachInterrupt(inputPin5, CHANGE, function(pin, value) {
      updateStates(3072);
    });
    
    attachInterrupt(inputPin6, CHANGE, function(pin, value) {
       updateStates(12288);
    });
    attachInterrupt(inputPin7, CHANGE, function(pin, value) {
       updateStates(49152);
    });
    attachInterrupt(inputPin8, CHANGE, function(pin, value) {
        updateStates(196608);
    });
    
    
    console.log('ready');
};

loop = function() {
     
};

bb.run();
