const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0',
    'Accept': 'application/json',
    'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
    'Accept-Encoding': 'gzip, deflate',
    'Referer': 'https://cartolaexpress.globo.com/',
    'Content-Type': 'application/json',
    'Authorization': token,
    'Origin': 'https://cartolaexpress.globo.com',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'If-None-Match': 'W/"dde-K8L5n5Cu1IkJcmMeG1Emv4i8+N8"',
    'Te': 'trailers'
}

let arrayPlayers = []
let playersDB

async function getPlayers() {
    try {
        const idTorneio = getID()
        const res = await api.get(`tournaments/${idTorneio}/players?`, headers)
        const players = res.data.playerChoices
        
        const dbPlayers = setDB(players)
        playersDB = [...dbPlayers]
        adicionaElementos(dbPlayers)
    }
    catch {
        console.log('Erro: ', error)
    }

}

function setDB(players) {
    const dbPlayers = players.map(player => {
        if (player.realPlayer.firstName !== null && player.realPlayer.lastName !== null) {
            return {
                name: `${player.realPlayer.firstName} ${player.realPlayer.lastName}`,
                id: player.realPlayerId,
                price: player.price
            };
        } else if (player.realPlayer.firstName !== null) {
            return {
                name: `${player.realPlayer.firstName}`,
                id: player.realPlayerId,
                price: player.price
            };
        } else {
            return {
                name: `${player.realPlayer.lastName}`,
                id: player.realPlayerId,
                price: player.price
            }
        }
    })

    return dbPlayers
}


function getID() {
    const id = Number(document.getElementById('id-input').value)
    
    return id
}

function adicionaElementos(players) {

    players.sort((a,b) => b.price - a.price)

    players.forEach(player => {

        const tbody = document.getElementById('table-body')
        const tr = document.createElement('tr')
        tr.id = `check-${player.id}`
        const tdID = document.createElement('td')
        tdID.innerHTML = player.id
        const tdName = document.createElement('td')
        tdName.innerHTML = player.name
        const tdPrice = document.createElement('td')
        tdPrice.innerHTML = player.price
        const tdPra = document.createElement('td')
        tdPra.innerHTML = `<input class="form-control form-control-sm form-pra" id="input-${player.id}" type="text" placeholder="PRA" aria-label=".form-control-sm example">`
        const tdBtn = document.createElement('td')
        const btn = document.createElement('button')
        btn.setAttribute('type', 'button')
        btn.setAttribute('onclick', `addArray(playersDB, ${player.id})`)
        btn.classList.add('btn')
        btn.classList.add('btn-primary')
        btn.classList.add('btn-sm')
        btn.classList.add('blue')
        btn.innerText = 'Add'


        tbody.appendChild(tr)
        tr.appendChild(tdID)
        tr.appendChild(tdName)
        tr.appendChild(tdPrice)
        tr.appendChild(tdPra)
        tr.appendChild(tdBtn)
        tdBtn.appendChild(btn)

    })
}

function addArray(players, id) {
        const pra = Number(document.getElementById(`input-${id}`).value)
        const player = players.find(player => player.id === id)
        const eachPlayer = [player.id, player.price, pra, player.name]
        arrayPlayers.push(eachPlayer)
        const tr = document.getElementById(`check-${player.id}`)
        const tdCheck = document.createElement('td')
        tdCheck.innerHTML = `<i class="fa-solid fa-check"></i>`
        tr.appendChild(tdCheck)
}

function downloadArray() {
    arrayPlayers.sort((a,b) => b.pra - a.pra)
    const jsonString = JSON.stringify(arrayPlayers, null, 2)
    const blob = new Blob([jsonString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'arrayPlayers.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
}


