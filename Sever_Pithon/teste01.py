from flask import Flask, request, render_template

app = Flask("teste")

#Dicionário de usuários e senhas
usuarios = []


def buscarUsuario (username):
    for u in usuarios:
        if username == u["nome"]:
            return u
    
    return False
        
@app.route('/processar_cadastro', methods=['GET'])
def processar_cadastro():
    if request.method == 'GET':
        nome = request.form.get('nome')
        data = request.form.get('data')
        email = request.form.get('email')
        senha = request.form.get('senha')
        codigo = request.form.get('codigo')
        
        usuarioRecebido = {
            "nome": nome,
            "data": data,
            "email": email,
            "senha": senha,
            "codigo": codigo
        }
        
        usuarios.append(usuarioRecebido)

        
        return "1"

@app.route('/autenticar', methods=['GET'])
def login():
    username = request.args.get('username')
    password = request.args.get('password')
    
    print(username,password)
    
    usuarioSelecionado = buscarUsuario(username)

    if usuarioSelecionado != False and usuarioSelecionado["senha"] == password:
        return "1"
    else:
        return "0"

app.run('0.0.0.0', port=5000)
       
