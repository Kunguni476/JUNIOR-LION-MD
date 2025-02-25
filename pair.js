const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkpNOUtIckpPSG94eHNWUmRrZlZBSzVKZVRaQzVoaVFlb3g0QTBoS28xaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnV3V0Nua1pKa2tyR3kvMk5ZazNxWTA5SzUyOGRDQ1h2MHFRSGI5c1gyWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTkRXZ3VLTG42RVl3bEJoQjdHK0FkaUlicWFiTVpwT0lCVS9tZ1pjMTNNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRUUtrQ0pQck9NU3FIYTRuS3FxQXVzMUlHTnFXay9rSWRUWTVETGplSkNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVHZ3pEWUlqQ2NJY3ZJRlZvNENhWU9kdm0rOTRpUW1CcVEveVpiTjdBa0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZFZnU3b1QxdzFWWUtKMElsSmJOZ0U3Z2QxUFRBaGpUS3B2NHJqMzRPUUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBwQ0dVY3B5YmRmQVBUdTM1TWxURGVhSGNqQVJ4a09sbFRTNWRQV2Qwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGpCOENzaDJ1azM3SXBQbGdkd3VKS0Q2UXNzVGZKYlNQSWNKQjFyS2FFdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVhRGVTK2xNWTVUVkJ0WEVZcWJKV0cvcU5HQzE1ZkZlV3Vhc0RrdmJ0ZytlQjRwWWRjZlRjak02L2RMZzNuSXFERTRENjFISkcrY21SdURYYzdhMUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTMsImFkdlNlY3JldEtleSI6IklDY1BiRmhrVkY3K2xzL2ZVRndDbFI2OHNVM2VQM1RlOHBZNmhsQmRGemM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InAyU2h2RmRkUk91TERKSXpLbXBxNkEiLCJwaG9uZUlkIjoiYmY2YzZlYTktMGVkYS00YzEyLTkzMWItNDI4MDZlYWIxYTU0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZISU53b3dSVWYycDV6U21VYVVKZWpmUTRSZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSd09HL1BsZmNDY3gySm45WG5yYWtTQTMvejg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNDc3MUY5QzYiLCJtZSI6eyJpZCI6IjI1NDcxODcyOTU1MDo2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMZVBnS2tDRUoyQzk3MEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzSmprM1lRM3RYVUMvdmR1OHcyUkFHZlkrOGFjZE1Cc0hQTWlWNVd1eUNVPSIsImFjY291bnRTaWduYXR1cmUiOiJZZ1Awc3FncWJkeSt2cEwrbU1QeE5IaWsvYkYvTnRIM2xNZXZZNVQ3V25OMzRUS0w3bENVdGtzYnNRa0xYelVENTR5am5DQWRub0xyd2FTWmhDNjhDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTnNhQzhyLzJyOEZ0bWx4ODh0WHNrcE9zNVROVk1wSHB6ZnZ5NWlSSzJ1U0t3cHdCZ3V4R204OXdnNXQ0dmxzL3BGck8vTDh1WDRWdUFzb21jdWQ4Qnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MTg3Mjk1NTA6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkeVk1TjJFTjdWMUF2NzNidk1Oa1FCbjJQdkduSFRBYkJ6eklsZVZyc2dsIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQwNDg5MDAzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1nZiJ9');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: France_King,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function FLASH_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_France_King = France_King({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_France_King.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_France_King.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_France_King.ev.on('creds.update', saveCreds)
            Pair_Code_By_France_King.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id, { text: ''+ b64data });

               let FLASH_MD_TEXT = `




❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒

*JUNIOR LION MD SESSION CONNECTED*

❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
`
 await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id,{text:FLASH_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_France_King.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    FLASH_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service is Currently Unavailable"});
         }
        }
    }
    return await FLASH_MD_PAIR_CODE()
});
module.exports = router
