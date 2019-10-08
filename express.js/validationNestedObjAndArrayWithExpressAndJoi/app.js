const Joi = require('@hapi/joi');

const arrString = ['thingOne', 'thingTwo', 'thingThree', 'thingFour'];
const arrObj = [{
    example: 'example1'
}, {
    example: 'example2'
}, {
    example: 'example3'
}, {
    example: 'example4'
}];
const userInput = {
    personalInfo: {
        streetAddress: '323254',
        city: 'Seattle',
        state: 'WAer'
    },
    preferences: arrString,
    // preferences: arrObj,
};

const personalInfoSchema = Joi.object().keys({
    streetAddress: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().length(2).required()
});
const preferencesSchema = Joi.array().items(Joi.string());
// const preferencesSchema = Joi.array().items(Joi.object().keys({
//     example: Joi.string().required()
// }));

const schema = Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema,
})

// Joi.assert(userInput, schema)
console.log('userInput: ', userInput, '\n');
console.log(Joi.assert(userInput, schema) === undefined ? "Input been validated successfully!" : Joi.assert(userInput, schema));