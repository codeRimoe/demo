nID=0;       //total number of projects
currentID=0; //record current ID

//xml files
if (window.XMLHttpRequest){
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
}
else{
    // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET","./element/list.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
x=xmlDoc.getElementsByTagName("demo");

function demoInfo(i){
    cur_title=(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
    img=(x[i].getElementsByTagName("img")[0].childNodes[0].nodeValue);
    
    setTimeout(function(){
        document.getElementById("particles-js").style.opacity=0.6;
        document.getElementById("pic").style.opacity=0.6;
    },50);
    setTimeout(function(){
        document.getElementById("particles-js").style.opacity=0.3;
        document.getElementById("pic").style.opacity=0.3;
    },100);
    setTimeout(function(){
        document.getElementById("particles-js").style.backgroundImage='url('+img+')';
        document.getElementById("pic").style.backgroundImage='url('+img+')';
    },150);
    setTimeout(function(){
        document.getElementById("particles-js").style.opacity=0.6;
        document.getElementById("pic").style.opacity=0.6;
    },200);
    setTimeout(function(){
        document.getElementById("particles-js").style.opacity=1;
        document.getElementById("pic").style.opacity=1;
    },250);
    document.getElementById("cur_title").textContent=cur_title;

    try{
        source=(x[i].getElementsByTagName("source")[0].childNodes[0].nodeValue);
        document.getElementById("blog").href=blog;
        document.getElementById("blog").style.display="inline";
    }
    catch(e){
        document.getElementById("blog").style.display="none";
    }
    try{
        web=(x[i].getElementsByTagName("web")[0].childNodes[0].nodeValue);
        document.getElementById("web").href=web;
        document.getElementById("web").style.display="inline";
    }
    catch(e){
        document.getElementById("web").style.display="none";
    }
    try{
        blog=(x[i].getElementsByTagName("blog")[0].childNodes[0].nodeValue);
        document.getElementById("source").href=source;
        document.getElementById("source").style.display="inline";
    }
    catch(e){
        document.getElementById("source").style.display="none";
    }
    currentID = i;
}

function next(){
    if (++currentID>=nID){
        currentID=0;
    }
    demoInfo(currentID);
}

function last(){
    if (--currentID<0){
        currentID=nID-1;
    }
    demoInfo(currentID);
}

//make a list of projects(initial)
txt="<p style='font-size: 1em;overflow-x;'>Recent Project</p>";
for (;nID<x.length;nID++){ 
    txt+="<a href='javascript:void(0)' class='link' ";
    txt+="onclick='demoInfo(" + nID + ")'>";
    txt+=x[nID].getElementsByTagName("title")[0].childNodes[0].nodeValue;
    txt+="</a></br>";
  }
document.getElementById("list").innerHTML=txt;
demoInfo(currentID);