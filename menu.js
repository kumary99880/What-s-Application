function Menu()
{
    document.querySelector(".search-icon").style.display = "block";
    document.querySelector(".menu_link").style.display = "none";
    document.querySelector(".full-img").style.display = "none";


}
function back()
{
    document.querySelector(".search-icon").style.display = "none";
    document.querySelector(".full-img").style.display = "none";

}
function link()
{
    document.querySelector(".menu_link").style.display = "block";
    document.querySelector(".full-img").style.display = "none";

}
function Setting(){
    document.querySelector(".setting").style.display = "block";
    document.querySelector(".full-img").style.display = "none";


}
function backtohome()
{
    document.querySelector(".setting").style.display = "none";
    document.querySelector(".full-img").window.history.back();
    document.querySelector(".full-img").style.display = "none";
    document.querySelector(".menu_link").style.display = "none";



}
function showimg()
{
        document.querySelector(".full-img").style.display = "block";
        document.querySelector(".menu_link").style.display = "none";
        window.history.back();

}
function Hinduimg()
{
        document.querySelector(".full-img").style.display = "block";
        document.querySelector(".menu_link").style.display = "none";
        document.querySelector(".change-photo").style.display = "none";
        window.history.back();

}
function Profile()
{
        document.querySelector(".profile").style.display = "block";
        document.querySelector(".change-photo").style.display = "none";
        window.history.back();

}
function backsetting()
{
    document.querySelector(".profile").style.display = "none";
    document.querySelector(".change-photo").style.display = "none";
    window.history.back();


}
function Profile_photo()
{
    document.querySelector(".profile-photo").style.display = "block";
    document.querySelector(".change-photo").style.display = "none";

}
function backProfile()
{
    document.querySelector(".profile-photo").style.display = "none";

}
function change_photo(){
    document.querySelector(".change-photo").style.display = "block";

}
function Selected_contact()
{
    document.querySelector(".seleted").style.display = "block";

}
function backHome()
{
    document.querySelector(".seleted").style.display = "none";


}

// image
let poster = document.getElementById('poster');
let title = document.getElementById('title');
        
Array.from(document.getElementsByClassName('logo')).forEach((ele,i)=>
{
    // console.log(ele)
    ele.addEventListener('click',()=>{
        poster.src = ele.getElementsByTagName('img')[0].src;
        title.innerHTML = ele.getElementsByTagName('h2')[0].innerText;
       
      
    })
})
console.log("hello");