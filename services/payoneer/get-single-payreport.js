const gateway = require('./client');

module.exports = async(payeeId) => {
  try {
    const result = await gateway.getSinglePayeeReport(payeeId);
    console.log('Result = ', result);
    return result;
  } catch (error) {
    console.log('error occur', error);
    return {error};
  }
}
