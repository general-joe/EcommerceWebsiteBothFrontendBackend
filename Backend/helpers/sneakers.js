const prisma = require ("../utils/prismaUtils")

const addSneakers = async(data) =>{ 
    const sneakers = await prisma.sneakers.create({
        data,
    })
    return sneakers;
};

const getSneakers = async() =>{ 
    const sneakers = await prisma.sneakers.findMany();
    return sneakers;
};

const getSneakersById = async(id) =>{
    const sneakers = await prisma.findUnique({
        where:{
            id,
        }
    })
    return sneakers;
};

const editSneakers = async(id, data) =>{
    const sneakers = await prisma.sneakers.update({
        where:{
            id,
        },
        data,
    })
    return sneakers;
};

const removeSneakers = async(id) =>{
    const sneakers = await prisma.sneakers.delete({
        where:{
            id,
        },
    })
    return sneakers;
};

module.exports = {
    addSneakers,
    getSneakers,
    getSneakersById,
    editSneakers,
    removeSneakers,
};