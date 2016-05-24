$(function(){
	 var good=$(".goods")[0];
      console.log(good);
      var three=$(".three",good)[0];
      console.log(three);
      var imgs=$("a",$(".three")[0]);
      console.log(imgs);
      var lis=$("li",three);
      console.log(lis);
      var btnl=$(".left",three)[0];
      console.log(btnl);
      var btnr=$(".right",three)[0];
      console.log(btnr);
      var widths= parseInt(getStyle(three,"width"));

      imgs[0].style.zIndex=1;
      lis[0].style.background="red";


      var index=0;
      var next=0;
      

      function moveR(){
      next++;
      if (next==imgs.length) {
        next=0;
      };
      imgs[next].style.left=-widths+"px";

      animate(imgs[index],{left:widths});
      lis[index].style.background="#eee";

      animate(imgs[next],{left:0})
      lis[next].style.background="red";
      index=next;
    }

     function moveL(){
      next--;
      if (next<0) {
        next=imgs.length-1;
      };
      imgs[next].style.left=widths+"px";

      animate(imgs[index],{left:-widths});
      lis[index].style.background="#eee";

      animate(imgs[next],{left:0})
      lis[next].style.background="red";
      index=next;
    } 


    for (var i = 0; i < lis.length; i++) {
      lis[i].a=i;
      lis[i].onclick=function(){
        if (index==this.a) {
              return;
            }
            if (this.a>index) {
              imgs[this.a].style.left=widths+"px";
             animate(imgs[index],{left:-widths});
             lis[index].style.background="#eee";
     
             animate(imgs[this.a],{left:0});
                 lis[this.a].style.background="red";
       
                 next=this.a;
                 index=next;
            }
            if (this.a<index) {
              imgs[this.a].style.left=-widths+"px";
             animate(imgs[index],{left:widths});
             lis[index].style.background="#eee";
     
             animate(imgs[this.a],{left:0});
                 lis[this.a].style.background="red";
       
                 next=this.a;
                 index=next;
            };
        
      }
     }
    


     btnl.onclick=function(){
      moveL();
     }
     btnr.onclick=function(){
      moveR();
     }
})