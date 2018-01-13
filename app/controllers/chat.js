module.exports.iniciaChat = function(application,req,res){
    
    var dadosForm = req.body;
    
    req.assert('apelido','Nome ou usuário é obrigatório').notEmpty();
    req.assert('apelido','Nome ou usuário deve conter entre 3 e 15 caracteres').len(3,15);
    
    var erros = req.validationErrors();
    
    if(erros){
        res.render("index", {validacao: erros});
        return;
    }
    //recupera o aplido do chat para passar como parametro e mostrar no chat
    application.get('io').emit(
    'msgParaCliente', {apelido: dadosForm.apelido, mensagem: 'Acabou de entrar na sala'});
    
    res.render("chat", {dadosForm: dadosForm});
}