import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: 'My new website',
      body: 'askas asadas...',
      author: 'mario',
      id: 1,
    },
    {
      title: 'Welcome to the party',
      body: 'askas asadas...',
      author: 'Luigi',
      id: 2,
    },
    {
      title: 'Top tips from the master',
      body: 'askas asadas...',
      author: 'Maxims',
      id: 3,
    },
  ]);

  return (
    <div className='home'>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
