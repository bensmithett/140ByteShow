s=0;d=document.body;l=d.querySelectorAll("g").length;k=function(e){d.className="s"+(e.keyCode>38?s<l-1?++s:l-1:s>0?--s:0)};onkeyup=k;k({})