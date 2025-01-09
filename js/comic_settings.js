//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 19; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "img/comics"; //directory of the folder where you keep all the comics
const image = "pg"; //what you'll name all your comic pages
const imgPart = "_" //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "png"; //file extension of your comic pages

//THUMBNAIL SETTINGS
const thumbFolder = "img/thumbs" //directory of the folder where you keep all the thumbnail images for the comics, in case you want the archive page to use thumbnails.
const thumbExt = "png" //file extension of thumbnails
const thumbDefault = "default" //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.

//NAVIGATION SETTINGS
const navText = ["First","Previous","Next","Last"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png" //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {pg = maxpg;} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        pgNum: ,
        title: "",
        date: writeDate([YEAR],[MONTH],[DAY]),
        altText: "",
        imageFiles: "",
        authorNotes: ``
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.

const pgData = [
    {
        pgNum: 1, //what page number it is
        title: "Chapter 1: Claudia Luna (pages 1 - 5)", //the title of the page (leaving this blank will default it to "Page X")
        //date: writeDate(2021, 3, 16), //the date on which the page was posted (mainly for the archive). The date is written using a function called "writeDate", basically just put writeDate and then some parenthesis and, comma separated, the year followed by the month and the day. Don't forget another comma at the end outside the parenthesis!
        altText: "chapter 1, pages 1 to 5", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 6, //how many image files this page is split into
        authorNotes: `
            <p>We begin the story!</p>
            `,
    },
    {
        pgNum: 2, //what page number it is
        title: "Chapter 1: Claudia Luna (pages 6 - 9)", //the title of the page (leaving this blank will default it to "Page X")
        altText: "chapter 1, pages 6 to 9", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 4, //how many image files this page is split into
        authorNotes: `
            <p></p>
            `,
    },
    {
        pgNum: 3, //what page number it is
        title: "Chapter 1: Claudia Luna (pages 10 - 15)", //the title of the page (leaving this blank will default it to "Page X")
        altText: "chapter 1, pages 10 - 15", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 6, //how many image files this page is split into
        authorNotes: `
            <p></p>
            `,
    },
    {
        pgNum: 4, //what page number it is
        title: "Chapter 1: Claudia Luna (pages 16 - 18)", //the title of the page (leaving this blank will default it to "Page X")
        altText: "chapter 1, pages 16 - 18", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 3, //how many image files this page is split into
        authorNotes: `
            <p></p>
            `,
    },
    {
        pgNum: 5,
        title: "Chapter 2: Desquicio",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p></p>
            `,
    },
    {
        pgNum: 3,
        title: "Chapter 3: The Madman",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p></p>
            `,
    },
    {
        pgNum: 4,
        title: "Chapter 4: Dark Sun",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p></p>
            `,
    },
    {
        pgNum: 5,
        title: "Chapter 5: Divergent paths",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
        pgNum: 6,
        title: "Chapter 6: Correctors",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
        pgNum: 7,
        title: "Chapter 1: page 6",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
        pgNum: 8,
        title: "Chapter 1: page 5",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
    tmp = []; 
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function writeDate(year,month,day) { //write date of comic page
    const date = new Date(year,month-1,day)
    .toDateString() //format date as Day Month Date Year
    .toString() //convert it to a string
    .slice(4) //remove the Day
    return date
}
