var tentativas = 0

do{
var user = prompt("Insira seu login")

var pass = prompt("Insira sua senha")


var meuLogin = "Joran"

var minhaSenha = "1234"

if (user == meuLogin && pass == minhaSenha){
    alert("Está logado")
    tentativas = 4
} else{
    alert("Senha ou User incorreto!")
    tentativas++}

}while(tentativas < 3)
if(tentativas == 3){
    alert("Usuário bloqueado")
}