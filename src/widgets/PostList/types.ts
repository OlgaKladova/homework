export type PostListProps = {
    posts: {
        id: number;
        title: string;
        body: string;
        userId: number;
    }[]
}