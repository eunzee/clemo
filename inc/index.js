var slideNo = 0;    

function slide(x) {
    slideNo += x;   

    if(slideNo>2) slideNo=0;
    if(slideNo<0) slideNo=2;
    
    var newX = slideNo * -100;
    document.getElementById('slideBox').style.marginLeft=newX+'%';
}



//모바일 메뉴
function menuOn(){
    document.getElementById('menu').style.display='block';
}
















