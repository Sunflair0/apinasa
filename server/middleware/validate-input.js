function validate(req, res, next) {
    const { clienttag, password } = req.body
    if (!clienttag ||
        !password ||
        clienttag.length < 2 ||
        clienttag.length > 20 ||
        password.length < 6 ||
        password.length > 20) {
        return res.send({
            data: null,
            success: false,
            error: "Credentials fail to meet criteria."
        })
    }
    return next();
}

module.exports = validate