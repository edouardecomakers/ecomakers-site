import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const trustBadgeVariants = cva(
  "inline-flex items-center gap-x-1.5 rounded-full px-3 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        flat: "shadow-sm",
        pill: "ring-1 ring-inset",
      },
      color: {
        green: "",
        blue: "",
        orange: "",
        gray: "",
      },
    },
    compoundVariants: [
      {
        variant: "flat",
        color: "green",
        className: "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400",
      },
      {
        variant: "flat",
        color: "blue",
        className: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
      },
      {
        variant: "flat",
        color: "orange",
        className: "bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400",
      },
      {
        variant: "flat",
        color: "gray",
        className: "bg-gray-50 text-gray-600 dark:bg-gray-800/50 dark:text-gray-300",
      },
      {
        variant: "pill",
        color: "green",
        className: "text-green-700 ring-green-600/20 dark:text-green-400 dark:ring-green-500/20",
      },
      {
        variant: "pill",
        color: "blue",
        className: "text-blue-700 ring-blue-600/20 dark:text-blue-400 dark:ring-blue-500/20",
      },
      {
        variant: "pill",
        color: "orange",
        className: "text-orange-700 ring-orange-600/20 dark:text-orange-400 dark:ring-orange-500/20",
      },
      {
        variant: "pill",
        color: "gray",
        className: "text-gray-600 ring-gray-600/20 dark:text-gray-300 dark:ring-gray-400/20",
      },
    ],
    defaultVariants: {
      variant: "flat",
      color: "green",
    },
  }
)

const TrustBadge = React.forwardRef(({ className, variant, color, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(trustBadgeVariants({ variant, color }), className)}
      {...props}
    >
      {children}
    </span>
  )
})
TrustBadge.displayName = "TrustBadge"

export { TrustBadge, trustBadgeVariants }
