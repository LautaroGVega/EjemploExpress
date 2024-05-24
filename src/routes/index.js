import {Router} from 'express'
const router = Router()


router.get('/', (req, res)=> res.render('index.ejs', {title: "primer proyecto en nodejs"}))

router.get('/about', (req, res)=> res.render('about.ejs',{title: "about "}))

router.get('/contact', (req, res)=> res.render('contact.ejs',{title: "contact"}))

export default router