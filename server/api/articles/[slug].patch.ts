import { z } from 'zod'

import { Title } from './../../../.nuxt/components.d';
import db from '~/utils/db'
import { slugify } from '~/utils/slugify'

import { updateArticleInputValidator } from '~/validators/articles'

export type UpdateArticleInput = z.infer<typeof updateArticleInputValidator>

const Update = eventHandler(async(event) => {
    const slug  = getRouterParam(event, 'slug')!
    const form = await readBody(event)
    
    const existingArticle = db.article.findUnique({
        where: { slug }
    })
if(!existingArticle)
    throw createError({ statusCode: 404, message: ' the article does not exists'})

   const article = await db.article.update({
    where:{ slug },
    data: {
        ...form,
    slug: form.title ? slugify(form.Title) : undefined
    },
   })
   
   return article
})

export default Update