import styles from './styles.module.css'
import type { PostCardProps } from './types';

export const PostCard = ({post}: PostCardProps) => {
    return (
        <div key={post.id} className={styles.card}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.text}>{post.body}</p>
        </div>
    )
};