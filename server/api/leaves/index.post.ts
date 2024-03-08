import db from "~/utils/db";
import { createLeaveInputValidator } from "~/validators/leaves";
import { z } from 'zod'

export type CreateLeaveInput = z.infer<typeof createLeaveInputValidator>

const create = eventHandler(async (event) => {
    const form = await readBody(event)
    const result = createLeaveInputValidator.safeParse(form)
    if(!result.success) throw createError({ statusCode:422, data: result.error.flatten()})
    const id = +getRouterParam(event,'id')!
    const leave = await db.leave.create({
        data:{ ...result.data, userId:1 },
    })

    setResponseStatus(event, 201)
  return leave;
});

export default create;



