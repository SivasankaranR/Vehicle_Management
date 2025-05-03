
function visibleSearchBar(){
    const searchBar = document.querySelector('.searchInput');
    if(searchBar.offsetTop == '12'){
        searchBar.classList.remove('slideUpAnimation')
        searchBar.classList.add('slideDownAnimation')
        searchBar.focus();
    }else{
        searchBar.classList.remove('slideDownAnimation')
        searchBar.classList.add('slideUpAnimation')
    }
}
function darkMode(element){
    if(element.className == 'fa-solid fa-sun'){
        element.className = 'fa-solid fa-moon'
    }else{
        element.className = 'fa-solid fa-sun'
    }
}
// setInterval(showIndicator,5000)
function showIndicator(){
    const indicator = document.querySelector('.indicatorLights')
    if(indicator.className == 'indicatorLights'){
        indicator.classList.add('indicatorLightsEffect')
    }else{
        indicator.classList.remove('indicatorLightsEffect')
    }
}
function changeColor(event){
    var colors = document.querySelectorAll('.color')
    colors.forEach(element => {
        element.style.scale = '1.0';
    });
    event.target.style.scale = '1.1';
    if(event.target.classList.contains('color')){
        var carBodyImgName = './' + event.target.title + '.png'
        var carBody = document.querySelector('.carBody');
        carBody.src = carBodyImgName;
        console.log
    }
}
function carColor(){
    
}
function showControls(event){
    var features = document.querySelector('.features')
    var img = document.querySelector('.paintBucket');
    var color = document.querySelector('.colors');
    var colors = document.querySelectorAll('.color')
    if(event.target.textContent == 'Start'){
        features.classList.add('featureAnimation');
        var light = document.querySelector('.igLight');
        light.style.backgroundColor = "#36A41D";
        addFocus;
        var addFocus = setTimeout((()=>{
            event.target.textContent = 'Stop';
            features.classList.add('featuresFocus');
        }),1000);
    }
    if(event.target.textContent == 'Stop'){
        features.classList.remove('featureAnimation');
        var light = document.querySelector('.igLight');
        light.style.backgroundColor = "orangered";
        features.classList.remove('featuresFocus');    
        addFocus;
        var addFocus = setTimeout((()=>{
            event.target.textContent = 'Start';
        }),500);
    }
    if(event.target.classList.contains('paintBucket')){
        if(event.target.classList.contains('paintFocus')){
            event.target.classList.remove('paintFocus');
            var imgSrc = './Controls/' + img.title + ' ' + 'white.png';
            img.src = imgSrc;
            color.style.scale = '0';
        }else{
            event.target.classList.add('paintFocus');
            var imgSrc = './Controls/' + img.title + ' ' + 'black.png';
            img.src = imgSrc;
            color.style.scale = '1';
        }
    }
}