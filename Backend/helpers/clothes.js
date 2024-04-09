const prisma = require("../utils/prisma");

const saveClothes = async(data) => {    
    const clothes = await prisma.clothes.create({
        data,
    })
    return clothes
};

const getClothes = async () =>{
    const clothes = await prisma.clothes.findMany({});
    return clothes
};

const getsingleClothe = async(id) =>{
    const clothe = await prisma.clothe.findUnique({
        where: {
            id,
        }
    })
    return clothe
};

const updateClothe = async(id, data) =>{
    const clothe = await prisma.clothe.update({
        where: {
            id,
        },
        data,
    })
    return clothe
};

const removeClothe = async(id) =>{
    const clothe = await prisma.clothe.delete({
        where: {
            id,
        },
    })
    return clothe
};

module.exports = {
    saveClothes,
    getClothes,
    getsingleClothe,
    updateClothe,
    removeClothe,
};