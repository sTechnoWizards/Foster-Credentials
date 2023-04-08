// var dataImage = localStorage.getItem('img');
// bannerImg = document.getElementById('tableBanner');
// bannerImg.src = dataImage;


document.getElementById('imgf1').src=localStorage.getItem('img');

document.getElementById('name1').innerHTML=localStorage.getItem('name');
document.getElementById('name2').innerHTML=localStorage.getItem('name');

document.getElementById('add1').innerHTML=localStorage.getItem('add');
document.getElementById('phone1').innerHTML=localStorage.getItem('phone');

document.getElementById('summ1').innerHTML=localStorage.getItem('summ');

document.getElementById('face1').innerHTML=localStorage.getItem('face');
document.getElementById('linkd1').innerHTML=localStorage.getItem('linkd');
document.getElementById('insta1').innerHTML=localStorage.getItem('insta');
document.getElementById('myem1').innerHTML=localStorage.getItem('myem');
document.getElementById('wem1').innerHTML=localStorage.getItem('wem');

document.getElementById('obj1').innerHTML=localStorage.getItem('obj');

document.getElementById('we1').innerHTML=localStorage.getItem('we');

document.getElementById('aq1').innerHTML=localStorage.getItem('aq');

document.getElementById('skill1').innerHTML=localStorage.getItem('skill');

document.getElementById('proj1').innerHTML=localStorage.getItem('proj');

function tprint(){
    window.print();
}
