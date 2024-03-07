import { Title } from './../../../.nuxt/components.d';
import db from '~/utils/db'
import { slugify } from '~/utils/slugify'

const Update = eventHandler(async(event) => {
    const id  = +getRouterParam(event, 'id')!
    const form = await readBody(event)
    
    const existingArticle = db.article.findUnique({
        where: { id }
    })
if(!existingArticle)
    throw createError({ statusCode: 404, message: ' the article does not exists'})

   const article = await db.article.update({
    where:{ id },
    data: {
        ...form,
    slug: form.title ? slugify(form.Title) : undefined
    },
   })
   
   return article
})

export default Update