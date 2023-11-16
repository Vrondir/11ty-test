const { DateTime } = require('luxon')
const embedYouTube = require('eleventy-plugin-youtube-embed')

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./src/style.css')
	eleventyConfig.addPassthroughCopy('./src/assets')
	eleventyConfig.addPassthroughCopy('./src/admin')
	eleventyConfig.addPlugin(embedYouTube)

	eleventyConfig.addFilter('postDate', (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
	})

	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	}
}
