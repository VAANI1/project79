menu_list_array = ["Veg Margherita Pizza","Cheese burst Pizza","Double Cheese Margherita","Farm House"
                    ];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("  display_menu  ").innerHTML = htmldata;
    var pizza_1 = document.getElementById("Veg Margherita Pizza").value;
    var pizza_2 = document.getElementById("Cheese burst Pizza").value;
    var pizza_3 = document.getElementById("Double Cheese Margherita").value;
    var pizza_4 = document.getElementById("Farm House").value;

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
name_of_the_pizza_array.push(pizza_1);
name_of_the_pizza_array.push(pizza_2);
name_of_the_pizza_array.push(pizza_3);
name_of_the_pizza_array.push(pizza_4);
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}

