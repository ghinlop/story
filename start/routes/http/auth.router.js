const Route = use('Route');

Route.group(() => {
    // -> Login Router
    Route.get('/login', 'AuthController.loginGet').as('login.get')

    // -> Register Router
    Route.get('/register', 'AuthController.registerGet').as('register.get')

}).prefix('auth')