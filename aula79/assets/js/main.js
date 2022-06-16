class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector('#form')
        this.eventos();
    }
    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e);
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const validCamps = this.isValid();
        const passwordValid = this.passValid();

        if(validCamps && passwordValid){
            this.formulario.submit();
            alert('Formulario enviado')
        }
    }
    isValid() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }
        for( let campo of this.formulario.querySelectorAll('.validar')){
            const label =  campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `${label} não pode estar vazio`)
                valid = false;
            }
            if (campo.classList.contains('cpf')){
                if(!this.validaCpf(campo)) valid = false;
            }
            if (campo.classList.contains('usuario')){
                if(!this.ValidaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }
    passValid(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha')
        const senha2 = this.formulario.querySelector('.senha2');

        if (senha.value !== senha2.value){
            this.criaErro(senha, 'Senhas devem ser iguais')
            this.criaErro(senha2, 'Senhas devem ser iguais')
            valid = false;
        }
        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
          }
        return valid;
    }
    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true ; 
        if (usuario.length > 12 || usuario < 3){
            this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres');
            valid = false;
        }
        if (usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome de usuario precisa ter entre apenas letras ou numeros');
            valid = false;
        }
        return valid;
    }
    validaCpf(campo){
        const cpf = new CPF (campo.value);
        if(!cpf.valida()){
            this.criaErro(campo, 'CPF invalido');
        }
    }
    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()