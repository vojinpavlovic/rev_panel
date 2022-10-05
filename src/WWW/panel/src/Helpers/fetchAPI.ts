import sleep from "../Utils/Sleep";

const baseUrl: string = "http://localhost:3001/"

const headers: Object = {
    "Content-Type": "application/json"
}

type ApiType = {
    endpoint: string;
    method?: "GET" | "POST",
    credentials?: boolean;
    body?: any;
}

const fetchAPI = async({endpoint, method, credentials, body}: ApiType) => {
    var options: any = {}
    options['headers'] = headers
    options['method'] = method || "GET"
    if (credentials) options['credentials'] = credentials
    if (body) options['body'] = JSON.stringify(body)

    const t1: number = new Date().getTime();
    const response = await fetch(`${baseUrl}${endpoint}`, options)
    const t2: number = new Date().getTime();
  
    const totalTime: number = Math.abs(Math.floor(t1 - t2))

    if (t1 - t2 <= 300) await sleep(1000 - totalTime)

    return (await response.json())
}

export default fetchAPI;