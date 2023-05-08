import { Router } from 'express';

import { genImage } from './controller/genController';

const router = Router();

/**
 * image
 */
router.route('/image').post(genImage);

/**
 * editImage
 */
router.get('/editimage', (req, res) => {});
router.get('/editimage/:id', (req, res) => {});
router.post('/editimage', (req, res) => {});
router.put('/editimage/:id', (req, res) => {});
router.delete('/editimage/:id', (req, res) => {});

export default router;
