//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        <p><strong>Terra Prima created by Azifri</strong></p>
        <p>Website also made by Azi; for details and credits visit the <a href="https://github.com/Azifri21/terra-prima.github.io" title="link to GitHub" target="_blank"> GitHub repository</a></p>
        
    </footer>
`;
