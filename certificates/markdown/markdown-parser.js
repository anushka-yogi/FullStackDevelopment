// # Hello
// ## World
// ### Subheading
// normal text
// ###### Tiny heading
const input = document.getElementById("input"); // text field to convert text to markdown
const output = document.getElementById("output"); // where the mardown will be shown after conversion
const button = document.getElementById("convert"); // button to convert
button.addEventListener("click", () => {
  const md = input.value;
  const tokens = tokenize(md);
  output.innerHTML = render(tokens);
});
function tokenize(md) {
  const lines = md.split("\n"); // assuming each heading has its own lines
  const tokens = []; // array to store parsed tokens
  for (const line of lines) {
    const headingMatch = line.match(/^(#{1,6}) (.+)$/);
    // ^ from line start
    // (#{1,6})1 to 6 # characters (capture group 1 )
    // Space
    // (.+)Anything after space (capture group 2 (the heading text))
    // $Line end
    if (headingMatch) {
      tokens.push({
        type: "heading",
        depth: headingMatch[1].length, // group 1
        content: headingMatch[2], // group 2
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
