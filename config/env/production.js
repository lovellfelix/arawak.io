'use strict';

module.exports = {
    db: process.env.MONGODB_URL || process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mean',
    facebook: {
        clientID: process.env.FACEBOOK_ID || 'APP_ID',
        clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
        callbackURL: '/api/auth/facebook/callback'
    },
    twitter: {
        clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
        clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
        callbackURL: '/api/auth/twitter/callback'
    },
    google: {
        clientID: process.env.GOOGLE_ID || 'APP_ID',
        clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
        callbackURL: '/api/auth/google/callback'
    },
    linkedin: {
        clientID: process.env.LINKEDIN_ID || 'APP_ID',
        clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
        callbackURL: '/api/auth/linkedin/callback'
    },
    github: {
        clientID: process.env.GITHUB_ID || 'APP_ID',
        clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
        callbackURL: '/api/auth/github/callback'
    },
    mailer: {
        from: process.env.MAILER_FROM || 'MAILER_FROM',
        options: {
            service: process.env.MAILER_SERVICE_PROVIDER || 'mailgun',
            auth: {
                user: process.env.MAILER_EMAIL_ID || 'postmaster@arawak.io',
                pass: process.env.MAILER_PASSWORD || '6419c93af51af068b671c02e288a0934'
            }
        }
    },
    
    stripeOptions: {
        apiKey: process.env.STRIPE_KEY || 'sk_test_kaVJ6FqJRCkecspVho9K7u3q',
        stripePubKey: process.env.STRIPE_PUB_KEY || 'pk_test_XdVDGxpniL8niWpo2N8pp5E5',
        defaultPlan: 'free',
        plans: ['free', 'silver', 'gold', 'platinum'],
        planData: {
          'free': {
            name: 'Free',
            price: 0
          },
          'silver': {
            name: 'Silver',
            price: 9
          },
          'gold': {
            name: 'Gold',
            price: 19
          },
          'platinum': {
            name: 'Platinum',
            price: 29
          }
        }
      },: {
        user: process.env.MAILGUN_USER || 'postmaster@arawak.io',
        password: process.env.MAILGUN_PASSWORD || '6419c93af51af068b671c02e288a0934'
      }

};
