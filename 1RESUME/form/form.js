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



function genresume(){
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
  localStorage.setItem('wem',document.getElementById('wem').value);


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




}
