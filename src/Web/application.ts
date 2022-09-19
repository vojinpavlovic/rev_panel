import * as express from 'express'
import { InversifyExpressServer } from 'inversify-express-utils'
import { container } from '../IoC'

export class App {
    private readonly port: number = parseInt(<string>process.env.PORT ?? 3000)

    async setup() {
        const server: InversifyExpressServer = new InversifyExpressServer(container)
        server.setConfig(app => app.use(express.json()))
        const app: express.Application = server.build()
        app.listen(this.port, () => console.log([`Server listening on port ${this.port}`]))
    }
}
