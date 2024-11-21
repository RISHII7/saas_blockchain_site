import { twMerge } from "tailwind-merge";
import type { ComponentPropsWithoutRef } from "react";

export const TextButton = (props: ComponentPropsWithoutRef<'button'> & { color?: string }) => {

    const { color, className, children } = props;

    return (
        <button className={twMerge(
            "text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500",
            color === 'lime' && "text-lime-500",
            color === 'cyan' && "text-cyan-500",
            color === 'violet' && "text-violet-500",
            className
        )}>
            {children}
        </button>
    );
};