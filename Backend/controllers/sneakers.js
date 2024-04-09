const CustomError = require("../utils/customErrorClass");
const httpstatus = require("../utils/httpstatus");
const logger = require("../utils/loggerUtil");

const  {
    addSneakers,
    getSneakers,
    getSneakersById,
    editSneakers,
    removeSneakers


} = require("../helpers/sneakers");

exports.addSneakers = async(req,res,next) => {
    try{
        const data = req.body
        const sneakers = await addSneakers(data);
        res.status(httpstatus.OK).json({
            sneakers,
        })

    }catch(error){
        logger.error(error);
        next(new CustomError(500, error));
    }
   
};

exports.getSneakers = async(req,res, next) => {
    try{
        const sneakers = await getSneakers();
        res.status(httpstatus.OK).json({
            sneakers,
        })

    }catch(error) {
        logger.error(error);
        next(new CustomError(500, error));
    }
};

exports.getSneakersById = async(req,res,next) => {
    try{
        const sneakers = await getSneakersById(req.params.id);
        res.status(httpstatus.OK).json({
            message:"sneakers  found",
            sneakers 
        })

    }catch(error) {
        logger.error(error);
        next(new CustomError(500, error));
    }
};

exports.editSneakers = async(req,res,next) => {
        try{
            const sneakers  = await editSneakers(req.params.id, req.body);
            res.status(httpstatus.OK).json({
                message:"sneakers  updated successfully",
                sneakers,
            })


        }catch(error){
            logger.error(error);
            next(new CustomError(500, error));
        }
};

exports.removeSneakers = async(req, res, next) => {
    try{
        const sneakers  = await removeSneakers(req.params.id);
        res.status(httpstatus.OK).json({
            message:"sneakers  removed successfully",
            sneakers ,
        })

    }catch(error){
        logger.error(error);
        next(new CustomError(500, error));
    }
};




