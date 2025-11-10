import { Button } from '@/shared/ui/Button/Button'
import styles from './styles.module.css'
import { ThemeSwitcher } from '@/features/ThemeSwitcher/ui/ThemeSwitcher'
import { useState } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleModalOpen = () => {
        setIsOpen(true);
    };

    const handleModalClose = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.header}>
            <Button textButton='О проекте' onClick={handleModalOpen} />
            {isOpen && (
                <Modal onClose={handleModalClose} title='О проекте'>
                    <p>Проект создан для учебных целей. Стек технологий: React, Typescript, CSS, Vite. Приложение показывает список постов. Также можно переключать тему. По мере роста проекта будет добавляться функционал и, вероятно, будет расширяться стек.</p>
                </Modal>
            )}
            <ThemeSwitcher />
        </div>
    )
}