export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Ticketera Api',
            version: '1.0.0',
            description: 'Tickets management project'
        },
        servers: [
            {
                url: "http//localhost:3000"
            }
        ]
    },
    apis: ["./src/routes/*.ts"]
}