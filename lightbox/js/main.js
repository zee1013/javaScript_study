window.addEventListener("load", ()=>{
    const pics = document.querySelectorAll(".pic")
    const lightBox = document.querySelector("#lightBox")
    const lightBoxImg = document.querySelector("#lightBox-img")
    // console.log(pics);
    pics.forEach((item, index)=>{
        // console.log(item, index+1);
        item.addEventListener("click", ()=>{
            lightBox.style.display = "block"
            // 클릭시 해당하는 이미지 가져오기
            const bigSrc = item.dataset.src
            lightBoxImg.src = bigSrc
        })
    })
    lightBox.addEventListener("click", ()=>{
        lightBox.style.display = "none"
    })
})