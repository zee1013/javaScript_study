window.addEventListener("load", ()=>{
    fetch("item.json")
    .then((response)=>{return response.json()})
    .then((data)=>{
        console.log(data);
        const itemContainer = document.querySelector("#items")
        data.forEach((item)=>{
            // console.log(item);
            const itemElement = document.createElement("div")
            itemElement.classList.add("item")
            // console.log(itemElement);
            itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.description}">
            <h3>${item.title}</h3>
            `
            itemContainer.appendChild(itemElement)
            // 아이템 각각 클릭했을 때 디테일
            itemElement.addEventListener("click",()=>{
                showDetail(item)
            })
        })
        
    })
    .catch((error)=>{
        console.log(error);
    })
    // 아이템 각각 클릭했을 때
    function showDetail(item){
        const detailContainer = document.querySelector("#detail")
        detailContainer.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
        `
    }
})