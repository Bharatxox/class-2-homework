const heading = React.createElement('h1', {className : 'heading'} , "Topics covered");
const subHeading = React.createElement('p', {className : 'subHeading'} , "The following is the list of all the topics cover in the MDN learning area");
const link1 = React.createElement('a', {className : 'link' , href: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"} , "Getting started with the web");
const p1 = React.createElement('p', {className : 'subHeading'} , "Provide a practical introduction to the to the web development to the beginners");
const col1 = React.createElement('div', {className : 'col'} , [link1,p1]);

const link2 = React.createElement('a', {className : 'link', href: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"} , "HTML basics");
const p2 = React.createElement('p', {className : 'subHeading'} , "HyperText Markup Language (HTML) is the code that you use to structure your web content and give it meaning and purpose.");
const col2 = React.createElement('div', {className : 'col'}  , [link2,p2]);

const link3 = React.createElement('a', {className : 'link', href: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics"} , "CSS basics");
const p3 = React.createElement('p', {className : 'subHeading'} , "Cascading Style Sheets (CSS) is the code that you use to style your website. For example, do you want the text to be black or red? ");
const col3 = React.createElement('div', {className : 'col'}  , [link3,p3]);



const container = React.createElement('div', {className : 'container'} , [heading,subHeading,col1,col2,col3]);
ReactDOM.render(container,document.querySelector("#root"));