1. CSS "box model" and the layout components that it consists of
    - content = content of the box, where text and images appear
    - padding = area surrounding content, the amount of space between border & content
    - border = border surrounding the padding and content
    - margin = area surrounding the border
2. what is a CSS rule?
    - CSS rules are applied to affect how a document is displayed
    - CSS rules are formed from:
        - set of properties: values to update how the HTML content is
        - selector: selects the elements you want to apply the property values to
3. Sass?
    - Syntacitically Awesome StyleSheets
    - a CSS preprocessor that adds power and elegance to the language
    - you can use variables, nested rules, mixins, inline, imports
        - all with a fully CSS-compatible syntax
        - keeps large stylesheets organized

-   CSS prprocessor is a scripting language that extends CSS by allowing
    developers to write code in one language, then compile it into CSS

4. What is a Mixin and how to use on?
    - a mixin is a block of code that lets us group CSS declarations we may reuse
      ex:
      to define:
      @mixin grid($flex: true) { 
        @if $flex {
      @influde flex;
      } @else {
      display: block;
      }
      }
      to use:
      .row {
      //scss
      @include grid(true);
      //css
      display: -webkit-flex;
      display: flex;
      }
5. Difference between resetting and normalizing CSS?
    - resetting = strip all default browser styling on elements. margins, padding, font-size are reset to be the same.
    - normalizing = preserves useful default styles rather than unstyling everything. corrects bugs for common browser dependencies
6. What does float do ?
    - float pushes an element to the sides of a page.
    - you can have float left, right, none, or inherit
7. how can you clear sides of a floating element?
    - if you clear a side of an element, floating elements will not be accepted on that side. they will then wrap to the next line
    - CLEARFIX
        - elements after a floating element will flow around it. Use clearfix
        - clear: both
8. rapid fire
    - does margin-top and bottom have effect on inline element?
        - no
    - does padding-top or bottom have effect on inline element?
        - no
    - does padding-left or right and margin left or right have effect on inline element?
        - yes
    - in a HTML doc, the pseudo class :root always refers to the <html> element ?
        - true
9. units

    - px = gives a fine grained control and maintains alignment because 1px is guaranteed to look sharp.
      px is not cascade, meaning: they are what they are.
    - em = maintains relative size. you can have responsive fonts. em is the width of the letter 'm', in the specific typeface
      em is cascade
    - % sets font-size relative to the font size of the body.
    - pt (points) are traditionally used in print

10. position
    How absolute, relative, fixed, and static position differ?
    - static = default for every element, the element will flow into the page as it normally would.
    - relative = "relative to itself", but you can give it top:40px and it will move it down 40px from the original spot
        - allows z-index
        - limits the scope of absolutely
    - absolute = positioning that allows you to literally place any page element exactly where you want it
        - top, left, bottom, right to set the location
        - REMOVED FROM THE FLOW OF THE ELEMENTS ON THE PAGE
        - will not be affected by other elements and doesn't affect others as well
    - fixed = fixed position element is positioned relative to the viewport, or the browser window itself
11. display vs visibility
    - visibility hidden vs display none?
    - display: none = removes the element from the normal layout flow and allow other elements to fill in
    - visibility: hidden = tag is rendered, it takes space in the normal flow but it doesn't show.
12. Inline block, inline, vs block?
    - inline = do not break flow, margin/padding will push other elements horizontally. IGNORES height & width
    - block = breaks flow
    - inline-block = go with flow, but takes height and width
13. Box model
    - what are the properties related to box model?
        - height, width, padding, border, margin is related to it
        - everything in a web page is a box where you can control size, position, background,etc.
        - each box/content area is optionally surrounded by padding, border, margin.
    - default box model = content-box, which padding & border values will be added on top of the element's width.
        - so the content-box will be greater than the value you set the element's width to, because you have to include the border/padding values
    - border box = includes the border and padding values within your element's width.
14. Overflow
    - Does overflow: hidden, create a new block formatting context?
    - yes
    - overflow property deals with the content if content size exceeds the allocated size for the content.
      you make extra content visible
15. media queries
    - Does the screen keyword apply to the device's physcial screen or the browser's viewport?
    - browser's viewport
16. pseudo class
    - psuedo class tells you specific state of an element. so you can style dynamically.
    - i have used :hover the most
    - others: :visited, :focus, :nth-child, nth-of-type, :link
17. optimization
    - avoid universal selectors
    - don't repeat yourself
    - remove redundant selectors
    - be specific
18. Sprite
    - when you have multiple images/icons, browser makes separate call to the server for each one of the them.
    - sprite is a technique to combine all/some of them
    - nowadays we can use svgs or icon fonts!
        - icon fonts are vectors, making them scalable to any res, but they still send multiple server requests
        - SVGS, scalable vector graphics, vector-based graphics in XML formatting
            - totally scalable, just a block of XML code
19. Specificity
    - a process of determining which css rule will be applied
    - inline style > id > class > universal
20. Transition
    - allows to add an effect while changing from one style to another
    - you can set which property you want to transition, duration, how you want to transit (linear, ease, ease-in, cubic-bezier)
21. Pre-preprocessor
    - you write css in high level with some special syntax (variables, nested syntax, math operations, etc), and that
      is complied into css. ß
    - preprocessor helps you to speed up develop, maintain
22. Responsive Web Design
    Overview - start small, then go bigger - set a meta viewport tag, which gives the browser instructions on how to control the page's dimensions and scaling - width=device-width = to match the screen's width - do not use large absolute positioning values - use css media queries - media queries to apply styles based on device characteristics - use relative sizes for elements - breakpoints: create them based on content, not specific devices - keep lines of text to a maximum of 8-9 words
    Images - don't apply absolute width - max-width!!!
23. @font-face rule
    - specifies a custom font, font can be loaded from either a remote server or locally.
