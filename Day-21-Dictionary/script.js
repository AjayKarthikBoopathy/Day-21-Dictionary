var form=document.createElement("form");
form.setAttribute("id","myform");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","Type here eg-home");
input.setAttribute("id","endpoint"); //here
input.setAttribute("required",true);

var sub=document.createElement("input");
sub.setAttribute("class","btn btn-info");
sub.setAttribute("type","submit");
sub.setAttribute("value","search");
form.append(input,sub);
document.body.append(form);

//container
var container = document.createElement("div");
container.setAttribute("class","container");

let nam=document.createElement("div");
nam.setAttribute("id","na");
container.append(nam); 

let abi=document.createElement("div");
abi.setAttribute("id","ab");
container.append(abi); 

let wei=document.createElement("div");
wei.setAttribute("id","we");
container.append(wei); 

let def=document.createElement("div");
def.setAttribute("id","de");
container.append(def); 

let aud=document.createElement("div");
aud.setAttribute("id","audi");
container.append(aud); 

var sound=document.getElementById("sound");
document.body.append(container);


//here

var formres=document.getElementById("myform");
formres.addEventListener("submit",(event)=>{
event.preventDefault();//to overcome default behaviour
var endpoint=document.getElementById("endpoint").value; //(Type1:Extracting) taking (value) to variable and console
//console.log(endpoint);
var url=`https://api.dictionaryapi.dev/api/v2/entries/en/${endpoint}`;

finalFunc(url);
});

async function finalFunc(url){
    try{
let response=await fetch(url);
//console.log(response);
let data=await response.json();
// console.log(data);
// console.log(data[0].word);
// console.log(data[0].meanings[0].partOfSpeech);
// console.log(data[0].meanings[1].partOfSpeech);
// console.log(data[0].meanings[0].definitions[0].definition);
// console.log(data[0].meanings[0].definitions[1].definition);
// console.log(data[0].phonetics[1].audio);

output(data);
}
catch(error){
    console.log(error);
}
}



//Output
async function output(data){
    try{
let na=document.getElementById("na");
let ab=document.getElementById("ab");
let we=document.getElementById("we");
let de=document.getElementById("de");
let audi=document.getElementById("audi");


na.innerHTML=" ";  //for refreshing the values
na.innerHTML=`<span class="details">Word :- </span> ${data[0].word}`; //(Type2:Printing) giving result to variable and append


ab.innerHTML=" ";
ab.innerHTML=`<span class="details">Part of Speech :- </span> ${data[0].meanings[0].partOfSpeech}`;


we.innerHTML=" ";
we.innerHTML=`<span class="details">Synonyms :- </span> ${data[0].meanings[0].synonyms[0]}, 
                            ${data[0].meanings[0].synonyms[1]}, ${data[0].meanings[0].synonyms[2]}`;

de.innerHTML=" ";
de.innerHTML=`<span class="details">Meaning :- </span> ${data[0].meanings[0].definitions[0].definition} 
                    (or) ${data[0].meanings[0].definitions[1].definition}`;


var url2 = `'${data[0].phonetics[1].audio}'`;
//console.log(url2); 

audi.innerHTML=" ";
audi.innerHTML=`<button class="audio" onclick="play(${url2})">Play Audio</button>`;


}
catch(error){
    console.log(error);
}
}
//var url2 = 'https://api.dictionaryapi.dev/media/pronunciations/en/home-us.mp3';
function play(url2) {
    var audio = new Audio(url2);
    audio.play();
}


