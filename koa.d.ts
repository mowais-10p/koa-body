
declare namespace koa {
    interface Request {
        body: any;
    }
    interface Context {
        body: any;
        log: any;
        token: any;
        cognitoUser: any;
        accessToken: string;
        pagination: any;
    }
}

export = koa;