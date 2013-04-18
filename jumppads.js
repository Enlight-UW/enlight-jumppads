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
var apiTarget = "http://192.168.1.101/Clean2/enlight-webfront/php/act.php";

//This will keep us from going over 3 seconds without activity before reset
//var padLock;


/**
 * Pass an integer representation of which valves are active as a parameter, and
 * this function will take care of calling the appropriate API handler locally.
 */
function activate(valves) {
  //  clearTimeout(padLock);
    
    ajaxState(valves);
    
  //  padLock = setTimeout(resetValves, 3000);
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
            request: "toggleValveState",
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
//
//The philosophy of these buttons is that, while a user is standing on them,
//keep those valves active. Once the button is no longer being pressed, turn off
//the valves. We'll accomplish this by just doing a toggle for the valves that
//are specified, and we should be fine - just call the corresponding method
//whenever the state of a button changes, and things should stay in snyc. If not
//then reset the beaglebone or something.
//
//Specify a pattern by using integer representation. We have 24 valves total,
//and the ordering in an integer is aligned to the LSB - see the Webfront code
//for more information about this order.
//------------------------------------------------------------------------------
function doPad1_1() {
    activate(3);
}

function doPad1_2() {
    activate(12);
}

function doPad1_3() {
    activate(48);
}

function doPad1_4() {
    activate(192);
}

function doPad2_1() {
    activate(786432);
}

function doPad2_2() {
    activate(12288);
}

function doPad2_3() {
    activate(49152);
}

function doPad2_4() {
    activate(196608);   
}