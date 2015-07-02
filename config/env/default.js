'use strict';

module.exports = {
	app: {
		title: 'Arawak',
		description: '',
		keywords: '',
		googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'elcinawillneverbeforgotten',
	sessionCollection: 'sessions'
};
