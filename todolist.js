var list = function() {
         var input = document.getElementById ('input1');   
         console.log(input.value);
        };

var btn2  = document.createElement('button');
btn2.innerHTML = "버튼2";
btn2.onclick = list;
var test1 = document.getElementById('test1');
test1.appendChild(document.createElement('br'));
test1.appendChild(btn2);

