import BlogHero from './components/BlogHero';
import BlogGrid from './components/BlogGrid';

export default function BlogPage() {
  return (
    <div className='min-h-screen bg-background'>
      <BlogHero />
      <BlogGrid />
    </div>
  );
}
