const DYNAMIC_JSON = "http://209.237.141.92:30120/dynamic.json"

const getPlayers = async () =>  await fetch(DYNAMIC_JSON, {
        method: "GET",
        redirect: "follow",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        }
    })
    .then(res => res)
    .then(data => console.log(data))
    .catch(err => {
        console.log(err)
        return null
    })

const updatePlayers = async () => {
    const players = await getPlayers()
    console.log(players)
}

updatePlayers()