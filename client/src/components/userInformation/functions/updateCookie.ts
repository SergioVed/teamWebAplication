import Cookies from "js-cookie";

export function UpdateCookie(newData: any) {
    const info = Cookies.get("userInfo") ? JSON.parse(Cookies.get("userInfo")!) : {}
    const userInfo = {...info, ...newData}
    Cookies.set("userInfo", JSON.stringify(userInfo))
}