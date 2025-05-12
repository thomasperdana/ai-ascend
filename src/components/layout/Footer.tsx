
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted py-8 text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AI Ascend. All rights reserved.
        </p>
        <nav className="mt-4 md:mt-0 flex gap-4">
          <Link href="#" className="text-sm hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
