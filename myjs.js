
// $(function() {
//   $(".repeat").on('click', function(e) {
//         var c = $('.we-group').clone();
//     c.removeClass('we-group').css('display','block');
//     $("#main-form").append(c);
//   });
// });
// $(function() {
//   $(".repeat2").on('click', function(e) {
//         var c = $('.pr-group').clone();
//     c.removeClass('pr-group').css('display','block');
//     $("#main-form2").append(c);
//   });
// });






function generateCV(){


  let nameField=document.getElementById("nameField").value;
  let nameT1=document.getElementById("nameT1");
  let nameT2=document.getElementById("nameT2");
  nameT1.innerHTML=nameField;
  nameT2.innerHTML=nameField;
  document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
  document.getElementById("emailT").innerHTML=document.getElementById("emailField").value;
  if(document.getElementById("objectiveField").value.trim() !=""){
  document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;}
    document.getElementById("linkedinT").setAttribute("href",document.getElementById("LinkedInField").value);
    document.getElementById("githubT").setAttribute("href",document.getElementById("githubField").value);
    document.getElementById("portfolioT").setAttribute("href",document.getElementById("portfolioField").value);

    const skillsField=document.getElementById("skillsField").value.split(",");
    let str="";
    for(var i=0;i<skillsField.length;i++){
      str=str+skillsField[i]+`<br><hr>`;
     }
     document.getElementById("skillsT").innerHTML=str;
document.getElementById("clgNameT").innerHTML=document.getElementById("clgNameField").value;
document.getElementById("degreeT").innerHTML=document.getElementById("degreeField").value;
document.getElementById("yearT").innerHTML=document.getElementById("clgYearField").value;
document.getElementById("cgpaT").innerHTML=document.getElementById("cgpaField").value;


document.getElementById("schoolnameT").innerHTML=document.getElementById("schoolNameFieldHsc").value;
document.getElementById("sscyearT").innerHTML=document.getElementById("SscYearField").value;
document.getElementById("ssccgpaT").innerHTML=document.getElementById("ssccgpaField").value;

document.getElementById("schoolnamesscT").innerHTML=document.getElementById("schoolNameFieldSSc").value;
document.getElementById("hscyearT").innerHTML=document.getElementById("HscYearField").value;
document.getElementById("hsccgpaT").innerHTML=document.getElementById("HscperField").value;


document.getElementById("cmpnameT").innerHTML=document.getElementById("cmpnameField").value;
document.getElementById("durationT").innerHTML=document.getElementById("durationField").value;
document.getElementById("descT").innerHTML=document.getElementById("descField").value;

document.getElementById("prT").innerHTML=document.getElementById("pTitleField").value;
document.getElementById("prlinkT").setAttribute("href",document.getElementById("pLinkField").value);
document.getElementById("prdescT").innerHTML=document.getElementById("pdescField").value;

//code for setting image
let file=document.getElementById("imgField").files[0];
if(file!=null){
let reader=new FileReader();
reader.readAsDataURL(file);

//set image to Template
reader.onloadend = function(){
  document.getElementById("imgTemplate").src= reader.result;
}
}


document.getElementById("cv-form").style.display='none';
document.getElementById("cv-template").style.display='block';
}





function printCV(){
  const element=document.getElementById("download");
  html2pdf().from(element).save();
}
