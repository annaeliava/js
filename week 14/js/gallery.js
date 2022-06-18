var i = 0;
var images = [];

images[0] = '/week 14/img/gallery/gallery1.jpg';
images[1] = '/week 14/img/gallery/gallery2.jpg';
images[2] = '/week 14/img/gallery/gallery3.jpg';
images[3] = '/week 14/img/gallery/gallery4.jpg';
images[4] = '/week 14/img/gallery/gallery5.jpg';
images[5] = '/week 14/img/gallery/gallery6.jpg'


function prev() { 
    document.getElementById('currentImg').src = images[i];
    if (i < images.length) {
        i++;
    } else {
        i=0;
    }
} 

function next() {
    document.getElementById('currentImg').src = images[i];
    if (i < images.length - 1) {
        i++;
    }else {
        i=0;
    }
}

