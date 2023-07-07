class AlunosView {
    constructor(table, materias) {
        this.tablelist = table
        this.tableHeader = this.tablelist.querySelector("thead")
        this.tableBody = this.tablelist.querySelector("tbody")
        this.materias = materias

        this.renderHeader()
    }

    renderHeader() {
        const htmlHeader = document.createElement("tr")
        htmlHeader.innerHTML = "<td>Nome</td>"

        let htmlHeaderMaterias = this.materias.map(materia => {
            return `<td>${materia}</td>`
        }).join("")

        htmlHeader.innerHTML += htmlHeaderMaterias

        this.tableHeader.appendChild(htmlHeader)
    }


    render(alunos) {
        this.tableBody.innerHTML = ""
        alunos.forEach(aluno => {
            const htmlBody = document.createElement("tr")
            let htmlMedias = `<td>${aluno.nome}</td>`
            let encontrado = false

            this.materias.forEach(materias => {
                if(materias in aluno.notas){
                    encontrado = true
                }
            })

            if(encontrado){
                this.materias.forEach(materia => {
                    htmlMedias += `<td>${aluno.media[materia] != undefined ? aluno.media[materia] : `<a href="edit.html?id=${aluno._id}">Incluir nota</a>`}</td>`
                })
            } else {
                htmlMedias += `<td colspan="${this.materias.length}"><a href="edit.html?id=${aluno._id}">Incluir notas</a></td>`
            }



            htmlBody.innerHTML = htmlMedias
            this.tableBody.appendChild(htmlBody)
        })
    }
}