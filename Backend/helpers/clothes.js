const prisma = require ("../utils/prismaUtil");


const saveClothe =  async(data)=>{
    const clothe = await prisma.clothe.create({
        data,
    })
    return clothe
}

const getClothe = async(id)=>{
    const clothe =  await prisma.clothe.findUnique({
        where:{
            id
        }
    })
    return clothe
}

const getClothes = async()=>{
    const clothes =  await prisma.clothe.findMany({
        where:{
            orderBy:{
                createdAt:'desc'
            }
        }
    })
    return clothes
}

const deleteClothe = async(id)=>{
    const clothe =  await prisma.clothe.delete({
        where:{
            id
        }
    })
    return clothe   
}
const patchClothe = async (id,data)=>{
    const clothe =  await prisma.clothe.update({
        where:{
            id
        },
        data
    })
    return clothe
}
module.exports = {
    saveClothe,
    getClothe,
    getClothes,
            
    deleteClothe,
    patchClothe                     

}