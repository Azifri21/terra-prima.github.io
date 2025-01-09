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
        title: "Chapter 1: Claudia Luna", //the title of the page (leaving this blank will default it to "Page X")
        //date: writeDate(2021, 3, 16), //the date on which the page was posted (mainly for the archive). The date is written using a function called "writeDate", basically just put writeDate and then some parenthesis and, comma separated, the year followed by the month and the day. Don't forget another comma at the end outside the parenthesis!
        altText: "Chapter 1: Claudia Luna", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 6, //how many image files this page is split into
        authorNotes: `
            <p>We begin the story with Claudia, who's not having the best day.</p>
            `,
    },
    {
        pgNum: 2,
        title: "Chapter 2: Desquicio",
        altText: "Chapter 2: Desquicio", 
        imageFiles: 4, 
        authorNotes: `
            <p>Next comes Desquicio.</p>
            `,
    },
    {
        pgNum: 3,
        title: "Chapter 3: The Madman", 
        altText: "Chapter 3: The Madman", 
        imageFiles: 6,
        authorNotes: `
            <p></p>
            `,
    },
    {
        pgNum: 4, 
        title: "Chapter 4: Dark Sun", //the title of the page (leaving this blank will default it to "Page X")
        altText: "Chapter 4: Dark Sun", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 3, //how many image files this page is split into
        authorNotes: `
            <p></p>
            `,
    },
    {
        pgNum: 5,
        title: "Chapter 5: Divergent paths",
        altText: "Chapter 5: Divergent Paths",
        imageFiles: 1,
        authorNotes: `
            <p></p>
            `,
    },
    {
        pgNum: 6,
        title: "Chapter 6: Correctors",
        altText: "Chapter 6: Correctors",
        imageFiles: 1,
        authorNotes: `
            <p></p>
            `,
    },
    {
        pgNum: 7,
        title: "Chapter 7: Memories of a green forest",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p></p>
            `,
    },
    {
        pgNum: 8,
        title: "Chapter 8: Summer student",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
        pgNum: 9,
        title: "Chapter 9: Departures",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
        pgNum: 10,
        title: "Season 1 ending",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
        pgNum: 11,
        title: "Cookies",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
    pgNum: 12,
    title: "Recap season 1",
    altText: "not yet uploaded",
    imageFiles: 1,
    authorNotes: `
        <p>...</p>
        `,
    },


    {
        pgNum: 13,
        title: "Chapter 10: Identity",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
    pgNum: 14,
    title: "Extra #1 - Space elevator talk",
    altText: "not yet uploaded",
    imageFiles: 1,
    authorNotes: `
        <p>...</p>
        `,
    },
    {
        pgNum: 15,
        title: "Chapter 11: Change of plans (I)",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
        pgNum: 16,
        title: "Chapter 11: Change of plans (II)",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
        pgNum: 17,
        title: "Extra #2 - Terra World Classification",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
        },
    {
    pgNum: 18,
    title: "Postcards of Terra 1",
    altText: "not yet uploaded",
    imageFiles: 1,
    authorNotes: `
        <p>...</p>
        `,
    },
    {
        pgNum: 19,
        title: "Chapter 13: Years ago",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
        },
    {
    pgNum: 20,
    title: "Chapter 14: Difference",
    altText: "not yet uploaded",
    imageFiles: 1,
    authorNotes: `
        <p>...</p>
        `,
    },
    {
        pgNum: 21,
        title: "Chapter 15: What you don't know you lost",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
        pgNum: 22,
        title: "Season 2 ending",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
     },
    {
        pgNum: 23,
        title: "Chance",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
        pgNum: 24,
        title: "Repercussions",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
     },
    {
        pgNum: 25,
        title: "Whispers",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
        pgNum: 26,
        title: "Flower field",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
     },
    {
        pgNum: 27,
        title: "Chapter 16: Rose tinted",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
        pgNum: 28,
        title: "Season 2 recap",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },




    {
        pgNum: 29,
        title: "Chapter 17: Will and choice (I)",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
        pgNum: 30,
        title: "Chapter 18: Threads",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
        pgNum: 31,
        title: "Chapter 19: Will and choice (II)",
        altText: "not yet uploaded",
        imageFiles: 1,
        authorNotes: `
            <p>...</p>
            `,
    },
    {
        pgNum: 32,
        title: "Chapter 20: Will and choice (III)",
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
