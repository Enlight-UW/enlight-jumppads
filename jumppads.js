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
    clearTimeout(padLock);
    
    ajaxState(valves);
    
    padLock = setTimeout(resetValves, 3000);
}

/**
 * Kill the valves back to all off.
 */
function resetValves() {
    ajaxState(0);
}

function ajaxState(statez) {
    $.ajax(
    {
        type: "POST",
        url:apiTarget,
        data: {
            request: "setValveState",
            STATE: statez
        }
    }).done(function(msg) {
        var obj = $.parseJSON(msg);

        //Check if we need to redirect to an error page.
        if (!obj.success) {
            alert("Failure detected");
        }
    });
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
    activate(1);
}

function doPad1_2() {
    activate(2);
}

function doPad1_3() {
    activate(4);
}

function doPad1_4() {
    activate(8);
}

function doPad2_1() {
    activate(256);
}

function doPad2_2() {
    activate(512);
}

function doPad2_3() {
    activate(1024);
}

function doPad2_4() {
    activate(2048);   
}