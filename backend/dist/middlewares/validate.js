"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = exports.validate = void 0;
// validate method provided by Joi package
const validate = (schema, data) => {
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
        const messages = error.details.map((detail) => detail.message);
        throw new Error(`Validation error: ${messages.join(", ")}`);
    }
};
exports.validate = validate;
// run validate method against received data
// provided as middleware function
const validateRequest = (schema) => {
    return (req, res, next) => {
        try {
            const data = {
                ...req.body,
                ...req.params,
                ...req.query,
            };
            (0, exports.validate)(schema, data);
            // invoke next middleware if no error is caught
            next();
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
};
exports.validateRequest = validateRequest;
