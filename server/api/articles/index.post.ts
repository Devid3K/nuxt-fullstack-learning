const create = eventHandler(async(event) => {
    const form = await readBody(event)
    const article = { id: +(new Date()), ...form}
    
    return article
})

export default create