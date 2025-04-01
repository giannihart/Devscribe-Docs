
import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger> & {
  children: React.ReactNode | ((open: boolean) => React.ReactNode)
}

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
  CollapsibleTriggerProps
>(({ children, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleTrigger {...props} ref={ref}>
    {typeof children === "function" 
      ? ({ open }: { open: boolean }) => (children as (open: boolean) => React.ReactNode)(open)
      : children}
  </CollapsiblePrimitive.CollapsibleTrigger>
))

CollapsibleTrigger.displayName = "CollapsibleTrigger"

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
