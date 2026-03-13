import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, ChevronRight, MessageSquare, Tag } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog-posts';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | DeAgenticAI Journal`;
      // In a real app, we'd use react-helmet-async for meta tags
    }
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="container mx-auto px-6 pt-32 pb-24 text-center">
        <h1 className="text-2xl text-white mb-4">Post not found</h1>
        <Link to="/blog" className="text-primary hover:underline flex items-center justify-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Journal
        </Link>
      </div>
    );
  }

  // Structured Data (JSON-LD) for SEO/GEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [post.image],
    "datePublished": post.date,
    "author": [{
      "@type": "Person",
      "name": post.author,
      "jobTitle": post.authorRole
    }],
    "description": post.excerpt,
    "articleBody": post.content.replace(/<[^>]*>?/gm, '')
  };

  return (
    <article className="min-h-screen pt-32 pb-24">
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      <div className="container mx-auto px-6">
        {/* Breadcrumbs for SEO */}
        <nav className="flex items-center gap-2 text-white/40 text-xs mb-8 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/blog" className="hover:text-white transition-colors">Journal</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/60 truncate max-w-[200px]">{post.title}</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-white/30 text-sm">•</span>
              <div className="flex items-center gap-1.5 text-white/40 text-sm">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/40 border border-white/5">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-medium">{post.author}</p>
                  <p className="text-white/40 text-xs">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/40 text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <button className="p-2 rounded-full hover:bg-white/5 transition-colors text-white/60 hover:text-white">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Wrapper for SEO/AEO */}
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar / Table of Contents */}
            <aside className="lg:col-span-3 hidden lg:block sticky top-32 h-fit">
              <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Table of Contents</h4>
              <ul className="space-y-3">
                <li className="text-sm text-primary cursor-pointer hover:text-primary/80 transition-colors">Introduction</li>
                <li className="text-sm text-white/40 cursor-pointer hover:text-white transition-colors">Key Features</li>
                <li className="text-sm text-white/40 cursor-pointer hover:text-white transition-colors">Case Studies</li>
                <li className="text-sm text-white/40 cursor-pointer hover:text-white transition-colors">Future Outlook</li>
              </ul>
            </aside>

            {/* Main Article Content */}
            <div className="lg:col-span-9">
              <div 
                className="prose prose-invert prose-primary max-w-none 
                  prose-headings:tracking-tight prose-headings:font-bold
                  prose-p:text-white/70 prose-p:leading-relaxed prose-p:text-lg
                  prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:rounded-r-xl
                  prose-a:text-primary hover:prose-a:text-primary/80
                  prose-img:rounded-2xl prose-img:border prose-img:border-white/10"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags for GEO/Discovery */}
              <div className="mt-16 pt-8 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 text-xs hover:border-primary/50 hover:text-white transition-all cursor-pointer">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* FAQ Section for AEO/GEO */}
              <section className="mt-20 p-8 rounded-3xl border border-primary/20 bg-primary/5">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Common Questions
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">How does DeAgenticAI ensure security?</h4>
                    <p className="text-white/60 text-sm">DeAgenticAI utilizes advanced cryptographic delegation and real-time AI monitoring to identify and block unauthorized transactions instantly.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">Can I automate my entire portfolio?</h4>
                    <p className="text-white/60 text-sm">Yes, DeAgenticAI allows for full automation through delegated agents while ensuring you maintain absolute ownership and final approval rights.</p>
                  </div>
                </div>
              </section>

              {/* Author Bio */}
              <div className="mt-20 p-8 rounded-3xl border border-white/10 bg-white/5 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-white/40 border border-white/5">
                  <User className="w-10 h-10" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-white font-bold text-lg mb-1">{post.author}</h4>
                  <p className="text-primary text-sm font-medium mb-3">{post.authorRole} at DeAgenticAI</p>
                  <p className="text-white/60 text-sm italic">
                    Expert in digital asset security and automated financial protocols with over a decade of experience in the fintech industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Posts for Discovery/SEO */}
      <div className="container mx-auto px-6 mt-32">
        <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3).map(relatedPost => (
            <Link 
              key={relatedPost.id} 
              to={`/blog/${relatedPost.slug}`}
              className="group rounded-2xl border border-white/5 bg-white/5 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="h-40 overflow-hidden">
                <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2">{relatedPost.category}</p>
                <h4 className="text-white font-bold group-hover:text-primary transition-colors line-clamp-2">{relatedPost.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
