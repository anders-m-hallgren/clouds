console.log('start transition');
var iphone= document.getElementById('iphone');
var imac= document.getElementById('imac');
var ipad= document.getElementById('ipad');
var header= document.getElementById('header');

var content1= document.getElementById('content1-msg');

var nav= document.getElementById('nav');
var home= document.getElementById('home');
var search= document.getElementById('search');
var cloud= document.getElementById('cloud');
var user= document.getElementById('user');

var flyin=document.getElementsByClassName('fly-in');
//var navbarheight = navbar[0].offsetHeight;
console.log(flyin);

console.log("window.innerWidth=" + window.innerWidth);
var position=(window.innerWidth - imac.width)/2;
console.log('imac position=' + position);
imac.style.left = position+'px';
/*
home.style.webkitAnimationName = 'moveE'; 
        home.style.webkitAnimationDuration = '3s';
        home.style.webkitAnimationTimingFunction='ease';
        home.style.webkitAnimationFillMode='forwards';
        home.style.webkitAnimationDelay='1s';
*/


function initScroll(){
    /*switch(expression) {
    case n:
        code block
        break;
    case n:
        code block
        break;
    default:
        default code block
    }*/
    
    
   if(window.pageYOffset > 490 & window.pageYOffset < 600) {
        console.log('>490&<600 ' + window.pageYOffset);
        console.log('position=' + content1.style.position);
        //header.style.height="80px";
        //header.style.fontSize="25px"
content1.style.position='fixed';
content1.style.top='6rem';
// content1.style.textAlign='center';
// content1.style.width=600;
// content1.style.marginRight=0;
    /*overflow: inherit;*/
        //home.style.left='200px';
        //    home.style.bottom='-100px';
        //content1.style.top='65px';
        //navClass.style.position='relative';
        //nav.style.webkitAnimationPlayState = "running";
        

        //search.style.webkitAnimationName = 'moveSearch';
        
        
        //home.style.webkitAnimationPlayState = "running";
    } else if((window.pageYOffset > 320 && window.pageYOffset < 600) || window.pageYOffset > 1050){
        console.log('>320&<600 ' + window.pageYOffset);
        header.style.height="80px";
        // header.style.fontSize="15px";
        //flyin.style.fontSize="10px";
        
        nav.style.webkitAnimationName = 'rotate-reverse';
        nav.style.webkitAnimationDuration = '2s';
        nav.style.webkitAnimationIterationCount='1';
        nav.style.webkitAnimationFillMode='forwards';


home.style.webkitAnimationName = 'moveHome';
        home.style.webkitAnimationDuration = '2s';
        home.style.webkitAnimationFillMode='forwards';


search.style.webkitAnimationName = 'moveSearch';
        search.style.webkitAnimationDuration = '2s';
        search.style.webkitAnimationFillMode='forwards';

cloud.style.webkitAnimationName = 'moveUp';
        cloud.style.webkitAnimationDuration = '2s';
        cloud.style.webkitAnimationFillMode='forwards';

user.style.webkitAnimationName = 'moveUp';
        user.style.webkitAnimationDuration = '2s';
        user.style.webkitAnimationFillMode='forwards';
        
    
    } else if(window.pageYOffset >= 600){
        console.log('>600 ' + window.pageYOffset);
        iphone.style.left="250px";
        ipad.style.right="140px";
        //content1.style.position='fixed';
        //header.style.height="60px";
        //header.style.fontSize="25px"
        nav.style.webkitAnimationPlayState = 'paused';
    } else {
        console.log('else ' + window.pageYOffset);
        /*
        header.style.height="120px";
        header.style.fontSize="60px"
        header.style.backgroundColor='#354458';
        header.innerText='Clouds.se';
        content1.style.position='relative';
        */
    }
}

window.addEventListener("scroll",initScroll);