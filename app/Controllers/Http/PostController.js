'use strict'

class PostController {
    index({ view }) {
        return view.render('admin/pages/posts');
    }
    new_post({ view }) {
        return view.render('admin/pages/new_post');
    }
}

module.exports = PostController
