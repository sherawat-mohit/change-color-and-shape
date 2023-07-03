var changeshape = document.getElementById("change-shape");
var changecolor = document.getElementById("change-color");
var diagram = document.getElementById("diagram");
var shape = document.getElementById("shape");

var shapearr = ['width: 0;height: 0;border-bottom: 100px solid white;border-right: 100px solid transparent;', 'width: 0;height: 0;border-bottom: 100px solid white;border-left: 100px solid transparent;','border-bottom: 100px solid white;border-left: 25px solid transparent;border-right: 25px solid transparent;height: 0;width: 100px;','width: 150px;height: 60px;transform: skew(20deg);background: white;',
'width: 0px;height: 0px;border-right: 60px solid transparent;border-top: 60px solid white;border-left: 60px solid white;border-bottom: 60px solid white;border-top-left-radius: 60px;border-top-right-radius: 60px;border-bottom-left-radius: 60px;border-bottom-right-radius: 60px;','width: 100px;height: 100px;background: white;']

var colorarr = ['white','blue','black','red','yellow','black','purple'];

colorcount = 0;
shapecount = 0;
// console.log(colorarr) 
// console.log(shapearr) 

changeshape.addEventListener('click',function(){
    if(shapecount>=shapearr.length){
        shapecount = 0;
    }
    shapecount++;
    shape.style.cssText = shapearr[shapecount];
});


changecolor.addEventListener('click',function(){
    if(colorcount>=colorarr.length){
        colorcount = 0;
    }
    // console.log(colorcount)
    colorcount++;
    diagram.style.backgroundColor = colorarr[colorcount];
});