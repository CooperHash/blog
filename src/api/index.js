import service from "./axios";

export default function getVideo() {
    return service.get({
        url: '/video/api/getVideo'
    })
}