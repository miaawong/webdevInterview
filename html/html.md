1. What are meta tags?
    - meta tags contains info about charset, description, title of the document, etc
    - not displayed on page, but intended for the browser
2. Difference between span and div?
    - div is a block element
    - span is an inline element
    - you cannot insert a block element inside an inline element

WHAT IS THE DIFFERENT BETWEEN BLOCK AND INLINE ELEMENTS?

-   block-level element always starts on a new line and takes up the full width available. (stretches out to the left and right as long as it can)
-   inline element does not start on a new line and only takes up as much width as necessary.

-   a div, is often used as a container for other HTML elements
-   a span, is used as a container for some text

3. What is the difference between defer and async attributes on a script tag ?
    - defer attribute downloads the script when the document has finished parsing it. it waits until it's finish parsing, then it begins
    - async attribute downloads the script during parsing but will pause the parser to execute the script before it has been fully parsed
4. What tools do you use for cross-browser testing?
    - BrowserShots is most common
5. Difference between section, div, article ?
    - <section> = group of content inside is related to a single theme 
        - should appear as an entry in an outline of the page 
        - a major part of the page
    - <article> = an independent item section of content
        - must have h1 tag for title 
        - ex: forum post, article, blog entry, comment
    - <div> = has no special meaning 
        - can be used with the class, lang, title attributes to mark up semantics common to a group of consecutive element 
        - div should be used as a last resort.

-   section and article can be interchangeable. but just make sure it is logical and consistent

6. to make link open in a new window...
   target="\_blank"
7. why would we want to use semantic tags?
    - SEO, accessibility, repurposing, light code
