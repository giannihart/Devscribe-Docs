
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { ReactNode } from "react"

const Collapsible = CollapsiblePrimitive.Root

type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger> & {
  children: ReactNode | ((open: boolean) => ReactNode)
}

const CollapsibleTrigger = ({ children, ...props }: CollapsibleTriggerProps) => (
  <CollapsiblePrimitive.CollapsibleTrigger {...props}>
    {typeof children === "function" 
      ? (open: boolean) => children(open) 
      : children}
  </CollapsiblePrimitive.CollapsibleTrigger>
)

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
