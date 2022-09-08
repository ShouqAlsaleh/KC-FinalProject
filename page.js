alert(`حياكم بموقع "أوجد وزارتك"`)





var defaultText = "Search..."; 
var searchBox = document.getElementById("search"); 
searchBox.value = defaultText;

searchBox.onfocus = function() { 
    if ("زارة الخارجية" == document.getElementById("m6");  
      {
    this.value =  'وزارة الخارجية'; 
    } 
   } 
   searchBox.onblur = function() {
    if (this.value == "") {
    this.value = defaultText; 
    } 
   }

