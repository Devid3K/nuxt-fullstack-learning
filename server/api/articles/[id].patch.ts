const remove = eventHandler((event) => {
    const id = getRouterParams(event, 'id')!
    const articles = [
        { id:1, title: 'Title#1', excerpt:'Excerpt#1'},
        { id:2, title: 'Title#2', excerpt:'Excerpt#2'},
        { id:3, title: 'Title#3', excerpt:'Excerpt#3'},
    ]
    
    const article = articles.find(article => article.id === +id)
    
    if(!article)
        throw createError({ status: 404, message: ' the article does not exit'})
    // delete article from the database
    return article
})
export default remove