/*GLOBAL VARIABLES*/
var formularArray=["Some existing formular","e","s"];
var counter=1;

/*GLOBAL VARIABLES*/
var h="<div class='oneRow'>"+
"<label for='searchField'>Element1</label><input type='text' name='nonFoundInput' value='' placeholder='label'>"+
"<select class='options' name='1' onclick='inputTypesAll(this)'>"+
"<option class='types' value='TextBox'>TextBox</option>"+
"<option class='types' value='RadioButton'>RadioButton</option>"+
"<option class='types' value='CheckBox'>CheckBox</option>"+
"</select>"+
"<select class='hidden ifRadioSelected' name='1' style='width:40px;' onclick='addLabelsForRadio(this);'>"+
"<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option>"+
"<option value='3'>3</option>"+
"</select>"+
"<select class='mandatory' name=''>"+
"<option value='mandatory'>Mandatory</option>"+
"<option value='number'>Number</option>"+
"<option value='E-mail'>E-mail</option>"+
"<option value='Text'>Text</option>"+
"<option value='None'>None</option>"+
"</select>"+
"<span type='button' name='button' onclick='addElements()''><b>+</b></span>"+
"<div id='insertRadioLabel1' class='styleRowButtonRadio'></div></div>"+
"<div>"+
"<div class='oneRow'>"+
"<label for='searchField'>Element2</label><input type='text' name='nonFoundInput' value='' placeholder='label'>"+
"<select class='options' name='2' onclick='inputTypesAll(this)'>"+
"<option class='types' value='TextBox'>TextBox</option>"+
"<option class='types' value='RadioButton'>RadioButton</option>"+
"<option class='types' value='CheckBox'>CheckBox</option>"+
"</select>"+
"<select class='hidden ifRadioSelected' name='2' style='width:40px;' onclick='addLabelsForRadio(this);'>"+
"<option value='0'>0</option>"+
"<option value='1'>1</option>"+
"<option value='2'>2</option>"+
"<option value='3'>3</option>"+
"</select>"+
"<select class='mandatory' name=''>"+
"<option value='mandatory'>Mandatory</option>"+
"<option value='number'>Number</option>"+
"<option value='E-mail'>E-mail</option>"+
"<option value='Text'>Text</option>"+
"<option value='None'>None</option>"+
"</select>"+
"<span type='button' name='button' onclick='addElements()''><b>+</b></span>"+
"<div id='insertRadioLabel2' class='styleRowButtonRadio'></div></div>"+
"<div>"+
"<div class='oneRow'>"+
"<label for='searchField'>Element3</label><input type='text' name='nonFoundInput' value='' placeholder='label'>"+
"<select class='options' name='3' onclick='inputTypesAll(this)'>"+
"<option class='types' value='RadioButton'>RadioButton</option>"+
"<option class='types' value='TextBox'>TextBox</option>"+
"<option class='types' value='CheckBox'>CheckBox</option>"+
"</select>"+
"<select class='ifRadioSelected' name='3' style='width:40px;' onclick='addLabelsForRadio(this);'>"+
"<option value='3'>3</option>"+
"<option value='0'>0</option>"+
"<option value='1'>1</option>"+
"<option value='2'>2</option>"+
"</select>"+
"<select class='mandatory' name=''>"+
"<option value='mandatory'>Mandatory</option>"+
"<option value='number'>Number</option>"+
"<option value='E-mail'>E-mail</option>"+
"<option value='Text'>Text</option>"+
"<option value='None'>None</option>"+
"</select>"+
"<span type='button' name='button' onclick='addElements()''><b>+</b></span><div id='insertRadioLabel3' class='styleRowButtonRadio'>"+
"<input class='radioLabels' placeholder='Radio Label'>"+
"<input class='radioLabels' placeholder='Radio Label'>"+
"<input class='radioLabels' placeholder='Radio Label'>"+
"</div></div></div><div>";

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
        e.previousElementSibling.value="";
    e.previousElementSibling.placeholder="Some non existing formular";
    var form=document.getElementsByClassName("SearchForm")[0].innerHTML+=" <div class='oneRow'>"+
         "<label for='searchField'>"+"Element"+counter+"</label>"+
        "<input type='text' name='nonFoundInput' value='' placeholder='label'>"+
          "<select class='options'  name='"+counter+"' onclick='inputTypesAll(this)''>"+
            "<option class='types' value='TextBox'>"+"TextBox"+"</option>"
            +"<option class='types' value='RadioButton'>"+"RadioButton"+"</option>"+
            "<option class='types' value='CheckBox'>"+"CheckBox"+"</option>"+
          "</select>"+
          "<select class='hidden ifRadioSelected' name='"+counter+"' style='width:40px;' onclick='addLabelsForRadio(this);'>"+
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
          "<div  id='insertRadioLabel"+counter+"' class='styleRowButtonRadio'>"+"</div>"+
       "</div>";;

    document.getElementsByClassName("save")[0].classList.remove("hidden");
  }
  else{
    alert("Please custom your form !");
    document.getElementsByClassName("save")[0].classList.remove("hidden");
    if(e.previousElementSibling.value=="Some existing formular"){

      var form=document.getElementsByClassName("SearchForm")[0].innerHTML+=h;

        }
    else if(e.previousElementSibling.value=="s"){
      for(var i=0;i<6;i++)
      {
        h+= " <div class='oneRow'>"+
             "<label for='searchField'>"+"Element"+counter+"</label>"+
            "<input type='text' name='nonFoundInput' value='' placeholder='label'>"+
              "<select class='options'  name='"+counter+"' onclick='inputTypesAll(this)''>"+
                "<option class='types' value='TextBox'>"+"TextBox"+"</option>"
                +"<option class='types' value='RadioButton'>"+"RadioButton"+"</option>"+
                "<option class='types' value='CheckBox'>"+"CheckBox"+"</option>"+
              "</select>"+
              "<select class='hidden ifRadioSelected' name='"+counter+"' style='width:40px;' onclick='addLabelsForRadio(this);'>"+
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
              "<div  id='insertRadioLabel"+counter+"' class='styleRowButtonRadio'>"+"</div>"+
           "</div>";
        counter++;


      }      var form=document.getElementsByClassName("SearchForm")[0].innerHTML+=h;
    }
    else if(e.previousElementSibling.value=="e"){
      for(var i=0;i<2;i++)
      {
      h+=  "<div class='oneRow'>"+
           "<label for='searchField'>"+"Element"+counter+"</label>"+
          "<input type='text' name='nonFoundInput' value='' placeholder='label'>"+
            "<select class='options'  name='"+counter+"' onclick='inputTypesAll(this)''>"+
              "<option class='types' value='TextBox'>"+"TextBox"+"</option>"
              +"<option class='types' value='RadioButton'>"+"RadioButton"+"</option>"+
              "<option class='types' value='CheckBox'>"+"CheckBox"+"</option>"+
            "</select>"+
            "<select class='hidden ifRadioSelected' name='"+counter+"' style='width:40px;' onclick='addLabelsForRadio(this);'>"+
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
            "<div  id='insertRadioLabel"+counter+"' class='styleRowButtonRadio'>"+"</div>"+
         "</div>";
      counter++;

      }
      var form=document.getElementsByClassName("SearchForm")[0].innerHTML+=h;
    }

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
  var form=document.getElementsByClassName("SearchForm")[0];
  var rowS=" <div class='oneRow'>"+
     "<label for='searchField'>"+"Element"+(howMany.length+1)+"</label>"+
    "<input type='text' name='nonFoundInput' value='' placeholder='label'>"+
      "<select class='options'  name='"+(howMany.length+1)+"' onclick='inputTypesAll(this)''>"+
        "<option class='types' value='TextBox'>"+"TextBox"+"</option>"
        +"<option class='types' value='RadioButton'>"+"RadioButton"+"</option>"+
        "<option class='types' value='CheckBox'>"+"CheckBox"+"</option>"+
      "</select>"+
      "<select class='hidden ifRadioSelected' name='"+(howMany.length+1)+"' style='width:40px;' onclick='addLabelsForRadio(this);'>"+
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
      "<div  id='insertRadioLabel"+(howMany.length+1)+"' class='styleRowButtonRadio'>"+"</div>"+
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

  function inputTypesAll(a){
    var numberOfLabelsForRadio=document.getElementsByClassName("ifRadioSelected");
    if(s%2==1){
      if(a.value=="RadioButton" || a.value=="CheckBox"){
        numberOfLabelsForRadio[(a.name)-1].classList.remove("hidden");
      }
      else{
        numberOfLabelsForRadio[(a.name)-1].classList.add("hidden");

      }
    }
    s++;
  }

function addLabelsForRadio(a){
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
      newElement="<div class='block formularF'><label>"+allOptions[key].children[1].value+"*"+"</label><input class='oneRow' type='text'/></div>";
    }
    else{
      newElement="<label>"+allOptions[key].children[1].value+" :"+"</label><input class='oneRow' type='text'/>";
    }

});
formular.innerHTML+=newElement;
}
else if(arrOfOptions[key][0]=="RadioButton")
{
  for(var i=0;i<arrOfOptions[key][1];i++)
  {
    newRadioLabel+="<div class='block blockF' style='margin-left: 180px; margin-top: -24px;'><input type='radio' class='oneRow' style='display:inline-block; float:left;' name='radio"+key+"' value='"+arrOfOptions[key][3+i]+"'/><label style='margin-top:-8px; display:inline-block;'>"+arrOfOptions[key][3+i]+"</label></div>";

      arrOfOptions[key].forEach(function(element) {
    if(element=="mandatory")
    {
      newElement="<div class='formularF' style='clear:both;'><label>"+allOptions[key].children[1].value+": *"+"</label></div>";
    }
    else{
      newElement="<div class='formularF' style='clear:both;'><label>"+allOptions[key].children[1].value+" :"+"</label></div>";
    }
    });
}
formular.innerHTML+=newElement;
newElement="";
formular.innerHTML+=newRadioLabel;
newRadioLabel="";
}
else if(arrOfOptions[key][0]=="CheckBox")
{
  for(var i=0;i<arrOfOptions[key][1];i++)
  {
    newCheckBoxLabel+="<div class='block blockF' style='margin-left: 180px; margin-top: -24px;'><input type='CheckBox' class='oneRow block style='margin-left: 120px; margin-top: -24px;' style='display:inline-block; float:left;' name='CheckBox"+key+"' value='"+arrOfOptions[key][3+i]+"'/><label style='margin-top:-8px; display:inline-block;'>"+arrOfOptions[key][3+i]+"</label></div>";

      arrOfOptions[key].forEach(function(element) {
    if(element=="mandatory")
    {
      newElement="<div class='formularF' style='clear:both;'><label>"+allOptions[key].children[1].value+": *"+"</label></div>";
    }
    else{
      newElement="<div class='formularF' style='clear:both;'><label>"+allOptions[key].children[1].value+" :"+"</label></div>";
    }
    });
}
formular.innerHTML+=newElement;
newElement="";
formular.innerHTML+=newCheckBoxLabel;
newCheckBoxLabel="";

}


});
  /*FORM ORDER*/
})
/*SAVING FORM*/


