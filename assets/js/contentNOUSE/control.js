/**
* Control Name: Control
*/
//Map content from constants
function mapContent(){  console.log('---------- MAP content------');
    
  let VARS= constants.CONTENT;
  // run once at end of body
  var all = document.getElementsByTagName("var");
  for(var i=0; i<all.length; i++) {
      var elm = all[i];
      var key = elm.innerHTML; console.log('---------- Key------'+key);//console.log('---------- Key------'+key,VARS[key]);
      if(VARS[key] != null)
          elm.innerHTML = VARS[key];
      //else //IF NO KEY found then skip
          //elm.innerHTML = "";
  }
}
document.onload = mapContent();

//Change the child content of page
function replacePageContent(temp) {  //console.log('---------- show-- content------'+temp,templates[''+temp]);
  let templateName = templates[''+temp];
  //var temp = document.getElementsByTagName("template")[0];
  //var clon = temp.content.cloneNode(true);
  var bodyContent =document.getElementById('main');
  bodyContent.innerHTML = templateName;

  //call method to populate content
  //document.onload = mapContent();
  mapContent();
} 

//Map template from constants
function mapTemplateContent(){
  var val = {
    "address_1": "Address 1",
    "address_2": "",
    "address_10": "Address 10",
  }  
  var template_html = `My address is #ADDRESS1# delivery address is #ADDRESS2# and billing is #ADDRESS10#`
  template_html = template_html.replace(/#ADDRESS(\d+)#/g, function(addr, num) { 
    var str = val["address_"+num]; return str?str+"<br/>":""
  });
}


