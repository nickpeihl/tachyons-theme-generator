# Tachyons Theme Generator

This silly thing generates [WCAG accessible themes](https://www.w3.org/TR/WCAG20/#visual-audio-contrast) from the CSS colors in [Tachyons Skins](http://github.com/tachyons-css/tachyons-skins). It's a bit hacky and opinionated so use at your own peril.

## Directions

1. Clone the repo and `cd tachyons-theme-generator`
2. Run `npm install`
3. Run `npm start` to generate themes.json
4. Serve directory as a local webserver using `ecstatic` or something similar
5. Open index.html from <http://localhost:8000>

## TODO
* Dedupe color combinations
* Separate text and bg colors

## More

* [Tachyons-Skins](http://github.com/tachyons-css/tachyons-skins)
* [Colorable](http://github.com/jxnblk/colorable)
* [PostCSS](http://postcss.org)
* [Color Palette Doucmentation for Living Style Guides](http://jxnblk.com/writing/posts/color-palette-documentation-for-living-style-guides/)
