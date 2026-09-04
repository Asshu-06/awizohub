import { useParams } from 'react-router-dom';
import { FaClock, FaUser, FaCalendar } from 'react-icons/fa';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();

  // In production, fetch post data from Supabase based on slug
  const post = {
    title: 'Digital Marketing Trends to Watch in 2024',
    author: 'Awizo Team',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Digital Marketing',
    image: '/images/blog-1.jpg',
    content: `
      <p>The digital marketing landscape is constantly evolving. Stay ahead with these key trends...</p>
      <h2>1. AI-Powered Marketing Automation</h2>
      <p>Artificial intelligence is revolutionizing how businesses approach marketing...</p>
      <h2>2. Video Content Dominance</h2>
      <p>Video continues to be the most engaging form of content...</p>
    `
  };

  return (
    <div className="blog-post-page">
      <article className="blog-post">
        <div className="post-header">
          <div className="container">
            <span className="post-category">{post.category}</span>
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <span className="meta-item"><FaUser /> {post.author}</span>
              <span className="meta-item"><FaCalendar /> {new Date(post.date).toLocaleDateString()}</span>
              <span className="meta-item"><FaClock /> {post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="post-image">
          <img src={post.image} alt={post.title} onError={(e) => e.target.style.display = 'none'} />
        </div>

        <div className="post-content">
          <div className="container">
            <div className="content-wrapper">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
