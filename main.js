function getmenu(){
var htmldata;
htmldata="<ol class='menulist>"
menu_list_array.sort();
menu_list_array.push();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata;
}
}

function additem(){
    menu_list_array=["Chicken Tandoori Pizza",
    "Veg Sumpreme Pizza",
    "Paneer Tikka Pizza",
   "Deluxe Veggie Pizza",
   "Veg Extravaganza Pizza"];
}

