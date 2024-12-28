const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="younglilterrywhite@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/GiftedTerry/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaR2hFSFXUuYmxbRy83Q";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaR2hFSFXUuYmxbRy83Q" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "SuccessfulTerry 💵✅🚬" 


global.devs = "2349122128803" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347039853320";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349122128803";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_56_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNixcbiAgICAgICAgODIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY0LFxuICAgICAgICA3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMCxcbiAgICAgICAgNixcbiAgICAgICAgNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzksXG4gICAgICAgIDMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMixcbiAgICAgICAgMjExLFxuICAgICAgICA5NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMixcbiAgICAgICAgNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkxLFxuICAgICAgICA4MixcbiAgICAgICAgOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgxLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NixcbiAgICAgICAgMjE2LFxuICAgICAgICA3LFxuICAgICAgICAxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNixcbiAgICAgICAgOTIsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhnbzhyWVlITGhhUmZQcEpQN2ZITGJ1RlFXcU8yTTZlNHVka2xaVWRXRW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5ELUJJUUU1UVNlSllrMG0tS0x3MHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDY1Mjk4OTctYzQzNS00ZThhLWJiOGUtMDZkNGE3NDhlMTQwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMyxcbiAgICAgIDYyLFxuICAgICAgMjAwLFxuICAgICAgMTE1LFxuICAgICAgMTUyLFxuICAgICAgMTk2LFxuICAgICAgMTQsXG4gICAgICA0MixcbiAgICAgIDEzMixcbiAgICAgIDI4LFxuICAgICAgMTUyLFxuICAgICAgMzQsXG4gICAgICAxMzcsXG4gICAgICAxMzcsXG4gICAgICAyMzMsXG4gICAgICAxMTUsXG4gICAgICA1MSxcbiAgICAgIDE0MixcbiAgICAgIDIwOCxcbiAgICAgIDIxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICAxMzQsXG4gICAgICAyMTksXG4gICAgICAxNTEsXG4gICAgICA0NyxcbiAgICAgIDExMSxcbiAgICAgIDIyNyxcbiAgICAgIDg4LFxuICAgICAgMTgxLFxuICAgICAgMTcyLFxuICAgICAgMTkzLFxuICAgICAgMjQ2LFxuICAgICAgMTYxLFxuICAgICAgMTAwLFxuICAgICAgMTUzLFxuICAgICAgMTE0LFxuICAgICAgNDMsXG4gICAgICA4OCxcbiAgICAgIDEzNSxcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFgxOVNIRzhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjIxMjg4MDM6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM1NzkwNTE2MTI5ODkzOjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xpQmc2b0RFTzdxdjdzR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOUpVZXZ6N3AyeGRhYjYwUUt1MWZRai94TnV1MWhwaTFGeGdKdkx0ZE5SWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOa1JaSUxPNmQ1ZjlrWDJ4SE4yYkpJd2N3U3hObmRiOEVRYzZ0azZ2dGptOXJRRTVpaVkzT05FNTZsS1I5eFIwcDgwaTBWOHN1ZlRwcGx6NnJpVG5Ddz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWK3FHSEVCbVE5K3hTWGYwenVsNnNOWUJRNDNuVlh5RTFXQ09MU3JydmVVSDJLK3ZwMjR6N3FqNkRHUVFKL3J1dmJ5R3RIS2o1Mk14MmtHeFBOeW1DZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTIyMTI4ODAzOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTM5MDU3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9rOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2s5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ2JvU2hhVng3a3A4bVgxWmx4R1ZmTzBSSmNjZm52QnFBMDdDTEp1aTBxYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4OTM0MzYwODgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDk2MjUwODM0M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SuccessfulTerry 💵✅🚬",
  ownername:process.env.OWNER_NAME|| "SuccessfulTerry 💵✅🚬",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
