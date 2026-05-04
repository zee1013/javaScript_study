$(function(){
    let chk = $("#chk")
    // console.log(chk);
    if($.cookie("popup") !== "none"){
        $(".notice_wrap").fadeIn("fast")
    }
    
    $(".closeBtn").click(function(){
        // console.log("click");
        if(chk.is(":checked")){
            console.log(chk.is(":checked"));
            
            $.cookie("popup" , "none" , {expires:3, path:"/"})
        }
        $(".notice_wrap").fadeOut("fast")
    })
    
})