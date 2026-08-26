import { BadRequestError } from "./errors.js";
import { respondWithJSON } from "./json.js";
export async function handlerValidateChirp(req, res) {
    const params = req.body;
    const profraneWords = ["kerfuffle", "sharbert", "fornax"];
    let paramsBody = params.body;
    for (const word of profraneWords) {
        if (paramsBody.toLowerCase().includes(word)) {
            let paramsBodyAsWordsArray = paramsBody.split(" ");
            paramsBodyAsWordsArray.forEach((wordInArray, index) => {
                if (wordInArray.toLowerCase() === word) {
                    paramsBodyAsWordsArray[index] = "****";
                }
            });
            paramsBody = paramsBodyAsWordsArray.join(" ");
        }
    }
    const maxChirpLength = 140;
    if (params.body.length > maxChirpLength) {
        throw new BadRequestError(`Chirp is too long. Max length is ${maxChirpLength}`);
    }
    respondWithJSON(res, 200, { cleanedBody: paramsBody });
}