/*ALL OF ABOVE IS FOR ADMINISTRATOR PANEL*//*ALL OF ABOVE IS FOR ADMINISTRATOR PANEL*//*ALL OF ABOVE IS FOR ADMINISTRATOR PANEL*//*ALL OF ABOVE IS FOR ADMINISTRATOR PANEL*/

function saveForm(){
var allRows=document.getElementsByClassName("formularF");
var allButtons=document.getElementsByClassName("blockF");
var values={};
var arr=[];
var holder;
var arrCheckBox=[];
var iradio=0;
var nameOfFormular=document.getElementById("existingFormulars").value;

for(var i=0;i<allRows.length;i++)
{
  var checkBoxInputs=document.querySelectorAll(".oneRow[name='CheckBox"+i+"']");
  var radioInputs=document.querySelectorAll(".oneRow[name='radio"+i+"']");
  console.dir(radioInputs);
  if(allRows[i].children.length>1 && allRows[i].children[1].type=="text")
  {
    arr.push(allRows[i].children[0].textContent,allRows[i].children[1].value);
    values[i]=arr;
    arr=[];
  }
  else if(allRows[i].nextElementSibling.children[0].type=="radio")
  {
    for(var j=0;j<radioInputs.length;j++){
      if(radioInputs[j].checked==true)
      {
        console.log(radioInputs[j]);
            arr.push(allRows[i].children[0].textContent, radioInputs[j].value);
      }
  }
  values[i]=arr;
  arr=[];
}
  else
  {
    for(var j=0;j<checkBoxInputs.length;j++){
      if(checkBoxInputs[j].checked==true)
      {
        arrCheckBox.push(checkBoxInputs[j].value)
      }
    }
      arr.push(allRows[i].children[0].textContent, arrCheckBox);
      values[i]=arr;
      arrCheckBox=[];
      arr=[];
  }
}
console.log(values);
}
