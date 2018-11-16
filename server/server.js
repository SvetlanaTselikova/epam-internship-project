let express=require('express');
let bodyParser = require("body-parser");
let fs=require('fs');
let app=express();
let jwt= require("jsonwebtoken");

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

let jsonParser = bodyParser.json();

function checkToken (req) {
  let user= {
    id:'',
    hasAccess:false
  }
  let token;
  let header = req.headers["authorization"];
  if (typeof header !== 'undefined') {
      var bearer = header.split(" ");
      token = bearer[0];
    } else return user

  let decoded = jwt.verify(token, 'shhhhh');
  let data = fs.readFileSync("users.json", "utf8");
  let users=[];
  if(data) {
    users = JSON.parse(data);
  }
  let id
  for (let i=0; i<users.length;i++) {
    if (users[i].id===decoded.id)
      { user.hasAccess=true
        user.id=decoded.id
      }
    } 
  return user 
}

app.post("/api/users/register", jsonParser, function (req, res) {
  let data = fs.readFileSync("users.json", "utf8");
  let users=[];
  if(data) {
    users = JSON.parse(data);
  }
  let id;
  let check=true
  for (let i=0; i<users.length;i++) {
    if (users[i].phone===req.body.phone)
      { 
        check=false
      }
  }
  if (check) {
    if (users.length>0) id=users[users.length-1].id+1;
    else id=1;
    let user = {id:id, name:req.body.name, phone:req.body.phone, password:req.body.password };
    users.push(user);
    data = JSON.stringify(users);
    fs.writeFileSync("users.json", data);
    res.send(user);
  }
  else {res.statusCode=400
    res.send();
  }
});

app.post("/api/users/auth", jsonParser, function (req, res) {
  let data = fs.readFileSync("users.json", "utf8");
  let users=[];
  if(data) {
    users = JSON.parse(data);
  }
  let check=false;
  let err = {
    errPhone: true,
    errPass: true
  }
  let userId;
  for (let i=0; i<users.length;i++) {
    if (users[i].phone===req.body.phone)
      { 
        err.errPhone=false
        if (users[i].password===req.body.password) {
          check=true;
          err.errPass=false
          userId=users[i].id
        }
      }
  }
  
  let userToken = jwt.sign({ id: userId }, 'shhhhh');
  
  if (check) {
  res.send(JSON.stringify({token:userToken})) 
  }
  else { res.statusCode=400
    res.send(JSON.stringify(err));
}
});

app.get('/api/users/me', jsonParser, function (req, res) {
  let user=checkToken(req)
  if (user.hasAccess){
  let data = fs.readFileSync("users.json", "utf8");
  let users=[];
  if(data) {
    users = JSON.parse(data);
  }
  let profile;
  for (let i=0; i<users.length;i++) {
    if (users[i].id===user.id)
      { 
        profile = {
          name:users[i].name,
          phone:users[i].phone
        }
      }
    } 
  res.send(JSON.stringify(profile));
  }
  else res.sendStatus(403);
});

app.post("/api/users/record", jsonParser, function (req, res) {
  let user=checkToken(req)
  if(!req.body) return res.sendStatus(400);
  let data = fs.readFileSync("record.json", "utf8");
  let records=[];
  if(data) {
    records = JSON.parse(data);
  }
  let id;
  if (records.length>0) id=records[records.length-1].id+1;
  else id=1;
  let record = {id:id, userId:user.id, date:req.body.date,time:req.body.time, service:req.body.service };
  records.push(record);
  data = JSON.stringify(records);
  fs.writeFileSync("record.json", data);
  res.send(record);
});

app.get('/api/users/myRecords', jsonParser, function (req, res) {
  let user=checkToken(req)
  if (user.hasAccess) {
    let recordData = fs.readFileSync("record.json", "utf8");
    let records=[];
    if(recordData) {
      records = JSON.parse(recordData);
    }
    let myRecords=[];
    let check=false;
    for (let i=0; i<records.length;i++) {
      if (records[i].userId===user.id)
        { check=true;
          myRecords.push({
            id:records[i].id,
            date:records[i].date,
            time:records[i].time,
            service:records[i].service
          })
        }
      }
     res.send(myRecords) 
  }
  
  else res.sendStatus(403);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});