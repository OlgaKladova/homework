import { PostCard } from '@/entities/post/ui/PostCard';
import styles from './styles.module.css'
import type { PostListProps } from './types';

export const PostList = ({posts}: PostListProps) => {
    return (
        <div className={styles.list}>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};