var post = document.getElementById('newletter');
var createform = document.createElement('form');

var input1 = document.createElement('input');
input1.id = 'email';
input1.type = 'email';
input1.placeholder = 'example@gmail.com';


var buttion1 = document.createElement('button');
buttion1.id = 'subscribe';
buttion1.value = 'SUBSCRIBE';

var text1 = document.createTextNode('SUBSCRIBE');



buttion1.appendChild(text1);
createform.appendChild(input1);
createform.appendChild(buttion1);
post.appendChild(createform);
