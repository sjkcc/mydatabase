var as1=document.querySelectorAll(".list-group>li:first-child>a");
for(var a1 of as1){
    a1.onclick=function(){
        var a1=this;
        var i=a1.innerHTML.slice(0,-1);
        console.log(i);
        a1.innerHTML=`${++i}+`;
    }
}
var as2=document.querySelectorAll(".list-group>li:last-child>a");
for(var a2 of as2){
    (function(){
        var i=a2.innerHTML;
        a2.onclick=function(){
            var a2=this;
            a2.innerHTML=`${i++}`;
        } 
    })()
}

