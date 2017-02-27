import * as express from 'express';
import * as Connection from './connection';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/publish';


const app: express.Express = express();


app.get('/api/richlinks', function (params: {req: any, res: any, connection: Connection}) {


    (function(){

        var source = Observable.from(Connection(params.req, params.res));
         source.subscribe(
             response => response
         );
    })();

});


app.listen(5100, function () {
    console.log('Example app listening on port 5100!');
});



export default app;