const express=require('express');
const app=express();
const PORT=4444;
const hbs=require('hbs');
const path=require('path');
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'static')));
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
let id=1;
app.use(express.urlencoded({extended: true}));
blogs=[];
app.get('/',(req,res)=>{
    res.render('blogs',{blogs:blogs});
})
app.get('/blog/new',(req,res)=>{
    res.render('newblogs');
})
app.get('/blog/:id',(req,res)=>{
    let myid=req.params.id;
    console.log(myid);
    res.redirect('/');
})
app.post('/blog/new',(req,res)=>{
     blogs.push({
        Name:req.body.Name,
        blogContent:req.body.blogContent,
        Image:req.body.Image,
        Id:id
     })
     console.log(id);
     id++;
     console.log(req.body.Name);
     console.log(req.body.blogContent);
     console.log(req.body.Image);
     res.redirect('/')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})