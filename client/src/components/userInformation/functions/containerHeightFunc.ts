import React, { useEffect } from "react";

export function ContainerHeightFunc (pageRef: any) {
    useEffect(() => {
        const container = document.querySelector('.homepage__container');
        if (container && pageRef.current) {
            const containerPaddingTop = parseFloat(window.getComputedStyle(container).paddingTop)
            pageRef.current.style.height = `calc(100vh - ${containerPaddingTop}px)`;
        }
    }, [])
}