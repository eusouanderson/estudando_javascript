import {Router} from 'express'


const router = Router();

router.get('/', (req, res) => {
	res.send('router index')
	
}) 

export default router


