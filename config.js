const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRABATH-MD~0WMm2TJD#JWmpIluhBwL3KnOJXU-J6uC3ApBOE4-OJTmpoKx-vzc",  //මෙතනට ඔයාගෙ සීසන් id කෝඩ් එක දාන්න 🌟
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/bgFqKh18/20250301-041847.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "*HEY DEAR* ${pushname}\n *I Am AlIVE NOW....! 🖐🏻*",
SUDO_NB: process.env.SUDO_NB || "94767952708",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
