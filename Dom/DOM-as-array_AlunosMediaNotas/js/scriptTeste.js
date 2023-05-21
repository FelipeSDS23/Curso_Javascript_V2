(function(){
    let alunos = document.querySelectorAll(".striped > tbody > tr")
    alunos = Array.from(alunos)

    for (let a = 0; a < alunos.length; a++){
        let aluno = alunos[a].querySelectorAll("td")
        let notas = []
        for (let n = 1; n < aluno.length; n++){
            let dados = Number(aluno[n].innerText)
            notas.push(dados)
            if(n === aluno.length - 1){
                aluno[5].innerText = avarege(...notas).toFixed(1)
            }
        }
    }
})()