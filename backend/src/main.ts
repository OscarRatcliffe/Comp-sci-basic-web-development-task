const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

let superSecuredB = [["Oscar", "Password", 0, "The Code"], ["admin", "admin", 0,"Super secure admin account"]]

const app = express();
const port:number = 4000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test", (req: any,res: any) => {
    res.send("Hello word")
    console.log("Hello world")
})

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

app.post("/login", (req: any, res: any) => {

    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password)

    for (let i = 0; i < superSecuredB.length; i++) {
        if (username == superSecuredB[i][0] && password == superSecuredB[i][1]) {

            let token = Math.floor(Math.random() * 1001);

            superSecuredB[i][2] = token

            res.send({
                "sessionToken": token
            })

         } else {
             
        }
    }

    res.send({
        "sessionToken": -1
    })

})

app.get("/code/:SessionToken", (req: any,res: any) => {

    console.log("Request made")
    
    console.log(req.params.SessionToken)

    res.status(401)

    for (let i = 0; i < superSecuredB.length; i++) {

        if(req.params.SessionToken == superSecuredB[i][2]) {

            res.status(200)
            res.send({
                "code": superSecuredB[i][3]
            })
        }
    }
})