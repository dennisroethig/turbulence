import koa from 'koa';
import bodyparser from 'koa-bodyparser';
import route from 'koa-route';
import compose from 'koa-compose';

const spots = [
    {
        id: 1,
        name: 'torquay'
    },
    {
        id: 2,
        name: 'bells'
    }
];

let server_count = 0;

const app = koa()
    .use(bodyparser())
    .use(route.get('/api/spots', function* () {
        this.body = spots;
    }))
    .use(route.get('/api/count', function* () {
        this.body = server_count;
    }))
    .use(route.post('/api/count/inc', function* () {
        this.body = ++server_count;
    }))
    .use(route.post('/api/count/dec', function* () {
        this.body = --server_count;
    }))
    ;

export default function () {
    return compose(app.middleware);
}
