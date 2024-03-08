import db from '~/utils/db'

const FindByslug = eventHandler(async(event) => {
    const slug  = getRouterParam(event, 'slug')!
    
    try{
        const article = await db.article.delete({
            where:{slug},
            select:{
                image: true,
                content: true,
                title: true

            }
        })
        
    return article
    }catch {
        return null
    }
})

export default FindByslug

export type ArticleDetails = Awaited<ReturnType<typeof FindByslug>>