const DYNAMIC_JSON = "https://api.revolucija-roleplay.com/api/server/dynamic"

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

const updatePlayers = async () => {
    const dynamic = await getDynamic()
    const field = document.getElementById("player-count")

    if (dynamic.status && dynamic.data) {
        field.innerHTML = `${dynamic.data.clients} / ${dynamic.data.maxClients}`
    }
}

updatePlayers()

setInterval(() => {
    updatePlayers()
}, 8000);