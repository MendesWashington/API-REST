const mongoose = require("mongoose");

mongoose.set('useCreateIndex', true);
//Remve esse erro.
//(node:8532) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
//mongoose.connect('mongodb://localhost/noderest',  {useNewUrlParser: true}).then(()=>{
mongoose.createConnection('mongodb://localhost/noderest',  {useNewUrlParser: true}).then(()=>{
console.log("Conexão com sucesso!");
}).catch(()=>{
    console.log("Erro na conexão!");
});
//mongoose.createConnection('mongodb://localhost:27017/noderest', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;