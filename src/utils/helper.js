export default {
    base64_encode: (b) => {
        return Buffer.from(b).toString('base64')
    },
    base64_decode: (b) => {
        return Buffer.from(b, 'base64').toString('ascii')
    },
    isAlphaNumeric: (str) => {
        var c, i, len;
        for (i = 0, len = str.length; i < len; i++) {
            c = str.charAt(i)
            if (!(c >= '0' && c <= '9') && 
                !(c >= 'A' && c <= 'Z') &&
                !(c >= 'a' && c < 'z')) {
                return false;
            }
        }
        return true;
    },
    handleResponse: (status, message, data) => {
        
    }
}