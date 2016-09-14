const fs = require('fs')
const generateThemes = require('./lib/generate-themes')

const css = fs.readFileSync('./node_modules/tachyons-skins/src/tachyons-skins.css', 'utf-8')

fs.writeFileSync('themes.json', JSON.stringify(generateThemes(css, 7)))
