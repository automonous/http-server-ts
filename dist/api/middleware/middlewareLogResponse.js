export async function middlewareLogResponse(_, res, next) {
    res.on("finish", () => {
        const statusCode = res.statusCode;
        if (statusCode !== 200) {
            console.log(`[NON-OK] ${_.method} ${_.url} - Status: ${statusCode}`);
        }
    });
    next();
}
