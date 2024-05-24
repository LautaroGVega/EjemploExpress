import {Router} from 'express'
const router = Router()


router.get('/', (req, res)=> res.render('index.ejs', {title: "Home"}))

router.get('/about', (req, res)=> res.render('about.ejs',{title: " Ejemplo about "}))

router.get('/contact', (req, res)=> res.render('contact.ejs',{title: "Ejemplo contacto"}))

export default router