import BlogHero from "./components/BlogHero";
import BlogGrid from "./components/BlogGrid";
import BlogNewsletter from "./components/BlogNewsletter";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHero />
      <BlogGrid />
      <BlogNewsletter />
    </div>
  );
}
