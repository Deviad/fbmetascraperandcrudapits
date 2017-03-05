import * as express from 'express';
export const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.render('index', {
        title: 'Express'
    });
});
