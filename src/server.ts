import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import router from './router';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   console.log('--It is from client');

//   res.status(200);
//   res.render('');
//   res.json({ message: 'hello' });
// });

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', router);

export default app;
