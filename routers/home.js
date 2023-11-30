const express=require('express')
const {getCuersers,getCuerser,insertCuerser,updateCuerser,deleteCuerser,callStordeProcedure}=require('../controllers/ctl-setdata')

const Router=express.Router();

Router.get('/getdatas',getCuersers);
Router.get('/getdata/:_id',getCuerser);
Router.post('/insertdata/',insertCuerser);
Router.post('/updatedata/:_id',updateCuerser);
Router.get('/deletedata/:_id',deleteCuerser);
Router.get('/callStordeProcedure/:_id',callStordeProcedure);

module.exports = Router;