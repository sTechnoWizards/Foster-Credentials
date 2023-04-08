function addWE() {

    let newNode = document.createElement('textarea');
    newNode.classList.add("we");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("cols",65);
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("web");
    let wefOb=document.getElementById("wef");

    wefOb.insertBefore(newNode,weOb);
}


function addAQ() {

    let newNode = document.createElement('textarea');
    newNode.classList.add("aq");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("cols",65);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb=document.getElementById("aqb");
    let aqfOb=document.getElementById("aqf");

    aqfOb.insertBefore(newNode,aqOb);
}


function addS() {

    let newNode = document.createElement('textarea');
    newNode.classList.add("skill");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("cols",65);
    newNode.setAttribute("placeholder","Enter here");

    let sOb=document.getElementById("sb");
    let sfOb=document.getElementById("sf");

    sfOb.insertBefore(newNode,sOb);
}


function addP() {

    let newNode = document.createElement('textarea');
    newNode.classList.add("proj");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("cols",65);
    newNode.setAttribute("placeholder","Enter here");

    let pOb=document.getElementById("pb");
    let pfOb=document.getElementById("pf");

    pfOb.insertBefore(newNode,pOb);
}

function addINST() {

    let newNode = document.createElement('textarea');
    newNode.classList.add("in");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("cols",65);
    newNode.setAttribute("placeholder","Enter here");

    let iOb=document.getElementById("inb");
    let ifOb=document.getElementById("inf");

    ifOb.insertBefore(newNode,iOb);
}

function addAC() {

    let newNode = document.createElement('textarea');
    newNode.classList.add("ac");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("cols",65);
    newNode.setAttribute("placeholder","Enter here");

    let acOb=document.getElementById("acb");
    let acfOb=document.getElementById("acf");

    acfOb.insertBefore(newNode,acOb);
}

// function addACT() {
//
//     let newNode = document.createElement('textarea');
//     newNode.classList.add("skill");
//     newNode.setAttribute("rows",3);
//     newNode.setAttribute("cols",65);
//     newNode.setAttribute("placeholder","Enter here");
//
//     let actOb=document.getElementById("actb");
//     let actfOb=document.getElementById("actf");
//
//     actfOb.insertBefore(newNode,actOb);
// }

function addPUB() {

    let newNode = document.createElement('textarea');
    newNode.classList.add("pub");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("cols",65);
    newNode.setAttribute("placeholder","Enter here");

    let pubOb=document.getElementById("pubb");
    let pubfOb=document.getElementById("pubf");

    pubfOb.insertBefore(newNode,pubOb);
}

function addCON() {

    let newNode = document.createElement('textarea');
    newNode.classList.add("con");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("cols",65);
    newNode.setAttribute("placeholder","Enter here");

    let cOb=document.getElementById("cb");
    let cfOb=document.getElementById("cf");

    cfOb.insertBefore(newNode,cOb);
}

// function getBase64Image(img) {
//     var canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;
//
//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0);
//
//     var dataURL = canvas.toDataURL("image/png");
//
//     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }

// document.getElementById('imgf').addEventListener("change",function (){
//   const reader = new FileReader();
//
//
//   reader.addEventListener("load", () =>{
//     localStorage.setItem('img',reader.result);
//
//   });
//   reader.readAsDataURL(this.files[0]);
// });



function gencv(){
  localStorage.setItem('name',document.getElementById('name').value);

  // // img
  // imgd = document.getElementById('imgf');
  // imgData = getBase64Image(imgd);
  // localStorage.setItem("imgData", imgData);


  //img



  //contact
  localStorage.setItem('add',document.getElementById('add').value);
  localStorage.setItem('phone',document.getElementById('phone').value);

  localStorage.setItem('summ',document.getElementById('summ').value);

  localStorage.setItem('face',document.getElementById('face').value);
  localStorage.setItem('linkd',document.getElementById('linkd').value);
  localStorage.setItem('insta',document.getElementById('insta').value);
  localStorage.setItem('myem',document.getElementById('myem').value);
  // localStorage.setItem('wem',document.getElementById('wem').value);

  localStorage.setItem('obj',document.getElementById('obj').value);

  //work
  let w=document.getElementsByClassName("we");

  let str1="";

  for(let e of w){
    str1=str1+`<li> ${e.value} </li>`;
  }

  localStorage.setItem('we',str1);

  //Education
  let ed=document.getElementsByClassName("aq");

  let str2="";

  for(let e of ed){
    str2=str2+`<li> ${e.value} </li>`;
  }

  localStorage.setItem('aq',str2);

  //Skills
  let sk=document.getElementsByClassName("skill");

  let str3="";

  for(let e of sk){
    str3=str3+`<li> ${e.value} </li>`;
  }

  localStorage.setItem('skill',str3);


  //Project
  let pr=document.getElementsByClassName("proj");

  let str4="";

  for(let e of pr){
    str4=str4+`<li> ${e.value} </li>`;
  }

  localStorage.setItem('proj',str4);

  //institutes
  let i=document.getElementsByClassName("in");

  let str5="";

  for(let e of i){
    str5=str5+`<li> ${e.value} </li>`;
  }

  localStorage.setItem('in',str5);

  //Achievements
  let ach=document.getElementsByClassName("ac");

  let str6="";

  for(let e of ach){
    str6=str6+`<li> ${e.value} </li>`;
  }

  localStorage.setItem('ac',str6);

  //Activities
  let nact=document.getElementsByClassName("act");

  let str7="";

  for(let e of nact){
    str7=str7+`<li> ${e.value} </li>`;
  }

  localStorage.setItem('act',str7);

  //publications
  let p=document.getElementsByClassName("pub");

  let str8="";

  for(let e of p){
    str8=str8+`<li> ${e.value} </li>`;
  }

  localStorage.setItem('pub',str8);

  //Conferences
  let c=document.getElementsByClassName("con");

  let str9="";

  for(let e of c){
    str9=str9+`<li> ${e.value} </li>`;
  }

  localStorage.setItem('con',str9);


}
