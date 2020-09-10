


var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // databaseURL: "https://gqlreactnode-ff8f7.firebaseio.com"
});



exports.authCheck = async (req, res, next = (f) => f) => {

    try {

        const result = await admin.auth().verifyIdToken(req.headers.authtoken)

        console.log(result)

        return result

    } catch (error) {

        console.log("Auth Error" + error)

        throw new Error("Invalid or Expired Token")
    }





}