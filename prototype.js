var myObject = function( name ) {
	this.name = name;
	return this;
};
 
console.log(typeof myObject.prototype); // object
console.log(myObject.prototype);
console.log(myObject.length);
 
myObject.prototype.getName = function() {
	return this.name;
};

var o1 = {};
var o2 =new Object();

function f1(){}
var f2 = function(){}
var f3 = new Function('str','console.log(str)');

f3('aabb');   // aabb
console.log('typeof Object:'+typeof Object);            //function
console.log('typeof Function:'+typeof Function);        //function
console.log('typeof o1:'+typeof o1);   //object
console.log('typeof o2:'+typeof o2);   //object
console.log('typeof f1:'+typeof f1);   //function
console.log('typeof f2:'+typeof f2);   //function
console.log('typeof f3:'+typeof f3);   //function