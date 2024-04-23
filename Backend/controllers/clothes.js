const CustomError =  require("../utils/customErrorClass");
const httpstatus = require("../utils/httpstatus");
const logger = require("../utils/loggerUtil");

const cloudinary = require("../utils/cloudinary");


const {
    saveClothes,
    getClothes,
    getsingleClothe,
    updateClothe,
    removeClothe,
   

} = require("../helpers/clothes");

exports.saveClothes= async(req,res,next) => {
    try {
        const data = req.body;
        const image = req.file ? req.file.path : undefined;
        if (image) {
          const uploaded = await cloudinary.uploader.upload(image, {
            folder: "images",
          });
          if (uploaded) {
            data.image = uploaded.secure_url;
          }
        }
        const collection = await saveClothes(data);
    
        res.status(httpstatus.OK).json({
          collection,
        });
      } catch (error) {
        logger.error(error);
        next(new CustomError(500, error));
      }
};

exports.getClothes = async(req,res, next) => {
    try{
        const clothes = await getClothes();
        res.status(httpstatus.OK).json({
            clothes: clothes,
        })

    }catch(error) {
        logger.error(error);
        next(new CustomError(500, error));
    }
};

exports.getsingleClothe = async(req,res,next) => {
    try{
        const clothe = await getsingleClothe(req.params.id);
        res.status(httpstatus.OK).json({
            message:"clothe found",
            clothe
        })

    }catch(error) {
        logger.error(error);
        next(new CustomError(500, error));
    }
};

exports.updateClothe = async(req,res,next) => {
        try{
            const clothe = await updateClothe(req.params.id, req.body);
            res.status(httpstatus.OK).json({
                message:"clothe updated successfully",
                clothe,
            })


        }catch(error){
            logger.error(error);
            next(new CustomError(500, error));
        }
};

exports.removeClothe = async(req, res, next) => {
    try{
        const clothe = await removeClothe(req.params.id);
        res.status(httpstatus.OK).json({
            message:"clothe removed successfully",
            clothe,
        })

    }catch(error){
        logger.error(error);
        next(new CustomError(500, error));
    }
};




