import * as e from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
const root = require('app-root-path');
const cookieParser =  require('cookie-parser');
import * as routes from './routes';


const app = e();

// view engine setup
// app.set('views', `${root}/server/views/`);
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());

app.use('/', routes);

// catch 404 and forward to error handler
app.use((req: e.Request, res: e.Response, next: e.NextFunction) => {
    let err: any = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err: any, req: e.Request, res: e.Response, next: e.NextFunction) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err: any, req: e.Request, res: e.Response, next: Function) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

export default app;