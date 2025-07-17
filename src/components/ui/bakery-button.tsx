import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const bakeryButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        cookies: "bg-black text-white hover:bg-gray-800",
        cakes: "bg-white text-black border-2 border-pink-400 hover:bg-pink-50",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2",
        lg: "h-14 px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "cookies",
      size: "default",
    },
  }
);

export interface BakeryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof bakeryButtonVariants> {
  asChild?: boolean;
}

const BakeryButton = React.forwardRef<HTMLButtonElement, BakeryButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(bakeryButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
BakeryButton.displayName = "BakeryButton";

export { BakeryButton, bakeryButtonVariants };
