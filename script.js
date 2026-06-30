let idades = [18, 20, 12, 13, 15, 86]

let precos = []

function array00(){

    let i = 0
    // console.log("idade: " + idades[i])

    // console.log("idade: " + idades[0])
    // console.log("idade: " + idades[1])
    // console.log("idade: " + idades[2])
    // console.log("idade: " + idades[3])
    // console.log("idade: " + idades[4])
    // console.log("idade: " + idades[5])
    
    for(i = 0; i <idades.length; i++){
        console.log("idade: " + idades[i])


    }

    // precos.push[2]
    //precos[2]
    // precos.push[4]
    //precos[2, 4]
}

function array01(){
    let n = Math.ceil(Math.random() * 100)

    precos.push(n)

    // console.log(precos)
    
    document.getElementById("lista_precos").innerHTML = ("")
    for(let i=0; i<precos.length; i++){
        console.log(precos[i]);

        document.getElementById("lista_precos").innerHTML += (precos[i] + " - ")
    }
    
}