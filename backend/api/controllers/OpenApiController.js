const openApi = require('../../public/openapi.json');

exports.getOpenApi = (req, res) => {
    let response = {status: "OK", message: "Uspješno dohvaćen OpenApi", response: openApi};
    res.status(200).json(response);
}