import clsx from "clsx";
import { SVGProps, memo } from "react";

export const IconMenu = memo<React.ComponentProps<"svg">>(function IconMenu(
    { className },
) {
    const variants = clsx("block grow-0 shrink-0 h-8 w-8 relative", className);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#191919" viewBox="0 0 256 256" className={variants}>
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
        </svg>
    );
});