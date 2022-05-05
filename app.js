const list = document.querySelector(".list");
const addToListBtn = document.querySelector(".AddToList");
const resultBtn = document.querySelector(".result");
const container = document.querySelector(".containerKatilimci")
const alert = document.querySelector(".alert")
addToListBtn.addEventListener("click", AddToList)
function AddToList(){
    const katilimciInput = document.querySelector(".katilimci");
    const li = document.createElement("li");
    li.innerHTML= katilimciInput.value;
    list.appendChild(li);
    katilimciInput.value ="";
}
resultBtn.addEventListener("click", sonucuGoster)
function sonucuGoster(){
    const kazananTxt= document.querySelector(".kazanan")
    let listArray=list.children;
    let rastgeleSayi = Math.floor(Math.random() * listArray.length);
    let kazanan = listArray[rastgeleSayi].textContent;
    kazananTxt.innerHTML=kazanan
    container.style.opacity="0.1"
    alert.style.display="flex"
    listArray[rastgeleSayi].remove()
}
function closeAlert(){
    container.style.opacity = "1";
    alert.style.display = "none";
}
