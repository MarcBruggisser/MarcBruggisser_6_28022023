const mongoose = require('mongoose');

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
	.then(() => console.log('Connected to DB'))
	.catch(error => console.error({error}));