import React, { RefObject } from "react";

export function OptionVisibleFunc(optionsRef: RefObject<HTMLDivElement>, event: React.MouseEvent) {
    event.preventDefault()
    if (optionsRef.current) {
        const currentOptionsDisplay = optionsRef.current.style.display;
        optionsRef.current.style.display = currentOptionsDisplay === 'flex' ? 'none' : 'flex';
    }
}