import { Request, Response } from "express";
import { BadRequestError } from "./errors.js";

import { respondWithJSON } from "./json.js";

export async function handlerValidateChirp(req: Request, res: Response) {
  type parameters = {
    body: string;
  };

  const params: parameters = req.body;

  const profraneWords: string[] = ["kerfuffle", "sharbert", "fornax"];
  let paramsBody: string = params.body;

  for (const word of profraneWords) {
     if (paramsBody.toLowerCase().includes(word)) {
       let paramsBodyAsWordsArray: string[] = paramsBody.split(" ");
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