import type { PropsWithChildren } from "react";
import { Header, Footer } from '@widgets/index';
import styles from './styles.module.css'

export const  MainLayout = ({children}: PropsWithChildren) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
};