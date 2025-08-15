let card = document.querySelector(".card");
let cardContainer = document.querySelector(".card-container");
let detailInfo = document.querySelector(".detail-info");
let detailedTitle = document.querySelector(".detailedTitle");
let detailedImage = document.querySelector(".detailedImage");
let detailedDesc = document.querySelector(".detailedDesc");
let backBtn = document.querySelector(".backBtn");
let footer = document.querySelector(".footer");
let searchBtn = document.querySelector(".searchBtn");

function openCard(imgSrc,title,desc) {
    cardContainer.style.display="none";
    detailInfo.style.display="block"
    footer.style.display="none"

    detailedTitle.textContent = title;
    detailedImage.src = imgSrc;
    detailedDesc.textContent = desc;

}

backBtn.addEventListener("click",()=>{
    cardContainer.style.display="grid";
    detailInfo.style.display="none";
})

document.querySelectorAll(".card img").forEach(img => {
    img.addEventListener("click",()=>{
        const card = img.parentElement;
        const title = card.querySelector("h3").textContent;
        const desc = card.querySelector("p").textContent;
        openCard(img.src,title,desc);
    })
})

