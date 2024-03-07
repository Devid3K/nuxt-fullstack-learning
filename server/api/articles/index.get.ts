const findAll = eventHandler(() => {
    const articles = [
        { id:1, title: 'Title#1', excerpt:'Excerpt#1'},
        { id:2, title: 'Title#1', excerpt:'Excerpt#1'},
        { id:3, title: 'Title#1', excerpt:'Excerpt#1'},
    ]
    return articles
})

export default findAll