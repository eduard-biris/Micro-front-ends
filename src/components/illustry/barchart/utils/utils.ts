import * as z from 'zod';
import { toast } from 'sonner';

export function catchError(err: unknown) {
    if (err instanceof z.ZodError) {
      const errors = err.issues.map((issue) => issue.message);
      return toast.error(errors.join('\n'));
    } if (err instanceof Error) {
      return toast.error(err.message);
    }
    return toast.error('Something went wrong, please try again later.');
  }