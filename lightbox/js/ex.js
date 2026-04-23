window.addEventListener("load", ()=>{
    const pics = document.querySelectorAll(".pic")
    const lightBox = document.querySelector("#lightBox")
    const lightBoxImg = document.querySelector("#lightBox-img")
    const lightBoxTitle = document.querySelector("#lightBox-title")
    pics.forEach((pic)=>{
        // console.log(pic);
        const bigSrc = pic.dataset.src
        // console.log(bigSrc);
        const bigTitle = pic.dataset.title
        console.log(bigTitle);
        pic.addEventListener("click", ()=>{
            lightBox.style.display = "flex"
            lightBoxImg.src = bigSrc
            lightBoxTitle.textContent = bigTitle
        })
        // 배경 클릭시 닫기
        lightBox.addEventListener("click", ()=>{
            lightBox.style.display = "none"
        })
    })
})