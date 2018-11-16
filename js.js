/*GLOBAL VARIABLES*/
var formularArray=["h","e","s"];
/*GLOBAL VARIABLES*/





/*When user switch from Administrator to Formular*/
var tabs= document.getElementsByClassName("tab");
var admin = document.getElementById("admin");
var formular = document.getElementById("formular");
for(var i=0;i<tabs.length;i++)
{

  tabs[i].addEventListener("click", function(){
    if(this.previousElementSibling==null){

      this.nextElementSibling.classList.remove("active");
      if(document.getElementsByClassName("oneRow").length>=1)
      {
        document.getElementsByClassName("save")[0].classList.remove("hidden");

      }
    }
    else{
      this.previousElementSibling.classList.remove("active");
      document.getElementsByClassName("save")[0].classList.add("hidden");
    }
    this.classList.add("active");
 if(this.outerText =="Formular"){
   admin.classList.add("hidden");
   formular.classList.remove("hidden");
 }
 else{
   formular.classList.add("hidden");
   admin.classList.remove("hidden");
 }
      })
}
/*When user switch from Administrator to Formular*/





/*If nothing matches to users search*/

function searchFun(e){
  if(formularArray.includes(e.previousElementSibling.value)==0){
    document.getElementsByClassName("notFind")[0].style.display="block";
        e.previousElementSibling.value="";
    e.previousElementSibling.placeholder="Some non existing formular";
    document.getElementsByClassName("save")[0].classList.remove("hidden");
  }
}
/*If nothing matches to users search*/




/*ADD MORE ROWS */
function addElements(){
  var howMany=document.getElementsByClassName("oneRow");
  if(howMany.length>10){
    alert("Sorry, You are allowed to add  10 of these.");
    return 0;
  }
  var form=document.getElementById("formNotFind");
  var rowS=" <div class='oneRow'>"+
     "<label for='searchField'>"+"Element"+(howMany.length+1)+"</label>"+
    "<input type='text' name='nonFoundInput' value='' placeholder='label'>"+
      "<select class='options' id='inputTypes' name='"+howMany.length+"' onclick='inputTypesAll(this)''>"+
        "<option class='types' value='TextBox'>"+"TextBox"+"</option>"
        +"<option class='types' value='RadioButton'>"+"RadioButton"+"</option>"+
        "<option class='types' value='CheckBox'>"+"CheckBox"+"</option>"+
      "</select>"+
      "<select class='hidden ifRadioSelected' name='"+howMany.length+"' style='width:40px;' onclick='addLabelsForRadio(this);'>"+
        "<option value='0'>"+0+"</option>"+
        "<option value='1'>"+1+"</option>"+
        "<option value='2'>"+2+"</option>"+
        "<option value='3'>"+3+"</option>"+
      "</select>"+
      "<select class='mandatory' name='' >"+
        "<option value='mandatory'>"+"Mandatory"+"</option>"+
        "<option value='number'>"+"Number"+"</option>"+
        "<option value='E-mail'>"+"E-mail"+"</option>"+
        "<option value='Text'>"+"Text"+"</option>"+
        "<option value='None'>"+"None"+"</option>"+
      "</select>"+
      "<span type='button' name='button' onClick='addElements()''>"+"<b>"+"+"+"</b>"+"</span>"+
      "<div  id='insertRadioLabel"+howMany.length+"' class='styleRowButtonRadio'>"+"</div>"+
   "</div>";

  var newElement=document.createElement("div");
  form.appendChild(newElement);
  newElement.innerHTML=rowS;
}
/*ADD MORE ROWS */




/*PICKING TYPES OF INPUTS*/
var s=0;
var g=0;

var radioLabels=document.createElement("input");
radioLabels.placeholder="Radio button label";
radioLabels.setAttribute("class", "radioLabels");
var inputType=document.getElementById("inputTypes");
var numberOfLabelsForRadio=document.getElementsByClassName("ifRadioSelected");

  function inputTypesAll(a){
    if(s%2==1){
      if(a.value=="RadioButton" || a.value=="CheckBox"){
        numberOfLabelsForRadio[a.name].classList.remove("hidden");
      }
      else{
        numberOfLabelsForRadio[a.name].classList.add("hidden");

      }
    }
    s++;
  }

function addLabelsForRadio(a){
  console.dir(a);
      if(g%2==1 && document.getElementById("insertRadioLabel"+[a.name]).childElementCount<=3 )
      {
        if(a.value==0 )
        {
          document.getElementById("insertRadioLabel"+[a.name]).innerHTML="";
        }
        else if(a.value==1 )
        {
          document.getElementById("insertRadioLabel"+[a.name]).innerHTML="<input class='radioLabels' placeholder='Radio Label'/>";

        }
        else if(a.value==2)
        {

          document.getElementById("insertRadioLabel"+[a.name]).innerHTML="<input class='radioLabels' placeholder='Radio Label'/><input class='radioLabels' placeholder='Radio Label'/>";
        }
        else{
          document.getElementById("insertRadioLabel"+[a.name]).innerHTML="<input class='radioLabels' placeholder='Radio Label'>"+"<input class='radioLabels' placeholder='Radio Label'>"+"<input class='radioLabels' placeholder='Radio Label'>";
        }
      }

      g++;
}


