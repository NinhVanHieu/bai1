document.addEventListener("DOMContentLoaded",function(){
    // var x=document.getElementsByClassName('menu');
    // console.log(x);
        var menudo=document.querySelector('.menu');
       var khoivang=document.querySelector('.chungtoi');
       var vitri=khoivang.offsetTop;
       var trangthaivang='duoi';
       var chancuoi=vitri+600;
       var load=document.querySelector('.s3');
       var vt=load.offsetTop -300;
       var tt='xuong';
    //    console.log(chancuoi);
    //    console.log(vitri);
        //  console.log(menu);
        var trangthai="duoi200";
         window.addEventListener('scroll',function(){
        //  console.log(window.pageYOffset);
        if(window.pageYOffset>100 ){
            if(trangthai=="duoi200"){
                trangthai="tren200";
                menudo.classList.add("menuden");
            }
        }
        else if(window.pageYOffset<100 ){
         if(trangthai=="tren200"){
            trangthai="duoi200";
            menudo.classList.remove("menuden");
        }
    }
       if(window.pageYOffset>651 && window.pageYOffset<chancuoi){
           if(trangthaivang="duoi"){
               trangthaivang='tren';
               khoivang.classList.add('vang');
           }
       }
      else if(window.pageYOffset<651 || window.pageYOffset>chancuoi){
        if(trangthaivang="tren"){
            trangthaivang='duoi';
            khoivang.classList.remove('vang');
        }
    }
    if(window.pageYOffset>vt){
        if(tt=='xuong'){
            tt='len';
            load.classList.add('hi');
            
        }
    }
    
     })
},false)
  
    