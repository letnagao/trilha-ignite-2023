import fastify from "fastify";
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

/**
 * HTTP: Get, Post, Put, Patch, Delete
 */

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Drink'
            }
        }    
    })

    return habits
})

app.listen({
    port: 3333, 
}).then(() => {
    console.log('HTTP Server Running!')
})