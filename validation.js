let address = document.getElementById("address");
let tickAddress = document.getElementById("tickAddress");

let checkpassword = document.getElementById("checkpassword");
let tickCheckpassword = document.getElementById("tickCheckPassword");

function makeElementGood(element,tickElement){
    if(tickElement == undefined){
        element.classList.add("tickgood");
        element.innerText ="✓";
        return;
    }
    element.classList.remove("databad");
    element.classList.add("datagood");
    tickElement.classList.add("tickgood");
    tickElement.innerText ="✓";
}

function makeElementBad(element,tickElement){
    if(tickElement == undefined){
        element.classList.remove("tickgood");
        element.innerText="⚠";
        return;
    }
    element.classList.remove("datagood");
    element.classList.add("databad");
    tickElement.classList.remove("tickgood");
    tickElement.innerText="⚠";
}


function nameCheck(){
    let name = document.getElementById("name");
    let tickName = document.getElementById("tickName");
    if(name.value){
        makeElementGood(name,tickName);
        return(true);
    }
    else{
        makeElementBad(name,tickName);
        return(false);
    }
}



function surnameCheck(){
    let surname = document.getElementById("surname");
    let tickSurname = document.getElementById("tickSurname");
    if(surname.value){
        makeElementGood(surname,tickSurname);
        return(true);
    }
    else{
        makeElementBad(surname,tickSurname);
        return(false);
    }
}


function emailCheck(){
    let email = document.getElementById("email");
    let tickEmail = document.getElementById("tickEmail");

    let inserimento = (email.value).toString();
    let atPosition = inserimento.indexOf('@');
    let destraMail = inserimento.slice(atPosition,);
    if(atPosition==-1 || destraMail.indexOf('.')==-1 || inserimento[0]=='-' || inserimento[0]=='.' || inserimento[inserimento.length -1]=='-' || inserimento[inserimento.length -1]=='.'){
        makeElementBad(email,tickEmail);
        return(false);
    }else{
        makeElementGood(email,tickEmail);
        return(true);
    }
}

//controllo indirizzo
function addressCheck(){
    let address = document.getElementById("address");
    let tickAddress = document.getElementById("tickAddress");
    if(address.value.length >= 10 || address.value.length == 0){
        makeElementGood(address,tickAddress);
        return(true);
    }else{
        makeElementBad(address,tickAddress);
        return(false);
    }
}


//controllo che le password corrispondano
function pswCheckCheck(){
    let pswCheck = document.getElementById("checkpassword");
    let psw = document.getElementById("password");
    let tickPswCheck = document.getElementById("tickCheckPassword");
    let tickPswCheckList = document.getElementById("corrisponds");
    if(pswCheck.value == psw.value){
        makeElementGood(pswCheck,tickPswCheck);
        makeElementGood(tickPswCheckList);
        return(true);
    }else{
        makeElementBad(pswCheck,tickPswCheck);
        makeElementBad(tickPswCheckList);
        return(false);
    }
}


//controllo password
function pswCheck(){
    let password = document.getElementById("password");
    let tickPassword = document.getElementById("tickPassword");


    let name = document.getElementById("name");

    let surname = document.getElementById("surname");

    let inserimento = (password.value).toString();
    let okNumeri = false;
    let okSpazio = false;
    let okName = false;
    let okLength = false;
    let okSpec = false;

    //controllo lunghezza
    let tickLength = document.getElementById("minChar");
    if(inserimento.length >= 10){
        okLength =true;
        makeElementGood(tickLength);
    }else{
        okLength = false;
        makeElementBad(tickLength);
    }

    //controllo numeri nell password
    let tickNumeri = document.getElementById("numChar");
    for(let i=0; i<10; i++){
        if(inserimento.indexOf(i.toString()) != -1){
            okNumeri = true;
            makeElementGood(tickNumeri);
            break;
        }
    }
    if(okNumeri == false){
        makeElementBad(tickNumeri);
    }

    //controllo spazi
    let tickSpazio = document.getElementById("notSpace");
    if(inserimento.indexOf(' ') == -1){
        okSpazio = true;
        makeElementGood(tickSpazio);
    }
    else{
        okSpazio = false;
        makeElementBad(tickSpazio);
    }

    //controllo Nome e Cognome
    let tickNome = document.getElementById("namePresent");
    if(inserimento.indexOf(name.value) == -1 && inserimento.indexOf(surname.value) == -1){
        okName = true;
        makeElementGood(tickNome);
    }else{
        makeElementBad(tickNome);
    }

     //controllo Caratteri speciali
     let specChar = "!@#$%^&*.,<>/\';:?";
     let numberOfSpec = 0;
     let tickSpec = document.getElementById("specChar");
     for(let tmp=0; tmp<inserimento.length; tmp++){
         if(specChar.indexOf(inserimento[tmp]) != -1){
             numberOfSpec++;
            }
     }
     if(numberOfSpec >=3 ){
         okSpec = true;
         makeElementGood(tickSpec);
     }
     else{
         makeElementBad(tickSpec);
     }

    //controllo complessivo
    if(okLength && okName && okNumeri && okSpazio && okSpec){
        makeElementGood(password,tickPassword);
        return(true)
    }else{
        makeElementBad(password,tickPassword);
        return(false);
    }
}
