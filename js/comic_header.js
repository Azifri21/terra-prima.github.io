//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeader").innerHTML = `
    <header align="center">
        <a href="index.html"><img src="./img/logo.png" alt="Terra Prima logo" /></a> 

        <div id="nav">
            <a href="index.html">HOME</a> |
            <a href="comic.html">NEWEST CHAPTER</a> |
            <a href="characters.html">CHARACTERS</a> |
            <a href="locations.html">LOCATIONS</a> |
            <a href="gallery.html">GALLERY</a> |
            <a href="fanart.html">FANART</a> |
            <a href="links.html">LINKS</a> |
            <a href="others.html">OTHER STORIES</a> |
        </div>
    </header>
`;