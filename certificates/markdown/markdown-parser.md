## How I Built a Tiny Markdown Parser (Out of Pure Curiosity)
![Screenshot of my JavaScript Markdown parser code](/certificates/markdown/markdown_snippet.png)
---
I was just briefing myself on how to write markdown so that I can start writing blogs, and a question arose: how does this actually work , like I knew that its getting parsed but like how?
I got curious and tried it out for headings and paragraphs by myself.

##### This is how I did it:

###### I wrote a small piece of JavaScript to act as the **brain** for the whole thing. Nothing ~~fancy~~, just something on a very small scale that could understand my hashes _( h1 - h6 )_ and _plain text_.

I had to tell my code exactly where to look on the page.

- I grabbed the input box where I type,
- the output area where the magic happens,
- and the "Convert" button.

```js
const input = document.getElementById("input");
const output = document.getElementById("output");
const button = document.getElementById("convert");
```

> It’s like setting up a desk and making sure all your tools are within reach before I start working.

The real logic kicks in the moment I click that button.

```js
button.addEventListener("click", () => {
  const md = input.value;
  const tokens = tokenize(md);
  output.innerHTML = render(tokens);
});
```

##### I set it up so that the second I click,

- the code grabs everything I typed and starts acting like a detective.

  > computer doesn't see a "blog post". It just sees one giant, messy string of letters.

- I told my code to chop that text up every time it sees a new line.
- So now , instead of a ~~mess~~, it has a **neat** list of lines to check one by one.

##### The "tokenizing" part.

It sounds like a big word, but it's really just like sorting through a bag of candy.
My code looks at each line and asks, "Hey, do you start with a # symbol?"

- If it sees those hashes, it counts them.
- If it sees one #, it knows it’s a big heading.
- If it sees six, it knows it’s a tiny one.
- It saves that info like a little sticky note.
- But if there are no hashes at all? It just realizes, "Okay, this is just a normal paragraph," and moves on.

Once it has all those notes ready,

```js
function tokenize(md) {
  const lines = md.split("\n");
  const tokens = [];
  for (const line of lines) {
    const headingMatch = line.match(/^(#{1,6}) (.+)$/);
    if (headingMatch) {
      tokens.push({
        type: "heading",
        depth: headingMatch[1].length,
        content: headingMatch[2],
      });
    } else {
      tokens.push({
        type: "text",
        content: line,
      });
    }
  }
  return tokens;
}
```

##### It does the final "rendering" bit.

This is just a simple translation job. It takes those notes and wraps them in HTML tags—like putting **h1** around the big titles and **p** around the regular text. It glues all those pieces back together and throws them into the output box for the browser to display.

```js
function render(tokens) {
  return tokens
    .map((token) => {
      if (token.type === "heading") {
        return `<h${token.depth}>${token.content}</h${token.depth}>`;
      }
      return `<p>${token.content}</p>`;
    })
    .join("");
}

```

And honestly, **that’s the whole secret**.

> It’s just a cycle of grabbing the text, looking for patterns, and swapping those patterns for HTML.
> It’s cool to see how such a simple idea is what actually powers the blog editors we use every day.
