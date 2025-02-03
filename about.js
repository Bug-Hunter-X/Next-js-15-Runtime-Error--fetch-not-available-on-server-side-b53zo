```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a runtime error because `fetch` is not available on the server-side
  const data = await fetch('/api/data');
  const jsonData = await data.json();

  return (
    <div>About Page</div>
  );
}
```