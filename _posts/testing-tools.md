---
title: "Testing: End-to-End ( E2E ) Pros and Cons"
excerpt: "I like doing research about what tools to use so that I'm not just spending time on building an app with tools that don't fit the project. Recently I did some research on testing tools. I like to summarize them, so I figured I'd do that here on this blog and share for reference."
coverImage: "/assets/blog/safeQL/sand_with_design_mariko_iwata.jpg"
caption: "Sand with patterns c.2024 "
date: "2024-10-16T05:35:07.322Z"
author:
  name: Mariko Iwata
ogImage:
  url: "/assets/blog/safeQL/sand_with_design_mariko_iwata.jpg"
---

I like doing research about what tools to use so that I'm not just spending time on building an app with tools that don't fit the project. Recently I did some research on testing tools. I like to summarize them, so I figured I'd do that here on this blog and share for reference. The information isn't new, but it's a summary of what I found most useful. I link to the source below.

| E2E Tool         | Selenium                                                                                       | Cypress                                                                             | Playwright                                                                                     |
| ---------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| **Breadth**      | Lots of plugins and frameworks (Selenium Base, NightWatch, WebDriverIO, Serenity, Selenide)    | Lots of documentation, extensive library like Cypress Axe for accessibility          | Relatively new (2015), so not much documentation                                                 |
| **Language Support** | Most languages supported                                                                  | JavaScript                                                                          | JavaScript, TypeScript, Python, Java, .NET                                                      |
| **Browser Support**  | All major browsers                                                                        | Limited                                                                             | Chromium, Firefox, Safari                                                                       |
| **Set Up**       | Complex                                                                                       | Easy – under 60 seconds                                                              | Complex                                                                                          |
| **Speed**        | Slow execution, executes remote commands in the browser                                       | Fast execution, runs inside the browser                                              | Fast execution, can run tests in parallel                                                       |
| **Pros**         | Large community for debugging help                                                            | Out-of-the-box features like automatic weights, detailed error messages, screenshots when code fails | Supports a variety of selectors (text, CSS), supports React, Vue, mobile emulation (big pro) |
| **Cons**         | Tests can be flaky                                                                            | iFrame requires plugin, opinionated                                                 | Smaller community, can be complex, less intuitive compared to Cypress                           |

Source: [Joe Colantonio's video about the top 3 E2E Testing tools](https://www.youtube.com/watch?v=50cPIDTo4c4 )