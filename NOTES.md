## Week 8, Friday
- On a phone, the page scrolled to the side because the header was too wide, I fixed it by adding "flex-wrap: wrap;" to the header in the CSS file.

## Week 9 Wednesday
1. What are your three pages, and why those three?

- My three pages are home, projects, and progress. home and projects we made together but progress is something that (albeit generic) something I felt added value to the website, given I want this website to be an in depth look at me (in a goal oriented way).

2. You changed one thing in styles.css and all three pages changed. What would you have had to do if each page carried its own copy?

- I would have had to change three things each time I wanted to change something across all pages.

3. What is one thing on your page you don't know how to change yet?

- I don't know how to keep a static bar or static elements on the screen without them scrolling.

## Week 9, Friday
1. What width did you pick for your breakpoint, and how did you choose it?

- I set it to 50rem, I choose it by looking at the different devices and how the text looked at different break points, I focused largely on different size tablets (e.g. mini vs medium vs large) to see how the text looked at those sizes and what to set the breakpoint to, so that it could stay readable on smaller tablets as well.

2. The two things you found and fixed at phone width.

- First: I did was I made sure the photo did not clip when the screen width decreased, I added a css rule "img { max-width: 100%; height: auto; }".

- Second: Not at phone width, but one thing was that my profile picture was cutting/laying over the card border so I increased the gap between them by adding "margin-top: 3rem;" to my existing .cards rule.

3. In your own words: what is the difference between justify-content
and align-items?

justify-content moves things along the main axis (horizontally by default) while align-items moves things along the cross axis (vertically by default).

4. Why does the plain rule hold the narrow layout and the media query
hold the wide one, instead of the other way round?

- This is by design as a mobile first or catered toward approach.