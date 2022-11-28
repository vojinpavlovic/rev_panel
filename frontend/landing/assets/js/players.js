const DYNAMIC_JSON = "https://api.revolucija-roleplay.com/api/server/dynamic"

const getPlayers = async () =>  await fetch(DYNAMIC_JSON, {
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
    const players = await getPlayers()
    console.log(players)
}

updatePlayers()