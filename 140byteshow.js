s=0;d=document;l=d.querySelectorAll("g").length;onkeyup=function(e){d.documentElement.className="s"+(e.keyCode>38?s<l-1?++s:l-1:s>0?--s:0)}