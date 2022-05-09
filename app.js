const list = document.querySelector(".list");
const addToListBtn = document.querySelector(".AddToList");
const resultBtn = document.querySelector(".result");
const container = document.querySelector(".containerKatilimci")
const uyari = document.querySelector(".alert")
addToListBtn.addEventListener("click", AddToList)
function AddToList(){
    const katilimciInput = document.querySelector(".katilimci");
    if(katilimciInput.value.length>0){
        const li = document.createElement("li");
        li.innerHTML= katilimciInput.value;
        list.appendChild(li);
        katilimciInput.value ="";
    }
    else{
        alert("lütfen veri giriniz");
    }
}
resultBtn.addEventListener("click", sonucuGoster)
function sonucuGoster(){
    if(list.length>0){
        const kazananTxt= document.querySelector(".kazanan")
        let listArray=list.children;
        let rastgeleSayi = Math.floor(Math.random() * listArray.length);
        let kazanan = listArray[rastgeleSayi].textContent;
        kazananTxt.innerHTML=kazanan
        container.style.opacity="0.1"
        uyari.style.display="flex"
        listArray[rastgeleSayi].remove()
    }
    else{
        alert("lütfen kullanıcı ekleyiniz");
    }
    
}
function closeAlert(){
    container.style.opacity = "1";
    uyari.style.display = "none";
}
