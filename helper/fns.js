

export function string(str) {
    return /^[a-zA-Z .]*$/.test(str);
}
export function alphabet(str) {
    return /^[A-Za-z]+$/.test(str);
}
export function alphabetwithspace(str) {
    return /^[a-zA-Z ]*$/.test(str);
}
export function email(str) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)
}
export function password(str) {
    return /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/.test(str)
}
export function currenttime() {
    return Math.floor(new Date() / 1000)
}
export function number(str) {
    return /^[0-9]*$/.test(str)
}
export function toStringify(str) {
    return JSON.stringify(str)
}
export function keyStore(a) {
    const q = {
        adminPs: "^OM*#h1pVZ0(N/*xd}v0ze~5YVA:EDK3"
    };
    return q[a];
}
export function enc(textToEncrypt, secret) {
    var iv = secret.substr(0, 16);
    var encryptor = crypto.createCipheriv("aes-256-ctr", secret, iv);
    return (
        encryptor.update(textToEncrypt, "utf8", "base64") +
        encryptor.final("base64")
    );
}

export function dec(encryptedMessage, secret) {
    var iv = secret.substr(0, 16);
    var decryptor = crypto.createDecipheriv("aes-256-ctr", secret, iv);
    return (
        decryptor.update(encryptedMessage, "base64", "utf8") +
        decryptor.final("utf8")
    );
}
export const response = (status_, data_, message) => {
    return { status: status_, data: data_, oth: message }
}