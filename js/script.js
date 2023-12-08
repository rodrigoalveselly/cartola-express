const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0',
    'Accept': 'application/json',
    'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
    'Accept-Encoding': 'gzip, deflate',
    'Referer': 'https://cartolaexpress.globo.com/',
    'Content-Type': 'application/json',
    'Authorization': "Bearer cartola eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdhZjVjNmNjLTA2YTAtNDA0NS1iMWIyLWMwMzBjMGU2ZWYxYiIsImlhdCI6MTY4MTkzMjkyMSwibmFtZSI6InJvdWRyaWdvIiwidXNlcm5hbWUiOiJyb3VkcmlnbyIsInJvbGUiOiJ1c2VyIiwiaWRfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0lnT2lBaVNsZFVJaXdpYTJsa0lpQTZJQ0pYTFVwcFRqaGZaWGR5V0U5dVZuSkZOMmxmT0dwSVkyOHlVMVI0ZEV0SFpGOTRhVzAxUjJONFdTMVpJbjAuZXlKbGVIQWlPakUyT0RFNU16TXlNakVzSW1saGRDSTZNVFk0TVRrek1qa3lNU3dpWVhWMGFGOTBhVzFsSWpveE5qZ3hPVE15T1RJd0xDSnFkR2tpT2lKbU1UWXlabVF4WkMweVpqa3lMVFJpTURNdFltWXhPUzB3TnpNeU1XRTBZbU5sTURRaUxDSnBjM01pT2lKb2RIUndjem92TDJsa0xtZHNiMkp2TG1OdmJTOWhkWFJvTDNKbFlXeHRjeTluYkc5aWJ5NWpiMjBpTENKaGRXUWlPaUp6WTI5MWRHZGhiV2x1WjBCaGNIQnpMbWRzYjJKdmFXUWlMQ0p6ZFdJaU9pSm1Pak5qWkdWaE1XWmlMVEF3TW1ZdE5EZzVaUzFpT1dNeUxXUTFOMkZpWVRCaFpUUTVORG8zWVdZMVl6WmpZeTB3Tm1Fd0xUUXdORFV0WWpGaU1pMWpNRE13WXpCbE5tVm1NV0lpTENKMGVYQWlPaUpKUkNJc0ltRjZjQ0k2SW5OamIzVjBaMkZ0YVc1blFHRndjSE11WjJ4dlltOXBaQ0lzSW5ObGMzTnBiMjVmYzNSaGRHVWlPaUl3TWpSallUVmpZUzB6TUROaUxUUXlPVEV0WW1ZeE9TMWhNRFkyWVdVMk4yVm1PR1lpTENKaGRGOW9ZWE5vSWpvaU5XVkdjSFZMYzBSa1RWa3hVM05IU25GMFdrZDZVU0lzSW1GamNpSTZJakVpTENKemFXUWlPaUl3TWpSallUVmpZUzB6TUROaUxUUXlPVEV0WW1ZeE9TMWhNRFkyWVdVMk4yVm1PR1lpTENKbmJHOWliMTlwWkNJNklqZGhaalZqTm1OakxUQTJZVEF0TkRBME5TMWlNV0l5TFdNd016QmpNR1UyWldZeFlpSjkuSVZOQ2s1dnVkRlVJa0FGV1NHb0V1WFZPcHR4ZFBzX2pLQmstOGl5b2ZzWTFYSEpGOG1RU1V2blpVREtCTFp2SW9pU0lIVFFwM2tyZTlLVXdwU09BWUpscE92SnFjdjQ4NlpkTHdDLVpaeXA3UE9NY1pYNkttd2QwbzFCZlRHRmo1eWRoUFRpbWVtZEZFNTZGOC1PYzVlNklEelQ5TFBpQzRKcXhEeGRNdVJGRDkzUG9tcE1Pc0h5X0p2SUd2LXlQX0VpazZNQ0Y1TzVYSll3Rk00dDJzcDVWRXE3UXhiWE4yNGtPb005ZmlxaTJRZ1U4QTQ1WTFBLWJTWHFWUlhvSTFoRTMxYTlBd3RmY3hLWnpCVVFUajUzSmlLTjNOTHRzc0NVNXE0SUdBNjV6OVRDQTRDR1d5elUzeC1pcnpQRmZMdGN0NWtEZm1aa1hha190d0xQeWVBIiwiYWNjZXNzX3Rva2VuIjoiZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJZ09pQWlTbGRVSWl3aWEybGtJaUE2SUNKWExVcHBUamhmWlhkeVdFOXVWbkpGTjJsZk9HcElZMjh5VTFSNGRFdEhaRjk0YVcwMVIyTjRXUzFaSW4wLmV5SmxlSEFpT2pFMk9ERTVNek15TWpFc0ltbGhkQ0k2TVRZNE1Ua3pNamt5TVN3aVlYVjBhRjkwYVcxbElqb3hOamd4T1RNeU9USXdMQ0pxZEdraU9pSTVOV013WmpkbFl5MWhaRGRpTFRSbE0yUXRZVFZsWkMwMFkyTmhNRE5oT1dFd1lXVWlMQ0pwYzNNaU9pSm9kSFJ3Y3pvdkwybGtMbWRzYjJKdkxtTnZiUzloZFhSb0wzSmxZV3h0Y3k5bmJHOWlieTVqYjIwaUxDSnpkV0lpT2lKbU9qTmpaR1ZoTVdaaUxUQXdNbVl0TkRnNVpTMWlPV015TFdRMU4yRmlZVEJoWlRRNU5EbzNZV1kxWXpaall5MHdObUV3TFRRd05EVXRZakZpTWkxak1ETXdZekJsTm1WbU1XSWlMQ0owZVhBaU9pSkNaV0Z5WlhJaUxDSmhlbkFpT2lKelkyOTFkR2RoYldsdVowQmhjSEJ6TG1kc2IySnZhV1FpTENKelpYTnphVzl1WDNOMFlYUmxJam9pTURJMFkyRTFZMkV0TXpBellpMDBNamt4TFdKbU1Ua3RZVEEyTm1GbE5qZGxaamhtSWl3aVlXTnlJam9pTVNJc0luTmpiM0JsSWpvaWIzQmxibWxrSUdkc2IySnZhV1FpTENKemFXUWlPaUl3TWpSallUVmpZUzB6TUROaUxUUXlPVEV0WW1ZeE9TMWhNRFkyWVdVMk4yVm1PR1lpTENKbmJHOWliMTlwWkNJNklqZGhaalZqTm1OakxUQTJZVEF0TkRBME5TMWlNV0l5TFdNd016QmpNR1UyWldZeFlpSjkuS2RFSGpibGlzUkVHX3B1NGxmaUxMbUlzRFoxTWlvTzFWRGpGVl9nLTJkaTE0RXZOSjFMZEFfdGFHMEVQdXJEWFFhdWNJSnpncmFfa2NIc3VSa28zcktqNktvVGNtM0p0Sk02aVJYV1h2aUhnTFJidWRQamt0MUxBTkZONVRMb2c0U0drTW12ZXVPaUVBcUs3NUhER0xTcldyNFJiRnBXRVh2Um9iWk5rRmRSYjJudlZYejlZZzZsUUFWZEM3V05NY3Y4T1NlUDlld0czb002NklfSUp5S2JWS1h0QWVIVjlMZ080UWlxenp1cUJlX2Rxdjd5TkR4VmJFTVNFVW52N29vQjd0TTdKTVlPSmVsOTVFUWo0MWJtTkE3M2NENnFwb3VuelRNMXJTT01BQUFWeFlEVzZXZ2hmb2J0dmRJMW5VQ3NIQnRGVFE1R0ZVUFJBYXd2ZVlnIn0.TTQx_9C5iwmEXtFIwZz02IShX8v9yeF7qdifSCHa95w",
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


