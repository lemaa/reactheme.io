This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



/Sass

/Components - A directory which has a .scss file for each React component
/Pages - A directory which has a .scss file for each page that requires custom styles
/Templates (optional) - A directory for templates if using them (for tools such as gatsby)
/_elements.scss - Any generic styles for the site. Shouldn't have any classes or ids for selectors.
/_keyframes.scss (optional) - Any keyframes or animations I will be using for the site.
/_mixins.scss - Any mixins (style snippets) that will be used over and over
/_variables.scss - Any variables that will be used throughout styles
/app.scss - The file that imports all other scss files


https://wityan.medium.com/next-js-project-structure-1531610bed71

elements
This directory contains all the basic building blocks for your app. For example a button or a headline component.


modules
Create all your components here which are more than a basic building block. This could be a header or a footer component. Most likely those modules are built out of multiple elements.


templates
In the templates directory, you should place all your page templates which are then called from your Next.js specific pages. You can find an example of this pattern in the Repository.

Layouts are used to wrap your Templates and provide them with the components which will be displayed by default in a specific layout. For example, you would include the Footer and the Header in a default layout.