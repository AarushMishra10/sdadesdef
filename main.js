var images= 
["https://fthmb.tqn.com/qKkl3ep4yk7uL-C5-0kYsDceiXw=/2145x1400/filters:fill(auto,1)/GrandparentsToday_Peter-Correz_304361-001-2--56afb2885f9b58b7d01bf6e5.jpg", "https://tse1.mm.bing.net/th?id=OIP.Ds0GV7brMlnIG--1Ap1b2AHaIH&pid=Api&P=0&w=300&h=300","https://tse3.mm.bing.net/th?id=OIP.Y71motciwNtWcRg9R3MSxAHaLG&pid=Api&P=0&w=300&h=300",];


var names= ["Grand Parents", "Family Tree", "Baby Brother"];


var i = 0;
function update(){
    i++;
    var numbers_of_family_memebrs_in_array = 5;
    if(i> numbers_of_family_memebrs_in_array ){

        i = 0; 

    }
    var updateImage = images[i]; 
    var updateName = names[i];
    document.getElementById("family_member_image").src= updateImage;
    document.getElementById("family_member_name").src= updateName;
}