/*PICKING TYPES OF INPUTS*/



/*SAVING FORM*/
document.getElementsByClassName("save")[0].addEventListener("click", function(){
  var s=prompt("Save Formular: ");
  var option=document.createElement("option");
  var text=document.createElement("nodeText");
  text.innerHTML=s;
  option.appendChild(text);
  document.getElementById("existingFormulars").prepend(option);
  document.getElementsByClassName("tab")[0].classList.remove("active");
  document.getElementsByClassName("tab")[1].classList.add("active");
  admin.classList.add("hidden");
  formular.classList.remove("hidden");
  this.classList.add("hidden");

  /*FORM ORDER*/
var allOptions=document.getElementsByClassName("oneRow");
var allLables=document.getElementsByClassName("radioLabels");
var newElement=document.createElement("div");
var newRadioLabel="";
var newCheckBoxLabel="";
var newInputElement=document.createElement("input");
var formularOneRow=document.getElementsByClassName("formularOneRow");
var arrOfOptions={};
var arrRadioButton=[];
var arrCheckBoxButton=[];
var arrTextBox=[];
for(var i=0;i<allOptions.length;i++)
{
  arrOfOptions[i]=new Object();
  if(allOptions[i].children[2].value=="RadioButton")
  {
    arrRadioButton.push(allOptions[i].children[2].value, allOptions[i].children[3].value,allOptions[i].children[4].value);
    for(var s=0;s<allOptions[i].children[6].children.length;s++)
    {
      arrRadioButton.push(allOptions[i].children[6].children[s].value);
    }
  arrOfOptions[i]=arrRadioButton;
  arrRadioButton=[];
}
else if(allOptions[i].children[2].value=="CheckBox")
{
  arrCheckBoxButton.push(allOptions[i].children[2].value, allOptions[i].children[3].value,allOptions[i].children[4].value )
  for(var j=0;j<allOptions[i].children[6].children.length;j++)
  {
    arrCheckBoxButton.push(allOptions[i].children[6].children[j].value);
  }
  arrOfOptions[i]=arrCheckBoxButton;
arrCheckBoxButton=[];
}
else{
  arrTextBox.push(allOptions[i].children[2].value,allOptions[i].children[4].value);
  arrOfOptions[i]=arrTextBox;
}
}
Object.keys(arrOfOptions).forEach(function(key) {

if(arrOfOptions[key][0]=="TextBox")
{
  arrOfOptions[key].forEach(function(element) {
    if(element=="mandatory")
    {
      newElement="";
      newElement="<div class='block'><label>"+"label "+key+"*"+"</label><input class='oneRow' type='text'/></div>";
    }
    else{
      newElement="<label>"+"label "+key+" :"+"</label><input class='oneRow' type='text'/>";
    }

});
console.log(newElement);
formular.innerHTML+=newElement;
}
else if(arrOfOptions[key][0]=="RadioButton")
{
  for(var i=0;i<arrOfOptions[key][1];i++)
  {
    newRadioLabel+="<div class='block' style='margin-left: 120px; margin-top: -24px;'><input type='radio' class='oneRow' style='display:inline-block; float:left;' name='radio' value='"+arrOfOptions[key][3+i]+"'/><label style='margin-top:-8px; display:inline-block;'>"+arrOfOptions[key][3+i]+"</label></div>";

      arrOfOptions[key].forEach(function(element) {
    if(element=="mandatory")
    {
      newElement="<div style='clear:both;'><label>"+"label "+key+": *"+"</label></div>";
    }
    else{
      newElement="<div style='clear:both;'><label>"+"label "+key+" :"+"</label></div>";
    }
    });
}
formular.innerHTML+=newElement;
formular.innerHTML+=newRadioLabel;
}
else if(arrOfOptions[key][0]=="CheckBox")
{
  for(var i=0;i<arrOfOptions[key][1];i++)
  {
    newCheckBoxLabel+="<div class='block' style='margin-left: 120px; margin-top: -24px;'><input type='CheckBox' class='oneRow block style='margin-left: 120px; margin-top: -24px;' style='display:inline-block; float:left;' name='CheckBox' value='"+arrOfOptions[key][3+i]+"'/><label style='margin-top:-8px; display:inline-block;'>"+arrOfOptions[key][3+i]+"</label></div>";

      arrOfOptions[key].forEach(function(element) {
    if(element=="mandatory")
    {
      newElement="<div style='clear:both;'><label>"+"label "+key+": *"+"</label></div>";
    }
    else{
      newElement="<div style='clear:both;'><label>"+"label "+key+" :"+"</label></div>";
    }
    });
}
formular.innerHTML+=newElement;
formular.innerHTML+=newCheckBoxLabel;
}


});
  /*FORM ORDER*/
})
/*SAVING FORM*/


/*ALL OF ABOVE IS FOR ADMINISTRATOR PANEL*//*ALL OF ABOVE IS FOR ADMINISTRATOR PANEL*//*ALL OF ABOVE IS FOR ADMINISTRATOR PANEL*//*ALL OF ABOVE IS FOR ADMINISTRATOR PANEL*/
