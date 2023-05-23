(function () {
    'use strict'
    const container = document.querySelector(".formCadastro__container")
    const title = document.querySelector("#txtTitulo")
    const description = document.querySelector("#txtDescricao")
    const counter = document.querySelector("#contador span")
    const checkBtn = document.querySelector("#chkAceito")
    const submitBtn = document.querySelector("#btn")

    description.addEventListener("input", function () {
        counter.textContent = 255 - description.value.length
    })

    container.addEventListener("click", function (e) {
        if (e.target === checkBtn) {
            e.target.checked ? submitBtn.disabled = false : submitBtn.disabled = true
        }
        if (e.target === submitBtn) {
            if (!title.value || !description.value) {
                alert("Preencha todos os campos")
                e.preventDefault()
                title.focus()
            }
        }
    })
})()