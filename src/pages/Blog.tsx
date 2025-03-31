
import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import { Calendar } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Introducing Cascade: An Agentic Coding Assistant",
      excerpt: "Today, we're excited to announce Cascade, a revolutionary new way to interact with AI for software development.",
      author: "Sarah Chen",
      role: "CTO at Devscribe",
      date: "June 15, 2023",
      category: "Product Updates",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&h=1356&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "How AI is Transforming Software Development Workflows",
      excerpt: "AI tools are changing how developers work. Learn how teams are leveraging these technologies to ship faster.",
      author: "Michael Rodriguez",
      role: "Lead Engineer",
      date: "May 28, 2023",
      category: "Industry Trends",
      image: "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=2070&h=1380&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Best Practices for Using Devscribe in Large Teams",
      excerpt: "Implementing AI tools in enterprise teams requires careful planning. Here's our guide for successful deployment.",
      author: "Jenna Kim",
      role: "DevOps Specialist",
      date: "May 10, 2023",
      category: "Guides",
      image: "https://images.unsplash.com/photo-1543013309-0d1f4edeb868?q=80&w=2048&h=1536&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "The Future of Code Generation and Assistance",
      excerpt: "As AI continues to evolve, what can we expect from the next generation of coding assistants?",
      author: "Alex Thompson",
      role: "AI Researcher",
      date: "April 22, 2023",
      category: "Research",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&h=1380&auto=format&fit=crop"
    },
  ];

  return (
    <div className="px-12 py-10 max-w-6xl">
      <PageHeading 
        subtitle="Blog" 
        title="Devscribe Blog"
        description="News, tutorials, and insights about Devscribe and AI-assisted development."
      />
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="flex flex-col overflow-hidden border border-devscribe-border rounded-xl hover:border-white/50 transition-all duration-200 group">
            <div className="h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex-1 p-6 flex flex-col">
              <div className="mb-2">
                <span className="inline-block text-xs font-medium bg-white/10 text-white px-2.5 py-1 rounded">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                {post.title}
              </h3>
              <p className="text-devscribe-text-secondary mb-4 flex-1">
                {post.excerpt}
              </p>
              <div className="mt-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-devscribe-hover-bg flex items-center justify-center">
                    <span className="text-sm font-medium">{post.author.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">{post.author}</div>
                    <div className="text-xs text-devscribe-text-secondary">{post.role}</div>
                  </div>
                </div>
                <div className="flex items-center text-xs text-devscribe-text-secondary">
                  <Calendar size={14} className="mr-1" />
                  {post.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 flex justify-center">
        <button className="px-6 py-2.5 border border-devscribe-border rounded-md hover:bg-devscribe-hover-bg transition-colors">
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default Blog;
