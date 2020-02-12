import express from 'express';
import admin from '../controllers/admin';
import adminCheck from '../middleware/checkAdmin';
import authorisation from '../middleware/authorisation';

const router = express.Router();

router.get('/accounts', [authorisation, adminCheck], admin.viewBankAccounts);


export default router;