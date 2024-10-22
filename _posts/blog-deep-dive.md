---
title: "Personal site deep dive"
excerpt: "Here's a low down of what this blog is made of and why I made the choices I did. Being a software engineer means that there are choices you make for every product that you make. The reasoning for these choices are just as important as what you choose. So, here's the why to this personal site:"
coverImage: "/assets/blog/blog-deep-dive/hanging_hammocks_joshua_tree.jpg"
caption: "test caption 3"
date: "2023-03-16T05:35:07.322Z"
author:
  name: Mariko Iwata
ogImage:
  url: "/assets/blog/blog-deep-dive/hanging_hammocks_joshua_tree.jpg"
---

Here's a low down of what this blog is made of and why I made the choices I did. Being a software engineer means that there are choices you make for every product that you make. The reasoning for these choices are just as important as what you choose. So, here's the why to this personal site:

## Next.js App Directory
I'm using the newer App Directory rather than the pages NextJS because I want to get more comfortable with the newer version of Next. I want this blog to be a learning experience for me and not just implementing what I know.

## MDX
I used the package next-mdx-remote because it allows me to be able to implement code snippets and components in the future while also not having to think about html tags while I write. 

## Vercel for Production
Next and Vercel go hand in hand so it was somewhat of a no brainer, but as I did a comparison (see my google docs chart) I realized that the data storage piece of Vercel was a great fit for me. As I scale I may change, but for now this is what I'm using.
![Hosting Comparision Shopping Chart](/assets/blog/blog-deep-dive/hosting-comparison.jpg)