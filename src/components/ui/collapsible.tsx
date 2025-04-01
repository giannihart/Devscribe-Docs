
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { ReactNode } from "react"

const Collapsible = CollapsiblePrimitive.Root

type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger> & {
  children: ReactNode | ((open: boolean) => ReactNode)
}

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
  CollapsibleTriggerProps
>(({ children, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleTrigger {...props} ref={ref}>
    {typeof children === "function" 
      ? ({ open }: { open: boolean }) => (children as (open: boolean) => ReactNode)(open)
      : children}
  </CollapsiblePrimitive.CollapsibleTrigger>
))

CollapsibleTrigger.displayName = "CollapsibleTrigger"

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
