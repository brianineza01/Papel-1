import Joi from 'joi';

const accountValidator = (req, res, next) => {
  const schema = {

    date: Joi.date().iso().required(),
    type: Joi.string().alphanum({ minDomainSegments: 2 }).required(),

  };
  const { error } = Joi.validate(req.body, schema);
  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
  }
  next();
  
};

export default accountValidator;