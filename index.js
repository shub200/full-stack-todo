const express = require('express');
const app = express();
const path = require('path');
const fs = require('node:fs');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    fs.readdir(`./files`, (err, files) => {
        res.render("index", {files: files});
    })
})
app.get('/files/:filesname', (req, res) => {
    fs.readFile(`./files/${req.params.filesname}`, 'utf8', (err, data) => {
        res.render("show", {filesname: req.params.filesname, filesdata: data});
    })
})

app.post('/create', (req, res) => {
   fs.writeFile(`./files/${req.body.title}`, `${req.body.details}`, (err, data) => {
       if(err) console.log(err)
   })
   res.redirect('/')
})
app.post('/delete', (req, res) => {
   fs.unlink(`./files/${req.body.filename}`, (err) => {
       if(err) console.log(err)
   })
   
   res.redirect('/')
})


app.listen(3000)