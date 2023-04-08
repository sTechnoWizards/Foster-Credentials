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


function addEX() {

    let newNode = document.createElement('textarea');
    newNode.classList.add("ex");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("cols",65);
    newNode.setAttribute("placeholder","Enter here");

    let exOb=document.getElementById("exb");
    let exfOb=document.getElementById("exf");

    exfOb.insertBefore(newNode,exOb);
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

// function addL() {
//
//     let newNode = document.createElement('textarea');
//     newNode.classList.add("lang");
//     newNode.setAttribute("rows",3);
//     newNode.setAttribute("cols",65);
//     newNode.setAttribute("placeholder","Enter here");
//
//     let lOb=document.getElementById("lb");
//     let lfOb=document.getElementById("lf");
//
//     lfOb.insertBefore(newNode,lOb);
// }


function addBU() {

    let newNode = document.createElement('textarea');
    newNode.classList.add("bu");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("cols",65);
    newNode.setAttribute("placeholder","Enter here");

    let bOb=document.getElementById("bub");
    let bfOb=document.getElementById("buf");

    bfOb.insertBefore(newNode,bOb);
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

function addYP() {

    let newNode = document.createElement('textarea');
    newNode.classList.add("yp");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("cols",65);
    newNode.setAttribute("placeholder","Enter here");

    let yOb=document.getElementById("ypb");
    let yfOb=document.getElementById("ypf");

    yfOb.insertBefore(newNode,yOb);
}

function addPER() {

    let newNode = document.createElement('textarea');
    newNode.classList.add("per");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("cols",65);
    newNode.setAttribute("placeholder","Enter here");

    let perOb=document.getElementById("perb");
    let perfOb=document.getElementById("perf");

    perfOb.insertBefore(newNode,perOb);
}

function addH() {

    let newNode = document.createElement('textarea');
    newNode.classList.add("hob");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("cols",65);
    newNode.setAttribute("placeholder","Enter here");

    let hOb=document.getElementById("hb");
    let hfOb=document.getElementById("hf");

    hfOb.insertBefore(newNode,hOb);
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

document.getElementById('imgf').addEventListener("change",function (){
  const reader = new FileReader();


  reader.addEventListener("load", () =>{
    localStorage.setItem('img',reader.result);

  });
  reader.readAsDataURL(this.files[0]);
});

document.getElementById('imgs').addEventListener("change",function (){
  const reader = new FileReader();


  reader.addEventListener("load", () =>{
    localStorage.setItem('img1',reader.result);

  });
  reader.readAsDataURL(this.files[0]);
});



function genbio(){
  localStorage.setItem('name',document.getElementById('name').value);
  localStorage.setItem('fname',document.getElementById('fname').value);

  localStorage.setItem('age',document.getElementById('age').value);
  localStorage.setItem('dob',document.getElementById('dob').value);
  localStorage.setItem('gender',document.getElementById('gender').value);
  // // img
  // imgd = document.getElementById('imgf');
  // imgData = getBase64Image(imgd);
  // localStorage.setItem("imgData", imgData);


  //img



  //contact
  localStorage.setItem('add',document.getElementById('add').value);
  localStorage.setItem('phone',document.getElementById('phone').value);
  localStorage.setItem('myem',document.getElementById('myem').value);


  localStorage.setItem('nation',document.getElementById('nation').value);
  localStorage.setItem('status',document.getElementById('status').value);
  localStorage.setItem('religion',document.getElementById('religion').value);


  localStorage.setItem('dec',document.getElementById('dec').value);
  localStorage.setItem('date',document.getElementById('date').value);
  localStorage.setItem('place',document.getElementById('place').value);
  localStorage.setItem('lang',document.getElementById('lang').value);

  //work
  let w=document.getElementsByClassName("we");

  let str1="";

  for(let e of w){
    str1=str1+`<li> ${e.value} </li>`;
  }

  localStorage.setItem('we',str1);

  //Education
  let ed=document.getElementsByClassName("ex");

  let str2="";

  for(let e of ed){
    str2=str2+`<li> ${e.value} </li>`;
  }

  localStorage.setItem('ex',str2);


  //Skills
  let sk=document.getElementsByClassName("skill");

  let str3="";

  for(let e of sk){
    str3=str3+`<li> ${e.value} </li>`;
  }

  localStorage.setItem('skill',str3);


  //Hobbies
  let h=document.getElementsByClassName("hob");

  let str4="";

  for(let e of h){
    str4=str4+`<li> ${e.value} </li>`;
  }

  localStorage.setItem('hob',str4);

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

  // //Languages
  // let la=document.getElementsByClassName("lang");
  //
  // let str7="";
  //
  // for(let e of la){
  //   str7=str7+`<li> ${e.value} </li>`;
  // }
  //
  // localStorage.setItem('lang',str7);

  //Percentage
  let p=document.getElementsByClassName("per");

  let str8="";

  for(let e of p){
    str8=str8+`<li> ${e.value} </li>`;
  }

  localStorage.setItem('per',str8);

  //YearOfPassing
  let y=document.getElementsByClassName("yp");

  let str9="";

  for(let e of y){
    str9=str9+`<li> ${e.value} </li>`;
  }

  localStorage.setItem('yp',str9);


  //Board
  let bd=document.getElementsByClassName("bu");

  let str10="";

  for(let e of bd){
    str10=str10+`<li> ${e.value} </li>`;
  }

  localStorage.setItem('bu',str10);
}
