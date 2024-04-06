const prisma = require("../utils/prismaUtil");

const addClient = async(data)=>{

    const client = await prisma.client.create(
        {
            data,
        }
    )
    return client;
};








module.exports = {
    addClient,
}