---
title: "SafeQL: a developer tool for GraphQL API Security and Performance Testing"
excerpt: "SafeQL is an easy-to-use web-based GUI for GraphQL API security and performance testing. It allows users to test the performance of their GraphQL API by displaying a query's response time (upcoming metrics to include status code, overhead, throughput, and load capacity.) It also tests if their GraphQL API is protected against DDOS attacks."
coverImage: "/assets/blog/safeQL/sand_with_design_mariko_iwata.jpg"
caption: "Sand with patterns c.2024 "
date: "2024-06-16T05:35:07.322Z"
author:
  name: Mariko Iwata
ogImage:
  url: "/assets/blog/safeQL/sand_with_design_mariko_iwata.jpg"
---

SafeQL is an easy-to-use web-based GUI for GraphQL API security and performance testing. It allows users to test the performance of their GraphQL API by displaying a query's response time (upcoming metrics to include status code, overhead, throughput, and load capacity.) It also tests if their GraphQL API is protected against DDOS attacks.

## The Tech Stack & Reasoning

### Next.js/React/TypeScript
TypeScript was chosen to avoid any unnecessary bugs. There's the airbnb article about how they got rid of so many bugs at run time because they converted to TypeScript and that's why we chose it. React was a no brainer because of the flexibility in components and we wanted NextJS for its simplicity in the way the folders were organized and optimized for performance.

### ReactFlow
Our choices were ReactFow or d3. As much as I think d3 is awesome, the argument for ReactFlow was that it would be faster to implement and had the right flow chart we needed. d3 is cool and versatile, but we didin't need the versatility.

### CodeMirror
The question was whether we'd use CodeMirror or Monaco. After some lengthy research we chose CodeMirror because Monaco would have more a steeper learning curve and CodeMiror had documentation that was easy to understand. Which goes to show, documentation, documentation, documentation!

### TailwindCSS
Our options for CSS that we considered were Tailwind, CSS in JS (which I love, but NextJS pages works in it, but not the app router 🥺 [Linaria](https://github.com/callstack/linaria) seems to be a front runner as a substitute that does the same thing)

### PostgreSQL
ACID compliance was more important for us than storing large amounts of data in JSON. Therefore, we decided to use a SQL database and the open source PostgreSQL is what we chose.

### Testing: Jest & Cypress
For unit testing we decided to use Jest and end to end testing we used Cypress. Here's a great [article on why we chose Jest](https://www.linkedin.com/pulse/pros-cons-different-test-tools-jest-craig-risi/)