const connect = require('./dbConfig');


module.exports.addAnswers =async (answers)=>{
 console.log(answers.text1)
    const sql = `INSERT INTO answers(answer1,answer2,answer3,answer4,answer5) VALUES (?,?,?,?,?)`;
 const state =await (await connect).execute(sql,[answers.text1,answers.text2,answers.text3,answers.text4,answers.text5] );
 if(state[1])
 throw err
      console.log("1 form inserted ")
}