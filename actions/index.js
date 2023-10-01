if (document.getElementById('main').clientWidth <= 739){
var header = document.getElementById('header')
var headerMenu = document.getElementsByClassName('header-menu').item(0)
var currentHeaderHeight = header.style.height
headerMenu.onclick = () => {
   var isOpend = header.style.height === 'auto'
   if (isOpend === true){
        header.style.height = currentHeaderHeight
        moreList.style.position = 'absolute'
        moreItem.style.backgroundColor = '#000'
        moreItem.style.color = '#fff'
   }
   else{
        header.style.height = 'auto'
   }
}

var outOfHeader = document.getElementById('container')
console.log(outOfHeader)
outOfHeader.onclick = () => {
    header.style.height = currentHeaderHeight
    moreList.style.position = 'absolute'
    moreItem.style.backgroundColor = '#000'
    moreItem.style.color = '#fff'
}

var headerList = document.querySelectorAll('ul.header-list>li a[href^="#"]')
for (var item of headerList)
{
    item.addEventListener('click',() => {
        header.style.height = currentHeaderHeight
        moreList.style.position = 'absolute'
        moreItem.style.backgroundColor = '#000'
        moreItem.style.color = '#fff'
    })
}

var moreItem = document.querySelector('.header-item:last-child')
var moreList = document.querySelector('.header-item:last-child ul')
moreList.style.position = 'absolute'
moreItem.addEventListener('click',() => {
    var isClosed = moreList.style.position === 'absolute'
    if (isClosed){
        moreList.style.position = 'initial' 
        moreItem.style.backgroundColor = '#282A35'
        moreItem.style.color = '#fff'
    }
    else{
        moreList.style.position = 'absolute'
        moreItem.style.backgroundColor = '#000'
        moreItem.style.color = '#fff'
    }
})
}

