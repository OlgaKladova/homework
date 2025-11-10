import styles from "./styles.module.css"
import type { ModalProps } from "./types"
import { useEffect } from "react";
import { usePortal } from "@/shared/hooks/usePortal";

export const Modal = ({title = 'О проекте', onClose, children}: ModalProps) => {
    const Portal = usePortal();
    
    const handleStopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose?.()
        }
        window.addEventListener("keydown", onKey)

        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKey)
        };
    }, [onClose]);

    return (
        <Portal>
            <div className={styles.modalOverlay} onClick={onClose}>
                <div className={styles.modal} onClick={handleStopPropagation}>
                    <div className={styles.modalHeader}>
                        <h2>{title}</h2>
                        <button 
                            className={styles.closeButton}
                            onClick={onClose}
                        >
                            &times;
                        </button>
                    </div>
                    <div className={styles.modalContent}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}