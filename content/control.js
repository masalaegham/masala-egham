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
      var key = elm.innerHTML; //console.log('---------- Key------'+key);//console.log('---------- Key------'+key,VARS[key]);
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
  //var clon = temp.content.cloneNode(true);
  var bodyContent =document.getElementById('main');
  //If template is MENU then populate it from menu items
  let menuItemsContent = constants.CONTENT.MENU;
  let menuItems = '';
  if(temp === 'menuTemplate'){
    for(let item of menuItemsContent){
        menuItems += `<div class="col-lg-6 menu-item filter-`+item.itemCetg+`">
        <img src="`+item.img+`" class="menu-img" alt="">
        <div class="menu-content">
          <a href="#"><var>`+item.name+`</var></a><span><var>`+item.price+`</var></span>
        </div>
        <div class="menu-ingredients">
        <var>`+item.ingrd+`</var>
        </div>
      </div>`;
    }
    templateName = templateName.replace("#MenuTemplateGen", menuItems);

  }


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


