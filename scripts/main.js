var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';

var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';

var ESC_KEY = 27;
var TINY_EFFECT_CLASS = 'is_tiny';


function setDetails(imgUrl,titleText){
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.src = imgUrl;
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;

}
function imageFromThumb(thumbnail){

    'use strict';
    var result = thumbnail.getAttribute('data-image-url');
    return result;
}
function titleFromThumb(thumbnail){
    'use strict';
    var result = thumbnail.getAttribute('data-image-title');
    return result;
}
function setDetailsFromThumb(thumbnail){
    'use strict';
    setDetails(imageFromThumb(thumbnail),titleFromThumb(thumbnail));

}
function addThumbClickHandler(thumb){
    //debugger;
    'use strict';
    thumb.addEventListener('click',(event)=>{
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function hideDetails(){
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}
function showDetails(){
    'use strict';
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function(){
        frame.classList.remove(TINY_EFFECT_CLASS);
    },50);
    

}
function addKeyPressHandler(){
    'use strict';
    document.body.addEventListener('keyup',(envent)=>{
        event.preventDefault();
        console.log(event.keyCode);
        if(event.keyCode===ESC_KEY){
            hideDetails();
        }
    })
}

function initEvents(){
    //debugger;
    var elements = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var elementsArray = [].slice.call(elements);
    
    elementsArray.forEach(addThumbClickHandler);
    //

    addKeyPressHandler();
}
initEvents();

