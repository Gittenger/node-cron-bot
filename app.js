const cron = require('node-cron')
const axios = require('axios').default

const urls = [
	'https://art-shoppe.herokuapp.com/',
	'https://john-mern-template-demo.herokuapp.com/',
	'https://natours-john-p.herokuapp.com/',
]

const ping = url => {
	axios.get(url, {}).catch(err => console.log(err.message))
}

cron.schedule(
	'*/10 * 9-21 * * 0-5',
	() => {
		urls.forEach(url => {
			ping(url)
		})
	},
	{
		scheduled: true,
		timezone: 'America/New_York',
	}
)
