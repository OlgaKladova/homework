import { MainLayout } from '@/shared/index'
import './index.css'
import { PostList } from '@/widgets/PostList/PostList'

function App() {
  const mockPosts = [
    {
      id: 1,
      title: 'Post1',
      body: 'Много текста к посту 1',
      userId: 1
    },
    {
      id: 2,
      title: 'Post2',
      body: 'Много текста к посту 2',
      userId: 2
    },
    {
      id: 3,
      title: 'Post3',
      body: 'Много текста к посту 3',
      userId: 3
    }
  ]

  return (
    <>
      <MainLayout>
        <PostList posts={mockPosts} />
      </MainLayout>
    </>
  )
}

export default App