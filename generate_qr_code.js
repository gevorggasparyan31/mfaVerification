const speakeasy = require("speakeasy");
const QRCode = require("qrcode");

// Generate a secret key
const secret = speakeasy.generateSecret({ length: 20 });

function generateQRCodeURL() {
    return new Promise((resolve, reject) => {
        QRCode.toDataURL(secret.otpauth_url, (err, dataURL) => {
            if (err) {
                reject(err);
            } else {
                console.log(secret.base32); // secret for verification
                resolve(dataURL);
            }
        });
    });
}

// Generate and display the QR code URL
generateQRCodeURL()
    .then((dataURL) => {
        console.log("Scan the QR code with the Microsoft Authenticator app:");
        console.log(dataURL);
    })
    .catch((err) => {
        console.error("Error generating QR code:", err);
    });
