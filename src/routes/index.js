import express from "express";
import React from "react";
import {renderToString} from "react-dom/server"
import Index from "../components/pages/index"
import {StaticRouter} from 'react-router-dom';


const router = express.Router();

router.get('/', async (req, res) => {
    const context = {};
    
    const reactComp = renderToString(<StaticRouter location={req.url} context={}><Index/></StaticRouter>);
    res.status(200).render('pages/index', {reactApp: reactComp});
})
;

export default router;