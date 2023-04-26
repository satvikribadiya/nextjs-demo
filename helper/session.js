import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next'

const sessionOptions = {
    password: 'ZeHWNa7GD0ug1062cCFfuXPkbvRCKGnk',
    cookieName: 'rainsop',
    cookieOptions: {
        maxAge: undefined,
        secure: process.env.NODE_ENV === 'production',
    },
}

export function withSessionRoute(handler) {
    return withIronSessionApiRoute(handler, sessionOptions)
}

export function withSessionSsr(handler) {
    return withIronSessionSsr(handler, sessionOptions)
}
const sessionOptionsMLM = {
    password: 'gfr$%rgdgdgg53fds,;/,mkmsdkfmmgd',
    cookieName: 'MLM',
    cookieOptions: {
        maxAge: undefined,
        secure: process.env.NODE_ENV === 'production',
    },
}

export function withSessionRouteMLM(handler) {
    return withIronSessionApiRoute(handler, sessionOptionsMLM)
}

export function withSessionSsrMLM(handler) {
    return withIronSessionSsr(handler, sessionOptionsMLM)
}
const sessionMLMuser = {
    password: 'gfr$%dsffdsfregbcbvc,;/,mkmsdkfm',
    cookieName: 'MLM user',
    cookieOptions: {
        maxAge: undefined,
        secure: process.env.NODE_ENV === 'production',
    },
}

export function withSessionRouteMLMuser(handler) {
    return withIronSessionApiRoute(handler, sessionMLMuser)
}

export function withSessionSsrMLMuser(handler) {
    return withIronSessionSsr(handler, sessionMLMuser)
}