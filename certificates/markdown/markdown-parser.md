## How I Built a Tiny Markdown Parser (Out of Pure Curiosity)

---

I was just briefing myself on how to write markdown so that I can start writing blogs, and a question arose: how does this actually work , like I knew that its getting parsed but like how?
I got curious and tried it out for headings and paragraphs by myself.

##### This is how I did it:

I wrote a small piece of JavaScript to act as the **brain** for the whole thing. Nothing ~~fancy~~, just something on a very small scale that could understand my hashes _( h1 - h6 )_ and _plain text_.

I had to tell my code exactly where to look on the page. 
    - I grabbed the input box where I type, 
    - the output area where the magic happens, 
    - and the "Convert" button.

> It’s like setting up a desk and making sure all your tools are within reach before you start working.
