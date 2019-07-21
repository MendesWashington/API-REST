const mongoose = require("mongoose");

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/APIREST',  {useNewUrlParser: true}).then(()=>{
    console.log("Conexão com sucesso!");
}).catch(()=>{
    console.log("Erro na conexão!");
});

mongoose.Promise = global.Promise;
module.exports = mongoose;