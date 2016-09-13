const postcss = require('postcss')
const customProperties = require('postcss-custom-properties')
const colorable = require('colorable')

module.exports = generateThemes = (css, threshold) => {

  const rules = {}

  const processedCss = postcss([customProperties])
          .process(css)
          .css

  const root = postcss.parse(processedCss)
  root.walkRules(/(^(?!\.hover).*$)/, (rule) => {
    const selector = rule.selector
    const color = rule.first.value
    rules[selector] = color
  })

  return colorable(rules, {
    threshold: threshold,
    compact: true
  })
}
