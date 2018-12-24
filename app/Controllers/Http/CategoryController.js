'use strict'

class CategoryController {
    // -> View Only
    listView({view}){
        return view.render('admin/pages/categories');
    }
}

module.exports = CategoryController
