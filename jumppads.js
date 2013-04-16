/**
 * jumppads.js
 * 
 * This file will contain all the functions for the jumppads to communicate with
 * the API.
 * 
 * Because these are just function wrappers, we can use it to test the jumppad
 * code without hooking it up to the beaglebone too. 
 */

var apiKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
var apiTarget = "http://localhost/enlight-webfront/php/act.php";

//TODO: This will keep us from going over 3 seconds without activity before reset
var padLock;


/**
 * Pass an integer representation of which valves are active as a parameter, and
 * this function will take care of calling the appropriate API handler locally.
 */
function activate(valves) {
    //clearTimeout(padLock);
    //setTimeout(resetValves(), 3000);
}


//------------------------------------------------------------------------------
//The functions below should be invoked when the corresponding pad is activated.
//I think the philosophy behind these should be that a single activation of a
//pad will toggle on those valves, and to reverse it, a user must wait for X
//amount of seconds until after the last activation of a pad. That way, one can
//chain multiple pads (and turn on a bunch of valves) and then wait a few
//seconds and everything will turn off.
//
//Specify a pattern by using integer representation. We have 24 valves total,
//and the ordering in an integer is aligned to the LSB - see the Webfront code
//for more information about this order.
//------------------------------------------------------------------------------
function doPad1_1() {
    
}

function doPad1_2() {
    
}

function doPad1_3() {
    
}

function doPad1_4() {
    
}

function doPad2_1() {
    
}

function doPad2_2() {
    
}

function doPad2_3() {
    
}

function doPad2_4() {
    
}