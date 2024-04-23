const CustomError = require("../utils/customErrorClass");
const httpstatus = require("../utils/httpstatus");
const logger = require("../utils/loggerUtil");
const cloudinary = require("../utils/cloudinary");

const {
    addCollection,
    getCollection,
    getSingleCollection,
    editCollection,
    removeCollection,

} = require("../helpers/collection");


exports.saveCollection= async (req, res, next) => {
  try {
    const data = req.body;
    const collection = await addCollection(data);
    res.status(httpstatus.OK).json({
      collection,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(500, error));
  }
};

exports.getCollection = async (req, res, next) => {
  try {
    const collection = await getCollection();
    res.status(httpstatus.OK).json({
      collection,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(500, error));
  }
};

exports.getSingleCollection = async (req, res, next) => {
  try {
    const { id } = req.param;
    const collection = await getSingleCollection(req.params.id);
    res.status(httpstatus.OK).json({
      collection,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(500, error));
  }
};

exports.editCollection = async (req, res, next) => {
  try {
    const { id } = req.param;
    const data = req.body;
    const collection = await editCollection(req.params.id, req.body);
    res.status(httpstatus.OK).json({
      collection,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(500, error));
  }
};
exports.removeCollection = async (req, res, next) => {
  try {
    const collection = await removeCollection(req.params.id);
    res.status(httpstatus.OK).json({
      collection,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(500, error));
  }
};
