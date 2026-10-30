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

## Week 10, Wednesday
1. In your own words: what is the difference between HTML, CSS and
JavaScript? One sentence each.

- HTML is a markup language, it is not a programming language, it does compile code but rather from a set of rules displays them. CSS is a styling language and also not a programming language, it is used in conjunction with HTML to style how web pages display. JavaScript is a programming language which means that its main job is to execute instructions, algorithms, and change data.

2. What does `defer` do on the script tag, and what breaks without it?

- defer tells the browser to wait until the HTML has been fully loaded before running our script.js file. Without it the page immediately breaks and tries to interact with parts of the HTML that have not loaded.

3. Light mode changed your whole site with five lines of CSS. Why did
that work? What would you have had to do without variables?

- It worked because applying a theme class to the body means applying to anything displayed since everything displayed on the page is contained within the body. Without CSS variables, you would have to one by one write new rules to change the values for every individual element of the page.

4. Something went wrong this week and the Console said nothing at all.
What was it, and how did you eventually find it?

- The error happened when the theme failed to save and stay after refreshing, which showed no red error text in the Console. I eventually found it by running localStorage.getItem("theme") in the Console to see if my click was actually saving the choice. The save was blocked by browser, and it turned out to see it working I had to use the live server page.

5. What is one thing on your page you don't know how to change yet?

- Im not entirely sure how to properly or perfectly fix layout overlaps when using flex-wrap and flex-direction: column on more narrow screens.