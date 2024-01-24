import express from "express"
import { getPayloadClient } from "./get-paylod"
import { nextApp, nextHanler } from "./next-utils"
import * as trpcExpress from '@trpc/server/adapters/express'
import { appRouter } from "./trpc"

const app = express()
const PORT = Number(process.env.PORT) || 3000
const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({
    req, res
})

const start = async () => {
    const payload = await getPayloadClient({
        initOptions: {
            express: app,
            onInit: async (cms: any) => {
                cms.logger.info(`admin url ${cms.getAdminURL()}`)

            }
        }
    })


    app.use("/api/trpc", trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext
    }))

    app.use((req: any, res: any) => nextHanler(req, res))

    nextApp.prepare().then(() => {
        payload.logger.info("next js start")

        app.listen(PORT, async () => {
            payload.logger.info(`next.js app url ${process.env.NEXT_PUBLIC_SERVER_URL}`)

        })
    })



}

start()