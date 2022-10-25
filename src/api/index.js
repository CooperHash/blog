import service from "./axios";
const header = `Bearer ${localStorage.getItem('user')}`

export function getArticle() {
    return service({
        url: '/blog/api/getArticle',
        method: 'get',
    })
}

export function getStandard() {
    return service({
        url: '/standard/api/getStandard',
        method: 'get',
        headers: {
            'Authorization': header
        },
    })
}

export function getSingleStandard(id) {
    return service({
        url: '/standard/api/getSingleStandard',
        method: 'get',
        params: {
            id: id
        },
        headers: {
            'Authorization': header
        },
    })
}

export function getVideo() {
    return service({
        url: '/video/api/getAllVideo',
        method: 'get'
    })
}

export function getSingleVideo(id) {
    return service({
        url: '/video/api/getVideo',
        method: 'get',
        params: {
            vid: id
        }
    })
}

export function saveTranslate(translate,id) {
    return service({
        url: '/standard/api/saveTranslate',
        method: 'put',
        data: {
            translate: translate,
            id: id
        }
    })
}


export function login(user, pass) {
    return service({
        url: '/user/api/login',
        method: 'get',
        params: {
            username: user,
            userpassword: pass
        }
    })
}


export function getPerson(name) {
    return service({
        url: '/person/api/getPerson',
        method: 'get',
        params: {
            name: name
        }
    })
}


export function getTalk() {
    return service({
        url: '/talk/api/getAllTalk',
        method: 'get'
    })
}


export function getSingleTalk(id) {
    return service({
        url: '/talk/api/getTalk',
        method: 'get',
        params: {
            id: id
        }
    })
}