/**
 Browser Back/Forward

    Design how you could design a browser back/forward system using two stacks, so that you can visit a series of sites (Google, Yahoo, EBay, go back to Yahoo, then forward again to EBay, then onto Apple, and so on).

    Write pseudo-code for this.
 */

/** Pseudo-code:

    MainStack = stack to store URLs of visited sites
    SecondaryStack = stack to store URLs popped from MainStack for back navigation

    On site visit:
    1. Push the URL of the visited site onto MainStack.

    On pressing the back button:
    1. If MainStack is empty, do nothing (there are no previous sites to go back to).
    2. Pop the top URL from MainStack and push it onto SecondaryStack.
    3. Retrieve the URL from the top of SecondaryStack and navigate to that site.
    4. Push the retrieved URL back onto MainStack.

    On pressing the forward button:
    1. If SecondaryStack is empty, do nothing (there are no sites to go forward to).
    2. Pop the top URL from SecondaryStack and navigate to that site.
    3. Push the retrieved URL onto MainStack.

    GET method (navigation to a site):
    1. When a URL is retrieved from either stack, use a GET method to navigate the browser to that site.
*/