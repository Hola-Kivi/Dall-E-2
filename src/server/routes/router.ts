import { Router } from "express";

import { genImage } from "../controller/genController";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Image:
 *       type: object
 *       required:
 *         - prompt
 *         - imageSize
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the image
 *         prompt:
 *           type: string
 *           description: The prompt of your generated image
 *         imageSize:
 *           type: string
 *           description: The image size
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the Image was added
 *       example:
 *         prompt: "An astronaut riding a horse in photorealistic style"
 *         imageSize: "512x512"
 */

/**
 * @swagger
 * tags:
 *   name: Image
 *   description: The prompt generating API
 * /api/image:
 *   post:
 *     summary: Create a new Image
 *     tags: [Image]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Image'
 *     responses:
 *       200:
 *         description: The created Image.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       500:
 *         description: Some server error
 */

router.route("/image").post(genImage);

/**
 * api-docs
 */
// router.post('/api-docs', (req, res) => {});
// router.get('/api-docs/:id', (req, res) => {});
// router.put('/api-docs/:id', (req, res) => {});
// router.delete('/api-docs/:id', (req, res) => {});

export default router;
