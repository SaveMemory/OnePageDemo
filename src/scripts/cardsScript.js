let webPlus = document.querySelector('#webPlus');
let cmsPlus = document.querySelector('#cmsPlus');
let servicePlus = document.querySelector('#servicePlus');

webPlus.addEventListener('click', function(){
   showContent(1)
});

cmsPlus.addEventListener('click', function(){
    showContent(2)
});

servicePlus.addEventListener('click', function(){
    showContent(3)
});

function showContent(cardNumber) {
    switch(cardNumber)
    {
        case 1:
            webPlus.style.display = 'none';
            document.querySelector('#webContent').style.display = 'inline';
            document.querySelector('#webContent').style.position = 'absolute';
            break;
        case 2:
            cmsPlus.style.display = 'none';
            document.querySelector('#cmsContent').style.display = 'inline';
            document.querySelector('#cmsContent').style.position = 'absolute';
            break;
        case 3:
            servicePlus.style.display = 'none';
            document.querySelector('#serviceContent').style.display = 'inline';
            document.querySelector('#serviceContent').style.position = 'absolute';
            break;
    }
}