

function getOption() { 

  var s = document.getElementById('select1');
	var item1 = s.options[s.selectedIndex].value;

	if (item1 = 1) {

  var x = document.createElement("ARTICLE");
  x.setAttribute("id", "myArticle");
  document.body.appendChild(x);

  var heading = document.createElement("H2");
  var txt1 = document.createTextNode("Visual");
  heading.appendChild(txt1);
  document.getElementById("myArticle").appendChild(heading);

  var para = document.createElement("P");
  var txt2 = document.createTextNode("This can be non-sighted users, users with low-vision, users with obstructed vision, or even simply your aging parents.");
  para.appendChild(txt2);
  document.getElementById("myArticle").appendChild(para);

  var hr = document.createElement("HR");
  document.getElementById("myArticle").appendChild(hr); 

  var h2 = document.createElement("H2");
  var txt3 = document.createTextNode("Associated conditions");
  h2.appendChild(txt3);
  document.getElementById("myArticle").appendChild(h2);
 
  var para2 = document.createElement("P");
  var txt4  = document.createTextNode("This can be non-sighted users, users with low-vision, users with obstructed vision, or even simply your aging parents.");
  para.appendChild(txt2);
  document.getElementById("myArticle").appendChild(para);

   var Conditions = ['Myopia', 'Colour blindness', 'Glaucoma', 'Albinism'];

   var list = document.createElement("UL");

    Conditions.forEach(function (Condition) {
	var li = document.createElement("LI");
	li.textContent = Condition;
	list.appendChild(li);
         document.getElementById("myArticle").appendChild(li);
})
}

}     
