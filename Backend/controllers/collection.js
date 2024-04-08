const CustomError =  require("../utils/customErrorClass");
const httpstatus = require("../utils/httpstatus");
const logger = require("../utils/loggerUtil");



const {
    saveCollection,
    getCollection,
    getCollectionById,
    updateCollection,
    deleteCollection

} = require("../helpers/collection");

exports.saveCollection = async(req,res,next) => {
    try{
        const data = req.body
        const collection = await saveCollection(data);
        res.status(httpstatus.OK).json({
            collection,
        })

    }catch(error){
        logger.error(error);
        next(new CustomError(500, error));
    }
   
};

exports.getCollection = async(req,res, next) => {
    try{
        const collection = await getCollection();
        res.status(httpstatus.OK).json({
            collections: collection,
        })

    }catch(error) {
        logger.error(error);
        next(new CustomError(500, error));
    }
};

exports.getCollectionById = async(req,res,next) => {
    try{
        const collection = await getCollectionById(req.params.id);
        res.status(httpstatus.OK).json({
            message:"collection found",
            collection,
        })

    }catch(error) {
        logger.error(error);
        next(new CustomError(500, error));
    }
};

exports.updateCollection = async(req,res,next) => {
        try{
            const collection = await updateCollection(req.params.id, req.body);
            res.status(httpstatus.OK).json({
                message:"collection updated successfully",
                collection,
            })


        }catch(error){
            logger.error(error);
            next(new CustomError(500, error));
        }
};

exports.deleteCollection = async(req, res, next) => {
    try{
        const collection = await deleteCollection(req.params.id);
        res.status(httpstatus.OK).json({
            message:"collection removed successfully",
            collection,
        })

    }catch(error){
        logger.error(error);
        next(new CustomError(500, error));
    }
};




