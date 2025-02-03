# Next.js 15 Runtime Error: fetch not available on server-side

This repository demonstrates a common runtime error in Next.js 15 applications when using `fetch` within a page component on the server-side.  The `fetch` API is not available during the server-side rendering (SSR) process.

## Bug Description
The `pages/about.js` file attempts to use `fetch` to retrieve data. However, this causes an error because Next.js attempts to render this page on the server, and the server-side environment doesn't provide a browser-like context for the `fetch` API.

## Solution
The solution is to use the `getStaticProps` or `getServerSideProps` methods to fetch data during the build or request time, respectively.  This allows you to pre-fetch the data before the component renders on the client-side.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`. You should see a runtime error.

## How to Fix
Refer to `aboutSolution.js` for the correct implementation using `getServerSideProps`.