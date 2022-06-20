// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",dataList);

function dataList(){
    event.preventDefault();
    var name= document.getElementById("name").value;
    var batch= document.getElementById("batch").value;
    var dsa= document.getElementById("dsa").value;
    var cs= document.getElementById("cs").value;
    var coding= document.getElementById("coding").value;
    var total =dsa+cs+coding;
    total1=total/30;
    total2=total1*100;

    var tr= document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=name;

    var td2=document.createElement("td");
    td2.innerText= batch;


    var td3=document.createElement("td");
    td3.innerText= dsa;


    var td4=document.createElement("td");
    td4.innerText=cs;

    var td5=document.createElement("td");
    td5.innerText=coding;

    var td6=document.createElement("td");
    
    td6.innerText= total2;

    var status=document.createElement("td");
    if(td6.innerText>50){
        status.innerText="Regular";
        status.style.backgroundColor="green";
    }else{
        status.innerText="Async";
        status.style.backgroundColor="red";
    }

    var td8=document.createElement("td");
    td8.innerText="Delete";
    td8.addEventListener("click",deleteRow);

    tr.append(td1,td2,td3,td4,td5,td6,status,td8);
    document.querySelector("tbody").append(tr);
}   

function deleteRow(){
    event.target.parentNode.remove();
}