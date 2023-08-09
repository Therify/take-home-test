This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started with Next

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Instructions on how to complete the take home assessment

- Fork your branch of the Take Home Repository
- Complete each User Story as a Pull Request: be sure to invite Jessie and Warren as reviewers
- You can always contact myself or Jessie if you have any questions

## The take home test will be an assessment of your ability to

- Learn new technologies independently
- Your ability to ask constructive questions when stuck
  and lastly your ability to interpret business requirements in a technical manner
- It is advised you use good git hygiene: committing early and often, small commits, and good commit messages.

## Your Task

Therify is a matching company, and in this take home test you will be tasked with implementing a portion of our matching experience.
You will not have to implement Authentication for the exercise. Cookie based or LocalStorage based session management is permitted.

## The User Stories

### Filter Provider Directory to reflect Member needs

As a Therify Member, I would like the ability to submit preferential details about myself and see providers who reflect those preferences to that I can better navigate Therify’s directory.

- Given a anonymous (non-logged in) Therify Member
- When submitting a completed preference form
- The application renders provider who match those endorsed preferences

### Persist Member preferences

As a Therify Member, I would like my preferences to be persisted so that upon subsequent visits to the site, I am presented with providers who are tailored to me.

- Given a returning Member
- When loading the web application
- Then render providers tailored to the Members preferences

### — Extra Credit

This extra credit user story will require you to create a new dynamic webpage and develop an interface to display details about a selected Provider.

### View Provider Profile

As a Member, I would like to see more details about a provider so that I may better understand their alignment to my needs.

- Given a Member
- When clicking on a Provider card
- Then render a Provider Profile

Technologies used in this repository:

- Typescript: [https://www.typescriptlang.org/docs/handbook/intro.html](https://www.typescriptlang.org/docs/handbook/intro.html)
- React 18: [https://react.dev/](https://react.dev/)
- Material UI: [https://mui.com/](https://mui.com/)
- NextJS (Page Router): [https://nextjs.org/docs](https://nextjs.org/docs)
  - GetServerSideProps
- Prisma ORM: [https://www.prisma.io/docs](https://www.prisma.io/docs)
- SQLite
- TRCP v9: [https://trpc.io/docs/v9/](https://trpc.io/docs/v9/)
