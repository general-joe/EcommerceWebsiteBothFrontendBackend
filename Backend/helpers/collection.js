const prisma = require("../utils/prismaUtil");
const addCollection= async (data) => {
  return await prisma.collection.create({
    data,
  });
};

const getCollection = async () => {
  const collection = await prisma.collection.findMany({
    orderBy: {
      createdAT: "desc",
    },
    include:{      
        clothes: true
    }
  });
  return collection;
};
const getSingleCollection= async (id) => {
  const collection = await prisma.collection.findUnique({
    where: {
      id,
    },
  });
  return collection;
};

const editCollection = async (id, data) => {
  const collection = await prisma.collection.update({
    where: {
      id,
    },
    data,
  });
  return collection;
};
const removeCollection = async (id) => {
  const collection = await prisma.collection.delete({
    where: {
      id
    },
  });
  return collection;
};


module.exports = {
    addCollection,
    getCollection,
    getSingleCollection,
    editCollection,
    removeCollection,
 
};
