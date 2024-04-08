const prisma = require("../utils/prismaUtil");

const saveCollection = async(data) => {
    const collection = await prisma.collection.create({
        data,
    })
    return collection
};

const getCollection = async() => {
    const collection = await prisma.collection.findMany();
    return collection
};

const getCollectionById = async(id) => {
    const collection = await prisma.findUnique({
        where:{
            id,
        }
    })
    return collection
};
const updateCollection = async(id, data) => {
    const collection = await prisma.collection.update({
        where:{
            id,
        },
        data,
    })
    return collection
};
const deleteCollection = async(id) => {
    const collection = await prisma.collection.delete({
        where:{
            id,
        }
    });
    return collection
};


module.exports = {
    saveCollection,
    getCollection,
    getCollectionById,
    updateCollection,
    deleteCollection,

}