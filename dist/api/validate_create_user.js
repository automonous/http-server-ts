import { createUser } from "../db/queries/users.js";
import { respondWithJSON } from "./json.js";
export async function handlerValidateNewUser(req, res) {
    const params = req.body;
    const createdUser = await createUser({ email: params.email });
    respondWithJSON(res, 201, createdUser);
}
