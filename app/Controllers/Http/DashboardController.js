'use strict'

class DashboardController {
    index({ view }) {
        return view.render('admin.index')
    }
}

module.exports = DashboardController
