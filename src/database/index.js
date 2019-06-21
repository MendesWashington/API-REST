const mongoose = require("mongoose");

mongoose.createConnection('mongodb://localhost/noderest',  {useNewUrlParser: true}).then(()=>{
    console.log("Conexão com sucesso!");
}).catch(()=>{
    console.log("Erro na conexão!");
});
//mongoose.createConnection('mongodb://localhost:27017/noderest', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;