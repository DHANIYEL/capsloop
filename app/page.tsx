'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Paintbrush,
  Film,
  ArrowRight,
  ArrowUpRight,
  Star,
  CheckCircle2,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
  Activity,
  Flame,
  MousePointerClick
} from 'lucide-react';
import { products } from './products';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Web Development', message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setContactSubmitted(true);
        setFormData({ name: '', email: '', service: 'Web Development', message: '' });
        setTimeout(() => {
          setContactSubmitted(false);
        }, 5000);
      } else {
        setSubmitError(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      setSubmitError('A connection error occurred. Please check your network and try again.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      title: "Web Development",
      description: "Custom high-speed, SEO-optimized websites built with React, Next.js, and Tailwind CSS. We construct robust serverless backends and responsive frontends.",
      icon: Globe,
      features: ["Next.js & React", "Headless CMS integration", "SEO & Performance focus", "Tailwind CSS styling"]
    },
    {
      title: "App Development",
      description: "Feature-rich, high-performance native iOS and Android apps powered by Flutter and React Native. Fully responsive design from screen to screen.",
      icon: Smartphone,
      features: ["Cross-platform App Dev", "Native Performance", "Store Deployment", "Offline-first Support"]
    },
    {
      title: "Graphics Design",
      description: "Stunning brand identities, UI/UX layouts, and promotional graphics that communicate value instantly. We design with intent and pixel precision.",
      icon: Paintbrush,
      features: ["UI/UX Design & Prototyping", "Brand Style Guides", "Vector Illustrations", "Social Media Kits"]
    },
    {
      title: "Video Editing",
      description: "Polished commercials, short-form vlogs, and custom kinetic animations designed to capture attention and boost search-engine retention.",
      icon: Film,
      features: ["Kinetic Typography", "Color Grading & SFX", "Commercial Ads", "Multi-platform formats"]
    }
  ];

  const testimonials = [
    {
      quote: "capsloop completely transformed our digital presence. Our new Next.js site loads instantly, and we've seen a 40% bump in SEO-driven inquiries within weeks.",
      author: "Sarah Jenkins",
      role: "CEO, SparkTech Solutions",
      rating: 5
    },
    {
      quote: "Their attention to design details is remarkable. The digital brand design they made is extremely premium and has put us far ahead of our direct competitors.",
      author: "David Chen",
      role: "Founder, Zenith Capital",
      rating: 5
    },
    {
      quote: "ZeTap has made networking incredibly easy. We ordered custom digital business cards for our whole team, and the user experience is flawless.",
      author: "Marcus Aureli",
      role: "VP of Sales, Veloce Media",
      rating: 5
    }
  ];

  const stats = [
    { value: "99%", label: "Client Satisfaction" },
    { value: "45+", label: "Projects Delivered" },
    { value: "10x", label: "Average Page Speed Boost" },
    { value: "2.4M+", label: "End User Interactions" }
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.15 } }
  };

  const cardVariant = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <div className="flex-1 bg-black text-white relative overflow-x-hidden selection:bg-orange-primary selection:text-black">
      {/* Background glowing effects */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-orange-glow blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-orange-glow blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-orange-glow blur-[130px] pointer-events-none z-0" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border-dark bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Space - Reserved for custom logo */}
          <div className="flex items-center gap-3">
            <div className="border border-dashed border-orange-primary/60 rounded px-3 py-1 bg-orange-primary/5 select-none transition-colors hover:bg-orange-primary/10">
              <span className="text-xs text-orange-primary font-mono tracking-wider">
                [ LOGO SPACE ]
              </span>
            </div>
            <span className="font-extrabold text-xl tracking-tight">
              caps<span className="text-orange-primary">loop</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-text-muted hover:text-white transition-colors">Services</a>
            <a href="#products" className="text-sm text-text-muted hover:text-white transition-colors">Products</a>
            <a href="#about" className="text-sm text-text-muted hover:text-white transition-colors">About Us</a>
            <a href="#testimonials" className="text-sm text-text-muted hover:text-white transition-colors">Reviews</a>
            <a href="#contact" className="text-sm text-text-muted hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white hover:bg-orange-primary text-black hover:text-black font-semibold text-sm px-6 py-2.5 transition-all duration-300 transform hover:scale-[1.03]"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white hover:text-orange-primary transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-border-dark bg-black/95 absolute left-0 right-0 overflow-hidden"
            >
              <div className="flex flex-col px-6 py-6 gap-5">
                <a
                  href="#services"
                  className="text-lg text-text-muted hover:text-orange-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#products"
                  className="text-lg text-text-muted hover:text-orange-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </a>
                <a
                  href="#about"
                  className="text-lg text-text-muted hover:text-orange-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="#testimonials"
                  className="text-lg text-text-muted hover:text-orange-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reviews
                </a>
                <a
                  href="#contact"
                  className="text-lg text-text-muted hover:text-orange-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-orange-primary text-black font-bold text-center py-3 mt-2 hover:bg-orange-light transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-20 z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 border border-border-dark rounded-full px-4 py-1.5 bg-white/5 mb-8 hover:border-orange-primary/30 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-orange-primary" />
            <span className="text-xs uppercase tracking-widest text-orange-light font-medium font-mono">
              SEO-Friendly Digital Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight orange-gradient-text"
          >
            Design. Code.<br />Automation.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8 text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed"
          >
            We architect high-conversion websites, feature-rich mobile apps, stunning graphics, and retention-maximizing videos optimized to scale your digital presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center w-full"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-orange-primary hover:bg-orange-light text-black font-bold px-8 py-4 transition-all duration-300 transform hover:scale-[1.03]"
            >
              Collaborate With Us
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border-dark hover:border-white/40 bg-transparent text-white px-8 py-4 transition-all duration-300 hover:bg-white/5"
            >
              Explore Products
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border-dark bg-black/60 relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center md:text-left flex flex-col items-center md:items-start"
              >
                <span className="text-4xl md:text-5xl font-black text-orange-primary mb-2 font-mono">
                  {stat.value}
                </span>
                <span className="text-sm text-text-muted font-medium tracking-wide uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <motion.span
              {...fadeUp}
              className="text-orange-primary font-mono text-sm tracking-widest uppercase block mb-3 font-semibold"
            >
              What We Do
            </motion.span>
            <motion.h2
              {...fadeUp}
              className="text-3xl md:text-5xl font-black tracking-tight"
            >
              Tailored Solutions for Digital Supremacy
            </motion.h2>
            <motion.p
              {...fadeUp}
              className="mt-4 text-text-muted text-base md:text-lg"
            >
              Accelerate your development cycle and visual branding with our premium, high-converting specialized services.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  className="p-8 md:p-10 rounded-2xl bg-bg-card border border-border-dark hover:border-orange-primary/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-orange-glow relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-primary to-orange-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-orange-primary/10 flex items-center justify-center text-orange-primary group-hover:bg-orange-primary group-hover:text-black transition-all duration-300">
                      <IconComponent size={24} />
                    </div>
                    <span className="text-xs text-text-muted font-mono uppercase tracking-wider">
                      Service 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-auto pt-6 border-t border-border-dark">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-orange-primary flex-shrink-0" />
                        <span className="text-xs text-zinc-300 truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 px-6 relative z-10 border-t border-border-dark bg-zinc-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <motion.span
              {...fadeUp}
              className="text-orange-primary font-mono text-sm tracking-widest uppercase block mb-3 font-semibold"
            >
              Our Products
            </motion.span>
            <motion.h2
              {...fadeUp}
              className="text-3xl md:text-5xl font-black tracking-tight"
            >
              State-of-the-Art Digital Assets
            </motion.h2>
            <motion.p
              {...fadeUp}
              className="mt-4 text-text-muted text-base md:text-lg"
            >
              Explore our current production suite built internally to scale and automate professional connections and agency workspaces.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col rounded-3xl bg-bg-card border border-border-dark overflow-hidden group hover:border-orange-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-glow/10"
              >
                {/* Image Space */}
                <div className="relative h-64 md:h-80 w-full overflow-hidden bg-black/60 flex items-center justify-center border-b border-border-dark">
                  {/* Image placeholder with nice animation overlay */}
                  <img
                    src={product.image}
                    alt={`${product.name} Preview`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-80" />
                  
                  {/* Status pill */}
                  <span className={`absolute top-6 right-6 text-xs font-bold font-mono px-3 py-1 rounded-full border ${
                    product.status === 'Active' 
                      ? 'border-orange-primary/40 text-orange-primary bg-orange-primary/10' 
                      : 'border-white/20 text-white bg-white/5'
                  }`}>
                    {product.status}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <span className="text-orange-primary font-mono text-xs uppercase tracking-widest mb-2 font-medium">
                    {product.tagline}
                  </span>
                  <h3 className="text-3xl font-black tracking-tight mb-4 flex items-center gap-2">
                    {product.name}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-8">
                    <span className="text-xs uppercase font-mono text-white/50 tracking-wider block mb-3">Key Highlights</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-xs text-zinc-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Actions */}
                  <div className="pt-6 border-t border-border-dark flex items-center justify-between">
                    <div className="flex gap-2">
                      {product.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded border border-border-dark text-text-muted bg-white/[0.02]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {product.id === 'zetap' ? (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-black bg-orange-primary hover:bg-orange-light font-bold px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-[1.03]"
                      >
                        Visit ZeTap
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <a
                        href={product.url}
                        className="inline-flex items-center gap-1.5 text-sm text-white hover:text-orange-light font-bold py-2 px-4 transition-colors"
                      >
                        Coming Soon
                        <ChevronRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Box text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-orange-primary font-mono text-sm tracking-widest uppercase block mb-3 font-semibold">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                Crafting Next-Gen Digital Architecture
              </h2>
              <p className="mt-6 text-text-muted leading-relaxed text-base md:text-lg">
                At capsloop, we align custom programming with elite UI/UX aesthetics and data-centric SEO architectures. We believe a digital presence should not just exist, it must excel and convert.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed text-sm">
                Our collaborative workflow acts as a seamless extension of your marketing, development, and branding teams. From deep-dive web refactors to engaging post-production video runs, our work is defined by strict standards, responsive execution, and extreme performance.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-orange-primary/10 flex items-center justify-center text-orange-primary mt-0.5">
                    <CheckCircle2 size={12} />
                  </div>
                  <div>
                    <span className="text-sm font-bold block text-white">Full-Stack Capability</span>
                    <span className="text-xs text-text-muted">High performance code, zero compromises.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-orange-primary/10 flex items-center justify-center text-orange-primary mt-0.5">
                    <CheckCircle2 size={12} />
                  </div>
                  <div>
                    <span className="text-sm font-bold block text-white">SEO & Indexing Ready</span>
                    <span className="text-xs text-text-muted">Built for search visibility and metrics.</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative p-8 md:p-12 rounded-3xl border border-border-dark bg-bg-card overflow-hidden group hover:border-orange-primary/20 transition-colors"
            >
              <div className="absolute top-[-10%] right-[-10%] w-[200px] h-[200px] rounded-full bg-orange-glow blur-[60px]" />
              <div className="flex flex-col gap-6 relative z-10">
                <span className="text-xs font-mono tracking-widest text-orange-primary uppercase font-bold">
                  Our Mission & Culture
                </span>
                <blockquote className="text-xl italic leading-relaxed text-white">
                  &ldquo;A clean codebase behaves like gravity; it naturally attracts speed, indexing efficiency, and long-term technical value. We build every card and script to stand up to that load.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-6 border-t border-border-dark">
                  <div className="w-10 h-10 rounded-full bg-orange-primary/20 flex items-center justify-center font-bold text-orange-primary">
                    CL
                  </div>
                  <div>
                    <span className="text-sm font-bold block text-white">The capsloop Team</span>
                    <span className="text-xs text-text-muted">Designers & Developers</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-6 relative z-10 border-t border-border-dark bg-zinc-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <motion.span
              {...fadeUp}
              className="text-orange-primary font-mono text-sm tracking-widest uppercase block mb-3 font-semibold"
            >
              Endorsements
            </motion.span>
            <motion.h2
              {...fadeUp}
              className="text-3xl md:text-5xl font-black tracking-tight"
            >
              Backed by Performance Metrics
            </motion.h2>
            <motion.p
              {...fadeUp}
              className="mt-4 text-text-muted text-base md:text-lg"
            >
              Hear from startup founders, product managers, and networking experts who scaled their projects with us.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-bg-card border border-border-dark flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(test.rating)].map((_, rIdx) => (
                      <Star key={rIdx} size={16} className="fill-orange-primary text-orange-primary" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed italic mb-6">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-6 border-t border-border-dark flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold block text-white">{test.author}</span>
                    <span className="text-xs text-text-muted">{test.role}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-border-dark flex items-center justify-center text-xs font-mono text-orange-primary">
                    {test.author.charAt(0)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section / Call to Action */}
      <section id="contact" className="py-32 px-6 relative z-10 border-t border-border-dark">
        <div className="max-w-5xl mx-auto rounded-3xl border border-border-dark bg-bg-card p-8 md:p-16 relative overflow-hidden">
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-orange-glow blur-[90px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
            {/* Title / Info */}
            <div>
              <span className="text-orange-primary font-mono text-sm tracking-widest uppercase block mb-3 font-semibold">
                Start a Project
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                Ready to loop in?
              </h2>
              <p className="mt-4 text-text-muted text-sm leading-relaxed">
                Connect with our team today. Whether you have a specific development outline, design requirements, or want to deploy ZeTap for your enterprise, we will get back to you with custom projections within 24 hours.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <div className="w-6 h-6 rounded bg-orange-primary/10 flex items-center justify-center text-orange-primary">
                    <Activity size={12} />
                  </div>
                  <span>Response time: Under 24h</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <div className="w-6 h-6 rounded bg-orange-primary/10 flex items-center justify-center text-orange-primary">
                    <Flame size={12} />
                  </div>
                  <span>High quality custom deployment guarantees</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="p-6 md:p-8 rounded-2xl border border-border-dark bg-black/60 backdrop-blur-sm">
              {contactSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-primary/10 flex items-center justify-center text-orange-primary">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Message Transmitted</h3>
                  <p className="text-xs text-text-muted">Our core developers are looping in. We will reach out shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase font-mono text-text-muted tracking-wider mb-1.5">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Carter"
                      className="w-full bg-zinc-950 border border-border-dark focus:border-orange-primary/60 outline-none rounded-lg px-4 py-2.5 text-sm transition-colors text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase font-mono text-text-muted tracking-wider mb-1.5">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-zinc-950 border border-border-dark focus:border-orange-primary/60 outline-none rounded-lg px-4 py-2.5 text-sm transition-colors text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs uppercase font-mono text-text-muted tracking-wider mb-1.5">Service Needed</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-zinc-950 border border-border-dark focus:border-orange-primary/60 outline-none rounded-lg px-4 py-2.5 text-sm transition-colors text-white"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="App Development">App Development</option>
                      <option value="Graphics Design">Graphics Design</option>
                      <option value="Video Editing">Video Editing</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs uppercase font-mono text-text-muted tracking-wider mb-1.5">Tell Us About Your Project</label>
                    <textarea
                      id="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your objectives or specs..."
                      className="w-full bg-zinc-950 border border-border-dark focus:border-orange-primary/60 outline-none rounded-lg px-4 py-2.5 text-sm transition-colors text-white resize-none"
                    />
                  </div>

                  {submitError && (
                    <div className="text-xs text-red-500 font-medium px-1">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 inline-flex items-center justify-center rounded-full bg-orange-primary hover:bg-orange-light text-black font-bold py-3 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    <MousePointerClick size={16} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-dark bg-black py-20 relative z-10 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Logo and desc */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="border border-dashed border-orange-primary/60 rounded px-2.5 py-0.5 bg-orange-primary/5">
                  <span className="text-[10px] text-orange-primary font-mono tracking-wider">[ LOGO ]</span>
                </div>
                <span className="font-extrabold text-lg tracking-tight">capsloop</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Elite digital service agency looping design, programmatic performance, and SEO best-practices into scalable assets.
              </p>
            </div>

            {/* Services Links */}
            <div>
              <span className="font-bold text-xs uppercase font-mono text-white tracking-widest block mb-4">Services</span>
              <ul className="flex flex-col gap-3 text-xs text-text-muted">
                <li><a href="#services" className="hover:text-orange-primary transition-colors">Web Development</a></li>
                <li><a href="#services" className="hover:text-orange-primary transition-colors">App Development</a></li>
                <li><a href="#services" className="hover:text-orange-primary transition-colors">Graphics Design</a></li>
                <li><a href="#services" className="hover:text-orange-primary transition-colors">Video Editing</a></li>
              </ul>
            </div>

            {/* Products Links */}
            <div>
              <span className="font-bold text-xs uppercase font-mono text-white tracking-widest block mb-4">Products</span>
              <ul className="flex flex-col gap-3 text-xs text-text-muted">
                <li>
                  <a 
                    href="https://zetap.capsloop.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-orange-primary transition-colors inline-flex items-center gap-1"
                  >
                    ZeTap Digital Cards <ExternalLink size={10} />
                  </a>
                </li>
                <li><a href="#products" className="hover:text-orange-primary transition-colors">CapsFlow Automation (Beta)</a></li>
              </ul>
            </div>

            {/* Connection / Location */}
            <div>
              <span className="font-bold text-xs uppercase font-mono text-white tracking-widest block mb-4">Agency</span>
              <ul className="flex flex-col gap-3 text-xs text-text-muted">
                <li><a href="#about" className="hover:text-orange-primary transition-colors">About Team</a></li>
                <li><a href="#testimonials" className="hover:text-orange-primary transition-colors">Client Reviews</a></li>
                <li><a href="#contact" className="hover:text-orange-primary transition-colors">Work With Us</a></li>
                <li><span className="text-zinc-600 font-mono">CWD: capsloop workspace</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border-dark flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-muted">
            <span>&copy; {new Date().getFullYear()} capsloop. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#contact" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="https://zetap.capsloop.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ZeTap Link</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
