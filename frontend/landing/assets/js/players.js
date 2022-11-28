const DYNAMIC_JSON = "https://api.revolucija-roleplay.com/api/server/dynamic"
const PLAYERS_JSON = "https://api.revolucija-roleplay.com/api/server/players"

const getDynamic = async () =>  await fetch(DYNAMIC_JSON, {
        method: "GET",
        redirect: "follow",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(err => {
        return null
    })

const getPlayers = async () =>  await fetch(PLAYERS_JSON, {
        method: "GET",
        redirect: "follow",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(err => {
        return null
    })

const updatePlayers = async () => {
    const dynamic = await getDynamic()
    const field = document.getElementById("player-count")

    if (dynamic.status && dynamic.data) {
        field.innerHTML = `${dynamic.data.clients} / ${dynamic.data.maxClients}`
    }
}

const updatePlayersSide = async () => {
    const players = await getPlayers()

    if (players.status && players.data) {
        for (const key of players.data) {
            const {name, ping} = players.data[key]
            $("#player-list").append(`
                <div class="item">
                    <p>${name}</p>
                    <span>${ping}</span>
                </div>
            `)
        }
    }
}

updatePlayers()

setInterval(() => {
    updatePlayersSide();
    updatePlayers();
}, 8000);