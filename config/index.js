require('dotenv').config();

const config = {
	app: {
		port: parseInt(process.env.PORT) || 3000,
		secretKey: process.env.SECRET_KEY,
	},
 	db: {
 		host: process.env.DB_URL,
 	}
};

module.exports = config;