import db from "~/utils/db";
import { updateLeaveInputValidator } from "~/validators/leaves";
import { z } from 'zod'

export type UpdateLeaveInput = z.infer<typeof updateLeaveInputValidator>

const update = eventHandler(async (event) => {
    const id = +getRouterParam(event, 'id')!
    const form = await readBody(event)
    const result = updateLeaveInputValidator.safeParse(form)
    if(!result.success) throw createError({ statusCode:422, data: result.error.flatten()})
    const leave = await db.leave.update({
        where:{id},
        data:result.data
    })

    setResponseStatus(event, 201)
  return leave;
});

export default update;



