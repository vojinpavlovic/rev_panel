import sleep from "../Utils/Sleep";

const baseUrl: string = "http://localhost:3001/"

type ApiType = {
    endpoint: string;
    method?: "GET" | "POST",
    credentials?: boolean;
    body?: any;
}

const fetchAPI = async({endpoint, method, credentials, body}: ApiType) => {
    const t1: number = new Date().getTime();
    const response = await fetch(`${baseUrl}${endpoint}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: method || "GET",
        credentials: "include"
    })

    const t2: number = new Date().getTime();
    
    const totalTime: number = Math.abs(Math.floor(t1 - t2))
    
    if (t1 - t2 <= 300) await sleep(1000 - totalTime)

    return (await response.json())
}

export default fetchAPI;