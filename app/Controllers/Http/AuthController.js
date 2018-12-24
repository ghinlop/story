'use strict'

class AuthController {
    // -> Login Controller
    loginGet({ view }) {
        return view.render('auth.login')
    }

    // -> Register Controller
    registerGet({ view }) {
        return view.render('auth.register')
    }
}

module.exports = AuthController
