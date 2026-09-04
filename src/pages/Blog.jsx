import { Link } from 'react-router-dom';
import { FaClock, FaUser } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  // Placeholder blog posts - in production, fetch from Supabase
  const blogPosts = [
    {
      id: 1,
      slug: 'digital-marketing-trends-2024',
      title: '10 Digital Marketing Trends to Watch in 2024',
      excerpt: 'Stay ahead of the curve with these emerging trends in digital marketing that will shape the industry.',
      author: 'Awizo Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Digital Marketing',
      image: '/images/blog-1.jpg'
    },
    {
      id: 2,
      slug: 'it-career-guide',
      title: 'Complete Guide to Starting Your IT Career',
      excerpt: 'Everything you need to know about breaking into the IT industry and landing your first role.',
      author: 'Awizo Team',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Career',
      image: '/images/blog-2.jpg'
    },
    {
      id: 3,
      slug: 'study-abroad-tips',
      title: 'Top 5 Tips for Studying Abroad Successfully',
      excerpt: 'Make the most of your international education experience with these essential tips.',
      author: 'Awizo Team',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Education',
      image: '/images/blog-3.jpg'
    }
  ];

  return (
    <div className="blog-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Blog & Insights</h1>
          <p className="page-subtitle">Latest news, tips, and insights from Awizo Hub</p>
        </div>
      </section>

      <section className="section blog-list-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    onError={(e) => e.target.style.display = 'none'}
                  />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span className="meta-item">
                      <FaUser /> {post.author}
                    </span>
                    <span className="meta-item">
                      <FaClock /> {post.readTime}
                    </span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="blog-read-more">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
