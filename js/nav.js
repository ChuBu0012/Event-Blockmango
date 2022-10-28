window.onscroll = function() {scrollnav()};
scrollnav = () => {
    if (document.documentElement.scrollTop > 350) {
        document.getElementById('NavBar').style.cssText = 'background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.8) 100%);';
    }else if (document.documentElement.scrollTop < 350){
        document.getElementById('NavBar').style.cssText = 'background: linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(200, 200, 200, 0.1) 50%, rgba(200, 200, 200, 0.2) 100%);';
    }
    
}