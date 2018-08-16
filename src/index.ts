import 'reflect-metadata';
import * as express from 'express';
import { Request, Response } from 'express';
import { createConnection } from 'typeorm';


createConnection().then(async (connection) => {

    const app = express();

    app.set('env', process.env.APP_ENV);
    app.listen(3000, () => console.log('>>> LISTENING <<<'));

    app.get('/ping', (req: Request, res: Response) => res.send('pong'));

}).catch(error => console.log(error));
