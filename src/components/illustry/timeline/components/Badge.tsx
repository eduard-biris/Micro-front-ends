import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../utils/utils';
import { HTMLAttributes } from 'react';

const badgeVariants = cva(
  'inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-primary hover:bg-primary/80 border-transparent text-primary-foreground dark:border-gray-300',
        secondary:
          'bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground dark:border-gray-300',
        destructive:
          'bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground dark:border-gray-300',
        outline: 'text-foreground dark:border-gray-300'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
