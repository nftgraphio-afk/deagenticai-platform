import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '@/data/blog-posts';

export function Blog() {
  const featuredPost = BLOG_POSTS.find(post => post.featured);
  const regularPosts = BLOG_POSTS.filter(post => !post.featured);

  return (
    <div className="container mx-auto px-6 pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          DeAgenticAI <span className="text-primary">Journal</span>
        </h1>
        <p className="text-white/60 text-lg max-w-2xl">
          Insights, updates, and deep dives into the future of digital wealth management and secure protocol delegation.
        </p>
      </motion.div>

      {/* Featured Post */}
      {featuredPost && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="h-[300px] lg:h-full overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="text-white/40 text-sm">{featuredPost.category}</span>
                </div>
                <Link to={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                </Link>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/40">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{featuredPost.author}</p>
                      <p className="text-white/40 text-xs">{featuredPost.date}</p>
                    </div>
                  </div>
                  <Link to={`/blog/${featuredPost.slug}`} className="flex items-center gap-2 text-primary font-semibold group/btn">
                    Read Article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Regular Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="group flex flex-col h-full rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <div className="h-48 overflow-hidden rounded-t-2xl">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-white/30 text-xs">•</span>
                <span className="text-white/40 text-xs">{post.date}</span>
              </div>
              <Link to={`/blog/${post.slug}`}>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </Link>
              <p className="text-white/50 text-sm mb-6 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-white/60 text-xs font-medium">{post.author}</span>
                <Link to={`/blog/${post.slug}`} className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-1 group/btn">
                  Read 
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
