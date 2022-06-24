var i = 0;
var txt;/* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

getQuotes();




async function getQuotes() {

  const quotes = await fetch("https://type.fit/api/quotes");
  const json = await quotes.json();
  // console.log(json);
  // return json;
  txt = await json[Math.floor(Math.random() * json.length)];
  console.log(txt.text)
  txt = txt.text;
  typeWriter();

}


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



