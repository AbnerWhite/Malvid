'use strict'

const { h } = require('preact')
const { css } = require('glamor')

const shadowBox = require('../styles/shadowBox')
const { PREVIEW_MIN_HEIGHT, PREVIEW_HEIGHT, INSPECTOR_MIN_HEIGHT } = require('../styles/sizes')

const Tabs = require('./Tabs')
const Code = require('./Code')
const Markdown = require('./Markdown')

const style = {

	self: css({
		display: 'flex',
		minHeight: INSPECTOR_MIN_HEIGHT,
		height: `calc(100vh - ${ PREVIEW_HEIGHT } + var(--currentSize-vertical, 0))`,
		maxHeight: `calc(100vh - ${ PREVIEW_MIN_HEIGHT })`
	}),

	shadowBox: css(shadowBox, {
		display: 'flex',
		flexDirection: 'column'
	})

}

module.exports = ({ files, currentComponent, currentTab, setCurrentTab }) => {

	const languages = files[currentTab].languages
	const data = currentComponent.data[currentTab]

	const Viewer = languages[0]==='markdown' ? Markdown : Code

	return (
		h('section', { class: style.self.toString() },
			h('div', { class: style.shadowBox.toString() },
				h(Tabs, {
					data: currentComponent.data,
					currentTab,
					setCurrentTab
				}),
				h(Viewer, {
					languages,
					data
				})
			)
		)
	)

}