import { useEffect, useRef, type PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export function usePortal(id = 'modal-root') {
    const root = useRef<HTMLDivElement | null>(null);

    if (!root.current) {
        let container = document.getElementById(id) as HTMLDivElement;
        if (!container) {
            container = document.createElement('div');
            container.id = id;
            document.body.appendChild(container);
        }
        root.current = container;
    };

    useEffect(() => {
        const currentRoot = root.current;
        return () => {
            if (!currentRoot) return;
            if (currentRoot.childElementCount === 0 && currentRoot.parentNode) {
                currentRoot.parentNode.removeChild(currentRoot);
            }
        };
    }, []);

    const Portal = ({children}: PropsWithChildren) => {
        return root.current ? createPortal(children, root.current) : null;
    };

    return Portal;
}