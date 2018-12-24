const Route = use('Route');

Route.group(() => {
    // -> Index Router
    Route.get('', 'DashboardController.index').as('admin.index')

    // Post Router
    Route.get('/post', 'PostController.index').as('admin.post')
    Route.get('/post/add', 'PostController.new_post').as('admin.post.add')

    // Category Router
    Route.get('/categories', 'CategoryController.listView').as('admin.cate')

    // Tags Router
    Route.get('/tags', 'TagController.index').as('admin.tags')
}).prefix('admin')