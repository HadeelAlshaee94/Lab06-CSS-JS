
var name = prompt("what is your name?")
alert("Welcome to our website" + name)

var favAnimal = prompt("what is your fav Animal from these (Lion, Monkey , Bear )?")

while ( favAnimal != "Lion" &&  favAnimal != "Monkey" &&  favAnimal != "Bear") {
    alert("you entered wrong Animal please try gain ")
    favAnimal = prompt("what is your fav Animal from these (Lion, Monkey , Bear )?")

}
if(favAnimal == "Lion"){
  var Number = prompt("How many "+ favAnimal + " do you want from 1 - 5?") 
   for(i=1; i<= Number; i++){
      document.write('<img src="https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg">')
}}
else if(favAnimal == "Monkey") {
  var Number = prompt("How many "+ favAnimal + " do you want from 1 - 5?")
     for(i=1; i<= Number; i++)
      { document.write('<img src="https://images.theconversation.com/files/396003/original/file-20210420-21-lfuv53.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop">')
}}
else if ( favAnimal == "Bear") {
  var Number = prompt("How many "+ favAnimal + " do you want from 1 - 5?")
     for(i=1; i<= Number; i++)
      { document.write('<img src="https://d.newsweek.com/en/full/1810421/brown-bear-woods.jpg?w=1600&h=1600&q=88&f=0ec04700367efe63296003e0a8a92bc7">')
}}



function rating (num){
  
for (var i = 0; i < num ; i++) {

  document.write("<img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1200px-Golden_star.svg.png' >")
}
  // return starsNum;
}

 var starsNum = prompt('How many stars do you rate our website ?')
 
rating(starsNum);



