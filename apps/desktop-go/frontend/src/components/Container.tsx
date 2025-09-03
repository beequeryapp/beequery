import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
    return (
        <div
            className={`
      h-screen 
      w-full 
      overflow-hidden
      bg-background 
      text-foreground
      ${className}
    `}
        >
            {children}
        </div>
    );
}
