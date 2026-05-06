window.addEventListener("load", ()=>{
    const tabLinks = document.querySelectorAll(".tab-nav li a")
    const tabItems = document.querySelectorAll(".tabItem")

    tabLinks.forEach((link , index)=>{
        // console.log(link);
        link.addEventListener("click", (e)=>{
            e.preventDefault()
            // 1. 메뉴 active 제거
            tabLinks.forEach((tl)=>tl.classList.remove("active"))
            // 2. 내용 active 제거
            tabItems.forEach((ti)=>ti.classList.remove("active"))
            // 3. 클릭한 메뉴 active add
            link.classList.add("active")
            // tabItems[index].classList.add("active")
            // 4. 연결된 콘텐츠 찾기
            const linkTarget = document.querySelector(link.getAttribute("href"))
            // console.log(linkTarget);
            linkTarget.classList.add("active")
            
        })
    })
})