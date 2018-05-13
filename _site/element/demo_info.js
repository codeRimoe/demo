nID=0;       //total number of projects
currentID=0; //record current ID
galaxy_time = 5000;
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

set_timer();

function demoInfo(i){
    try{
        clearInterval(show);
        clearTimeout(timer);
    }
    catch(e){
    }
    
    cur_title=(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
    img=(x[i].getElementsByTagName("img")[0].childNodes[0].nodeValue);
    var spd=5, now_o=1;
    document.getElementById("particles-js").style.opacity=now_o;
    document.getElementById("pic").style.opacity=0;
    show=self.setInterval(function(){
        now_o-=0.01;
        document.getElementById("particles-js").style.opacity=now_o;
        // document.getElementById("pic").style.opacity=now_o; //11
    },spd);
    timer=setTimeout(function(){
        document.getElementById("particles-js").style.backgroundImage='url('+img+')';
        document.getElementById("pic").style.backgroundImage='url('+img+')';
        document.getElementById("cur_title").textContent=cur_title;
        document.getElementById("pic").style.opacity=1; //33
        clearInterval(show);
        show=self.setInterval(function(){
            now_o+=0.01;
            document.getElementById("particles-js").style.opacity=now_o;
            // document.getElementById("pic").style.opacity=now_o; //11
        },spd);
        timer=setTimeout(function(){
            // document.getElementById("pic").style.opacity=1; //22
            clearInterval(show);
        },spd*100);
    },spd*100);
    

    try{
        blog=(x[i].getElementsByTagName("blog")[0].childNodes[0].nodeValue);
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
        source=(x[i].getElementsByTagName("source")[0].childNodes[0].nodeValue);
        document.getElementById("source").href=source;
        document.getElementById("source").style.display="inline";
    }
    catch(e){
        document.getElementById("source").style.display="none";
    }
    currentID = i;
}

function set_timer(){
    try{
        clearTimeout(auto_timer);
    }
    catch(e){
    }
    auto_timer=setTimeout(function(){
        next();
    },galaxy_time);
}

function next(){
    if (++currentID>=nID){
        currentID=0;
    }
    demoInfo(currentID);
    set_timer();
}

function last(){
    if (--currentID<0){
        currentID=nID-1;
    }
    demoInfo(currentID);
    set_timer();
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