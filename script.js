let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
function alNum(anArray){
	return Math.floor(Math.random()*anArray.length);
}
function testing(){
	
	var subject = who[alNum(who)].concat(' ');
	var verb = action[alNum(action)].concat(' ');
	var object = what[alNum(what)].concat(' ');
	var moment = when[alNum(when)];
	var sentence = subject.concat(verb, object, moment);
	document.getElementById('excuse').innerHTML=sentence;
}