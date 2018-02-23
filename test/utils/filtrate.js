'use strict'

const assert = require('chai').assert
const uuid = require('uuid/v4')
const filtrate = require('../../src/utils/filtrate')

describe('filtrate()', function() {

	it('should return components', function() {

		const components = [
			{
				id: uuid(),
				name: uuid(),
				data: [
					{
						id: 'view',
						data: uuid()
					}
				]
			},
			{
				id: uuid(),
				name: uuid(),
				data: [
					{
						id: 'view',
						data: uuid()
					}
				]
			}
		]

		const result = filtrate(components, '')

		assert.deepEqual(result, components)

	})

	it('should return components filtered by name', function() {

		const components = [
			{
				id: uuid(),
				name: uuid(),
				data: [
					{
						id: 'view',
						data: uuid()
					}
				]
			},
			{
				id: uuid(),
				name: uuid(),
				data: [
					{
						id: 'view',
						data: uuid()
					}
				]
			}
		]

		const result = filtrate(components, components[1].name)

		assert.deepEqual(result, [ components[1] ])

	})

	it('should return components filtered by data', function() {

		const components = [
			{
				id: uuid(),
				name: uuid(),
				data: [
					{
						id: 'view',
						data: uuid()
					}
				]
			},
			{
				id: uuid(),
				name: uuid(),
				data: [
					{
						id: 'view',
						data: uuid()
					}
				]
			}
		]

		const result = filtrate(components, `view:${ components[1].data[0].data }`)

		assert.deepEqual(result, [ components[1] ])

	})

})