// Dependencies
import fs from "fs"

// Must be a valid cookie session
const COOKIE = "connect.sid=s%3AunU7SR9WOEP3G60vuH7HR8-q7prPqH2g.Q5wcw9bGCm0QxNpiBlD10ThcMpBB4V8sb2MxYjB%2BTqo"

// The base endpoint
const BASE = "https://www.rogold.live/api/info/"

// Each of the endpoints
const ENDPOINTS = [
    "catalogcss",
    "css",
    "devcss",
    "discovercss",
    "gamecss",
    "groupcss",
    "settingscss"
]

// Loop through each endpoint and save the response
for (const endpoint of ENDPOINTS) {
    // Grab the CSS
    const response = await fetch(`${BASE}${endpoint}`, {
        headers: {
            cookie: COOKIE
        }
    })

    // Save the CSS, log it
    fs.writeFileSync(`${endpoint}.css`, await response.text())
    console.log(`Grabbed ${endpoint} CSS`)
}