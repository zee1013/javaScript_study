window.addEventListener("load", ()=>{
    // 요소 선택
    const cup = document.getElementById("cup")
    const smallPic = document.querySelectorAll(".small")
    const viewBtn = document.getElementById("view")
    const detail = document.getElementById("detail")
    
    // 바뀔 정보 내용
    const descName = document.getElementById("desc-name")
    const descPrice = document.getElementById("desc-price")
    const descDelivery = document.getElementById("desc-delivery")
    const descPoints = document.getElementById("desc-points")
    const descRoasting = document.getElementById("desc-roasting")
    // 상세내용 바뀔 정보
    const detailOrigin = document.getElementById("detail-origin");
      const detailRegion = document.getElementById("detail-region");
      const detailFarm = document.getElementById("detail-farm");
      const detailAltitude = document.getElementById("detail-altitude");
      const detailVariety = document.getElementById("detail-variety");
      const detailProcess = document.getElementById("detail-process");
      const detailDescription = document.getElementById("detail-description");
      const flavorNote = document.getElementById("flavor-note");

      // 장바구니
      const addBtn = document.getElementById("desc-btn")
      const cartBox = document.getElementById("cart")
      const totalBox = document.getElementById("total")
      const cartCount = document.getElementById("cart-count")

    // 작은 이미지 클릭시 정보 변경(클래스 selected 토글 포함)
    smallPic.forEach((small)=>{
        small.addEventListener("click", ()=>{
            smallPic.forEach((s)=>s.classList.remove("selected"))
            small.classList.add("selected")
            changePic(small)
        })
    })

    // changePic() : 큰 이미지 변경, 정보 변경
    function changePic(el){
        console.log(el); // el : 클릭하는 작은 이미지
        // 이미지 변경
        cup.src = el.src
        
        // 정보 변경
        descName.textContent = `상품명 : ${el.dataset.name}`
        descPrice.textContent = `판매가 : ${el.dataset.price}`
        descDelivery.textContent = `배송비 : ${el.dataset.delivery}`
        descPoints.textContent = `적립금 : ${el.dataset.points}`
        descRoasting.textContent = `로스팅 : ${el.dataset.roasting}`

        // 상세내용 바꾸기
         detailOrigin.textContent = `원산지 : ${el.dataset.origin}`
         detailRegion.textContent = `지역 : ${el.dataset.region}`
         detailFarm.textContent = `농장 : ${el.dataset.farm}`
         detailAltitude.textContent = `고도 : ${el.dataset.altitude}`
         detailVariety.textContent = `품종 : ${el.dataset.variety}`
         detailProcess.textContent = `가공법 : ${el.dataset.process}`
         detailDescription.textContent = `${el.dataset.description}`
         flavorNote.textContent = `${el.dataset.flavornote}`
         // 버튼 데이터 저장
    addBtn.dataset.name = el.dataset.name
    const price = Number(el.dataset.price.replace(/[^0-9]/g, ""))
    addBtn.dataset.price = price
    }

    
    // 첫 상품 기본 선택
    smallPic[0].classList.add["selected"]
    changePic(smallPic[0])
    // 상세보기 클릭시
    viewBtn.addEventListener("click", ()=>{
        detail.classList.toggle("show")
        // 삼항연산자(if(){}else{}대신 사용)
        // detail.style.display = detail.style.display === "block" ? "none" : "block"
    })

    // 장바구니 기능
    // 장바구니 데이터
    let cartItems = {}
    // 장바구니 담기
    addBtn.addEventListener("click", ()=>{
        const name = addBtn.dataset.name
        const price = Number(addBtn.dataset.price)
        // 장바구니 박스 추가
        if(!cartItems[name]){
            cartItems[name] = {
                price : price,
                quantity : 1,
            }
        }else{
            cartItems[name].quantity++
        }
        // 화면 업데이트
        updateCart()
    })
    // 장바구니 박스 업데이트
    function updateCart(){
        cartBox.innerHTML = `<strong>🛒장바구니</strong>`
        let totalPrice = 0
        let totalCount = 0
        for(let key in cartItems){
            const item = cartItems[key]
            totalPrice += item.price * item.quantity
            totalCount += item.quantity
            const p = document.createElement("p")
        p.textContent = `
        ${key} - ${item.price.toLocaleString()}원 x ${item.quantity}개
        `
        cartBox.appendChild(p)
        }
        // 총합
        totalBox.textContent = `총 합계 : ${totalPrice.toLocaleString()}원`
        // 장바구니 숫자
        cartCount.textContent = `${totalCount}`
    }
})