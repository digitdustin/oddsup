import React, { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// an action button is a button that is used to perform an action (duh)
// it can be red, green, or blue

type CustomButtonProps = {
  color:
    | "red"
    | "green"
    | "blue"
    | "gray"
    | "purple"
    | "outline"
    | "orange"
    | "navy"
    | "sky";
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  spanClassName?: string;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

const ActionButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ children, className, spanClassName, color = "blue", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "text-white !font-sans text-sm gap-2 w-fit flex items-center px-2 actionbutton",
          color,
          className
        )}
        {...rest}
      >
        <span className={cn(spanClassName)}>
          <em className="flex gap-2 items-center z-10 whitespace-nowrap">
            {children}
          </em>
        </span>
      </button>
    );
  }
);

ActionButton.displayName = "ActionButton";

export default ActionButton;
