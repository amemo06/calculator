// all core behaviors of calculator

"use strict";
//var lib = "com.sapui.calculator".
//com.sapui.initStructure("com.sapui.calculator",4);
	$.initStructure("com.sapui.calculator",4);
/*
//var com = {}; // declare object 
// com = com || {}; //simple way still safe
window["com"]  = window["com"] || {} // reuse the com object or create it

com["sapui"] = com["sapui"] || {}; // reuse the com object or create it
//com["sapui"] = {}; // declare object
*/
//com.sapui.calculator = com.sapui.calculator  || {v:2};

var calc = com.sapui.calculator;
//calc.v=2;
calc.screen = 0;
var mem = calc.mem = {};
mem.history = {
    pv2: 0,
    pv1: 0,
    v: 0
}
mem.mplus = function(valueToSave) {
    this.pv2 = this.pv1
    this.pv1 = this.v
    this.v += valueToSave
}
;
mem.mminus = function(valueToTakeOFF) {
    this.pv2 = this.pv1
    this.pv1 = this.v
    this.v -= valueToTakeOFF
}
;
mem.memshow = function() {
    calc.screen = this.v;
}
;
calc.clear = function() {
    this.screen = 0;
}

var op = calc.op = {};
op.operator = "";
op.n1 = 0;
op.n2 = 0;

var ops = calc.ops={};
//ops.n1 = 0;
//ops.n2 = 0;
//ops.operator = "";

ops.generic = function() {
//    ops[this.operator](this.n1, this.n2);
  calc.screen = ops[this.operator](this.n1, this.n2);
}


ops.multi = function(v1, v2) {
    return v1 * v2
}
ops.divid = function(v1, v2) {
    return v1 / v2
}
ops.add = function(v1, v2) {
    return v1 + v2
}
ops.sub = function(v1, v2) {
    return v1 - v2
}

// Un dernier commentaire