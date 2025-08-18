import express from 'express'


const router = express.Router();

router.get('/', (res, req) => {
	res.send('Api is Runnig...')
	
}) 

export default router


