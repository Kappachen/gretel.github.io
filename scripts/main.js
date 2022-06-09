// var myHeading = document.querySelector('h1'); /* 使用函式來取得標題參考，並且將其存到myHeading的變數裡 */
// myHeading.textContent = 'Gretel is so cute!';
let gretel = 'boy';
if (gretel === 'boy'){
    alert('Gretel is a cute boy!')
} else {
    alert('Really gretel is a girl!?')
}

var myImage = document.querySelector('img');

myImage.onclick = function(){  // 點擊圖片，進行切換圖片
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Gretel.jpeg') {
        alert('可以色色!');
        myImage.setAttribute ('src','images/Gretel18.jpeg');
    } else {
        alert('不可以色色!');
        myImage.setAttribute ('src','images/Gretel.jpeg');
    }
}

var myButton = document.querySelector('button'); // 將button元素的參考存入myButton變數裡
var myHeading = document.querySelector('h1'); // 將h1元素的參考存入myHeading變數裡

function setUserName() {
    let myName = prompt('Please enter your name.'); // 此函式會產生一個對話視窗，並要求使用者輸入資料，按下確認後將內容儲存在變數內
    if(!myName || myName === null) { // 若(myName變數是空的)或(myName變數是null)，再次執行setUserName函式
        setUserName();
    } else { // localStorage API可以讓使用者先將資料儲存在瀏覽器內
        localStorage.setItem('name', myName); // 使用localStorage的setItem()函式，把myName變數的值指定給name變數
        myHeading.innerHTML = 'Gretel is kawaii, ' + myName + ' is Gretel';
    }
}

if(!localStorage.getItem('name')) { // 初次進入網頁時，檢視變數name是否存在
    setUserName(); // 若是不存在，執行setUserName函式
} else {
    let storedName = localStorage.getItem('name'); // 若存在，將變數裡的內容取出並存入storedName變數中
    myHeading.innerHTML = 'Gretel is kawaii, ' + storedName + ' is Gretel'; // 將變數storedName插入h1中
}

// 當button被點擊時，觸發setUserName函式
myButton.onclick = function() {
    setUserName();
}