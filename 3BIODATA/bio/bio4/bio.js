// var dataImage = localStorage.getItem('img');
// bannerImg = document.getElementById('tableBanner');
// bannerImg.src = dataImage;
// const tbody=document.querySelector("tbody");
//
//   const tv=localStorage.getItem('ex');
//   tbody.innerHTML+=`
//   <tr>
//   <td>${tv}</td>
//   </tr>
//   `;



document.getElementById('name1').innerHTML=localStorage.getItem('name');
document.getElementById('fname1').innerHTML=localStorage.getItem('fname');
document.getElementById('age1').innerHTML=localStorage.getItem('age')+"yrs";
document.getElementById('status1').innerHTML=localStorage.getItem('status');
document.getElementById('imgf1').src=localStorage.getItem('img');
document.getElementById('imgs1').src=localStorage.getItem('img1');



document.getElementById('add1').innerHTML=localStorage.getItem('add');
document.getElementById('phone1').innerHTML=localStorage.getItem('phone');
document.getElementById('dob1').innerHTML=localStorage.getItem('dob');
document.getElementById('myem1').innerHTML=localStorage.getItem('myem');


document.getElementById('gender1').innerHTML=localStorage.getItem('gender');
document.getElementById('lang1').innerHTML=localStorage.getItem('lang');
document.getElementById('religion1').innerHTML=localStorage.getItem('religion');
document.getElementById('nation1').innerHTML=localStorage.getItem('nation');



document.getElementById('we1').innerHTML=localStorage.getItem('we');

document.getElementById('ac1').innerHTML=localStorage.getItem('ac');

document.getElementById('skill1').innerHTML=localStorage.getItem('skill');
document.getElementById('ex1').innerHTML=localStorage.getItem('ex');
document.getElementById('bu1').innerHTML=localStorage.getItem('bu');
document.getElementById('in1').innerHTML=localStorage.getItem('in');
document.getElementById('yp1').innerHTML=localStorage.getItem('yp');
document.getElementById('per1').innerHTML=localStorage.getItem('per');

document.getElementById('hob1').innerHTML=localStorage.getItem('hob');

document.getElementById('dec1').innerHTML=localStorage.getItem('dec');

document.getElementById('date1').innerHTML=localStorage.getItem('date');

function tprint(){
    window.print();
}
