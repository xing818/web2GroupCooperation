    var top=document.getElementById('top');   
    var toptwo=document.getElementById('toptwo');
    var toptwoContent=document.getElementById('toptwoContent');
    var toptwoCopy=document.getElementById('toptwoCopy');
    var b1=document.getElementById("b1");
    var b2=document.getElementById("b2");
    var b3=document.getElementById("b3");
    var z=document.getElementById("z");
    var s1=document.getElementsByClassName("s1");
    var s2=document.getElementsByClassName("s2");
    var bott=document.getElementsByClassName("bott");
    var x1=document.getElementsByClassName("x")[0];
    var x2=document.getElementsByClassName("x")[1];
    var x3=document.getElementsByClassName("x")[2];
    for(var i=0;i<bott.length;i++){
        bott[i].onmouseover=function(){
            this.children[1].style.display="inline";
        }
        bott[i].onmouseout=function(){
            this.children[1].style.display="none";
        }       
    }
    for(var i=0;i<s1.length;i++){
        s1[i].onclick=function(){
            this.style.display="none";
            this.nextElementSibling.style.display="inline";
        }
    }   
    b1.onmouseover=function(){
        b1.style.opacity=0.5;
        b1.style.borderColor="red";
        timer=setTimeout(function(){                
            x1.style.display="inline";               
        },2000)
    }
    b1.onmouseout=function(){
        b1.style.borderColor="white";
        b1.style.opacity="1.0";
        clearInterval(timer);
        x1.style.display="none";
    }
    b2.onmouseover=function(){
        b2.style.opacity=0.5;
        b2.style.borderColor="red";
        timer=setTimeout(function(){                
            x2.style.display="inline";               
        },2000)
    }
    b2.onmouseout=function(){
        b2.style.borderColor="white";
        b2.style.opacity="1.0";
        clearInterval(timer);
        x2.style.display="none";
    }
    b3.onmouseover=function(){
        b3.style.opacity=0.5;
        b3.style.borderColor="red";
        timer=setTimeout(function(){                
            x3.style.display="inline";               
        },2000)
    }
    b3.onmouseout=function(){
        b3.style.borderColor="white";
        b3.style.opacity="1.0";
        clearInterval(timer);
        x3.style.display="none";
    }
    toptwoCopy.innerHTML=toptwoContent.innerHTML;
    function move(){
        var seeWidth=toptwoContent.offsetWidth;
        if(toptwo.scrollLeft>=seeWidth){
            toptwo.scrollLeft=0;
        }
        else{
            toptwo.scrollLeft++;
        }
    }
    var run=setInterval(move,20);
