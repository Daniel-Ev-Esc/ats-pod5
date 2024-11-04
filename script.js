function changeOverlay(){
    document.getElementById("modal-overlay").classList.toggle("active-overlay")
}

function changeNewForm(){
    document.getElementById("new-form").classList.toggle("active-modal")
    changeOverlay()
}

function changeEditForm(){
    document.getElementById("edit-form").classList.toggle("active-modal")
    changeOverlay()
}

function changeDeleteForm(){
    document.getElementById("delete-form").classList.toggle("active-modal")
    changeOverlay()
}

document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll(".filter-button")
    buttons.forEach( button => {
        button.addEventListener('click', ()=>{
        buttons.forEach(btn => btn.classList.remove('active'))
    
        button.classList.add('active')
        })
    })
})




