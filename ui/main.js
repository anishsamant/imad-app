console.log('Loaded!');

var element=document.getElementById('main-text');
element.innerHTML="NEW VALUE";

var img=document.getElementById('madi');
img.onClick=function(){
    img.style.marginLeft="200px";
};