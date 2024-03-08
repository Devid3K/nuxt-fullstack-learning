import db from '~/utils/db'

const findBySlug = eventHandler(async(event) => {
    const slug  = getRouterParam(event, 'slug')!
    
    try{
        const article = await db.article.findUnique({
            where:{slug},
            select:{
                image: true,
                content: true,
                title: true,
                excerpt: true

            }
        })
        
    return article
    }catch {
        return null
    }
})

export default findBySlug

export type ArticleDetails = Awaited<ReturnType<typeof findBySlug>>