'use strict'

class TagController {
    index({view}){
        return view.render('admin/pages/tags')
    }
}

module.exports = TagController
