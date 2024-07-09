function calcular() {
    // ENTRADA DE VALORES
    let qhomem = document.getElementById('qhomem').value
    let qmulher = document.getElementById('qmulher').value
    let qcrianca = document.getElementById('qcrianca').value
    

    // TIPO DO ITEM | QUANTIDADE
    
    // Bovino
    hbovino = qhomem * 500 
    mbovino = qmulher * 300 
    cbovino = qcrianca * 200
    bovinokg = (hbovino+ mbovino + cbovino) / 1000
    
    // Frango
    hfrango = qhomem * 200
    mfrango = qmulher * 200
    cfrango = qcrianca * 100
    frangokg = (hfrango + mfrango + cfrango) / 1000

    // Linguica
    hlinguica = qhomem * 200
    mlinguica = qmulher * 200
    clinguica= qcrianca * 200
    linguicakg = (hlinguica + mlinguica + clinguica) / 1000

    // Refrigerante
    hrefri = qhomem * 300
    mrefri = qmulher * 400
    crefri= qcrianca * 200
    refril = (hrefri + mrefri + crefri) / 1000

    // Cerveja
    hcerveja = qhomem * 800
    mcerveja = qmulher * 500
    cervejal = (hcerveja + mcerveja) / 1000


    // MOSTRAR NO HTML

    let msgc = document.getElementById('msgc')
    msgc.innerHTML = ''
    
    // Mensagem principal
    let mensagem = document.getElementById('mensagem')
    mensagem.innerHTML = 'Quantidade de intens a serem comprados:'

    // Bovinos
    var bovino = document.getElementById('bovino')
    bovino.innerHTML = `> ${bovinokg}Kg de carne bovina <`

    // Frango
    var frango = document.getElementById('frango')
    frango.innerHTML = `> ${frangokg}Kg de carne frango <`

    // Linguica
    var linguica = document.getElementById('linguica')
    linguica.innerHTML = `> ${linguicakg}Kg de carne linguica <`

    // Refrigerante
    var refri = document.getElementById('refri')
    refri.innerHTML = `> ${refril}L de refrigerante <`

    // Cerveja
    var cerveja = document.getElementById('cerveja')
    cerveja.innerHTML = `> ${cervejal}L de cerveja <`
}