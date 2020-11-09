(function (){
    var inputadressEmail= document.getElementById("inputemail")
    var texterrorEmail= document.getElementById("texterror")
    var buttonNotify= document.getElementById("buttonnotify")

    buttonNotify.addEventListener("click", function (){
        var email= inputadressEmail.value
        var match= email.match(/[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]+/)

        if(!match) {
            inputadressEmail.classList.add("inputinvalid")
            inputadressEmail.classList.remove("none")
            texterrorEmail.classList.remove("emailvalid")
        }

        else {
            inputadressEmail.classList.remove("inputinvalid")
            inputadressEmail.classList.add("none")
            texterrorEmail.classList.add("emailvalid")
            inputadressEmail.value=""
        }
    })

})()