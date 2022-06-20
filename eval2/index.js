// fill in javascript code here
document.querySelector("form").addEventListener("submit",docDetails);

function docDetails(){
    event.preventDefault();

    var tr= document.createElement("tr");    
    
    var name= document.getElementById("name").value;
    var namecol=document.createElement("td");
    namecol.innerText=name;

    var docID= document.getElementById("docID").value;
    var idcol=document.createElement("td");
    idcol.innerText= docID;

    var dept= document.getElementById("dept").value;
    var deptcol=document.createElement("td");
    deptcol.innerText=dept;

    var exp= document.getElementById("exp").value;
    var expcol=document.createElement("td");
    expcol.innerText=exp;
    
    var email= document.getElementById("email").value;
    var emailcol=document.createElement("td");
    emailcol.innerText=email;

    var mbl= document.getElementById("mbl").value;
    var mblcol=document.createElement("td");
    mblcol.innerText=mbl;
    
    var rolecol=document.createElement("td"); 
    var role="";
    if(exp>5){
        rolecol.innerText= "Senior";
    }
    else if(exp<=5||exp>=2){
        rolecol.innerText="Junior";
    }else if(exp<=1){
        rolecol.innerText="Trainee";
    }
    
    var deletecol= document.createElement("td");
    deletecol.innerText="Delete";
    deletecol.style.backgroundColor= "red";
    deletecol.addEventListener("click",detleteRow);

    tr.append(namecol,idcol,deptcol,expcol,emailcol,mblcol,rolecol,deletecol);
    document.querySelector("tbody").append(tr);
    
}

function detleteRow(){
    event.target.parentNode.remove();
}

