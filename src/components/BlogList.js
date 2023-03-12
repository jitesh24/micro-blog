const BlogList = ({ blogs }) => {
  return blogs.length !== 0 ? (
    <div className='blog-list'>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  ) : (
    <div className='blog-list' />
  );
};

export default BlogList;
