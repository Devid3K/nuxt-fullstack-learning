const findByID = eventHandler((event) => {
    const id = getRouterParams(event, 'id' )!

    const articles = [
        { id:1, title: 'Title#1', excerpt:'Excerpt#1'},
        { id:2, title: 'Title#2', excerpt:'Excerpt#2'},
        { id:3, title: 'Title#3', excerpt:'Excerpt#3'},
    ]
    
    const article = articles.find(article => article.id === +id)
    
    return article
    
})

export default findByID