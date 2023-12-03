const { addAnswers } = require("../model/dbQueries");

module.exports.getHome= (req,res) => {
    const text =  req.body;
console.log(text)
    res.render('home',{dataa:text});
}
module.exports.getSearch = (req,res) => {
    console.log(req.body)
    res.render('search');
}

module.exports.postSearch =(req,res) => {
const text =  req.body;
console.log(text)
addAnswers(text)

res.send({text:text});
/*var num_boucle= 0;
while(functions.listTotree(functions.treatSentence(text.text)).length >1){
   console.log('etape 1 =',functions.listTotree(functions.listTotree(functions.treatSentence(text.text))));

   if(functions.listTotree(functions.listTotree(functions.treatSentence(text.text))).length ==1)
   res.send({data:functions.listTotree(functions.listTotree(functions.treatSentence(text.text)))});
   
}
res.send({data:functions.listTotree(functions.listTotree(functions.treatSentence(text.text)))});*/

}
