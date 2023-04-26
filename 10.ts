// Write a function that takes a string as input and returns true if it is a valid IPv4 address in dot-decimal notation, and false otherwise

function ValidIPv4Address(address: string): boolean {
    const  = address.split('.');
    if (parts.length !== 4) {
        return false;
    }

    for (let i = 0; i < parts.length; i++) {
        const num = parseInt(parts[i], 10);
        if (isNaN(num) || num < 0 || num > 255 || String(num) !== parts[i]) {
            return false;
        }
    }

    return true;
}

const address = '192.168.1.1';
const isValid = ValidIPv4Address(address);
console.log(isValid);
// Output: true


