<div align="center">
  <h1>maalik.dev</h1>
   <img height="400px" width="auto" src="https://res.cloudinary.com/maalik-dev/image/upload/v1694112941/maalik-dev-mac_m4w7tc.png">
   <img height="400px" height="auto" src="https://res.cloudinary.com/maalik-dev/image/upload/v1694112004/733E9B05-B825-4A3A-B6D4-CCBA98B1DE0E_ill6kz.png">
  <p>🔥 Personal website built with Next.js, TypeScript, Tailwind CSS, SWR.</p>
</div>
<br />

## Introduction

This website was built from scratch using Next.js and was first initialized in June 2023. It will undergo regular updates and serve as both a valuable learning resource and a platform for me to share my knowledge.
<br /><br />

## Features

On this website there are several features that will continue to be updated and added in the future.

### 🤖 ChatGPT AI

You can access this feature by opening the command palette [cmd+k], then typing whatever you want to search/ask for.

Note:

If you're using Chat Completions engine model of ChatGPT, please concern about this:

Due this site is using free cloud hosting services (Vercel) with certain limitations (Serverless Function Execution Timeout), sometimes an error will occur if the response from the open AI API is too long, but you can change it in the vercel.json file to upgrade memory and maxDuration to be bigger according to the capabilities of your vercel plan.

### 🎧 Spotify

Displays song information being played on spotify in real time using the Spotify API and SWR.

### 🕗 Wakatime

Data is retrieved using the Wakatime API and then displayed on the dashboard, built with Next.js API routes deployed as serverless functions.

### 📝 Blogs

The CMS Blog on this website utilizes the API from the dev.to platform. The displayed articles are one-to-one with the articles published on my dev.to blog and are updated in real-time.

The data fetching technique used to retrieve articles from dev.to involves using Client-Side Rendering (CSR) for the blog list and Server-Side Rendering (SSR) for the blog details.

### 🗳 Projects

The data projects is stored in mdx files compiled at build time
<br /><br />

## Getting Started

If you are interested in running this project on your local machine, you can do so in just 3 easy steps below. Additionally, remember to update the ".env.example" file to ".env" and replace the variables with your own in the ".env" file.

### 1. Clone this template using one of the three ways:

1. Clone using git

   ```bash
   git clone https://github.com/MalikBagwala/maalik.dev
   ```

2. Using `create-next-app`

   ```bash
   npx create-next-app -e https://github.com/MalikBagwala/maalik.dev project-name
   ```

3. Using `degit`

   ```bash
   npx degit MalikBagwala/maalik.dev YOUR_APP_NAME
   ```

4. Deploy to Vercel or Netlify, etc

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/MalikBagwala/maalik.dev)
   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/MalikBagwala/maalik.dev)

### 2. Install dependencies

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
yarn install
```

### 3. Run the development server

You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.
<br /><br />

## License

Licensed under the [GPL-3.0 license](https://github.com/MalikBagwala/maalik.dev/blob/master/LICENSE).
