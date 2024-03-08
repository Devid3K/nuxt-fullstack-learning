import  type { z } from 'zod'
import type{ profileInputValidator } from '~/validators/auth';

export type ProflieInput = z.infer<typeof profileInputValidator>;
