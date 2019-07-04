class pessoa{
	constructor(FirstName,LastName,Type,eMail,Telefone){
		this._FirstName = FirstName;
		this._LastName = LastName;
        this._Type = Type;
        this._eMail = eMail;
        this._Telefone = Telefone;
	}
}

class Personal extends pessoa{
    constructor(FirstName,LastName,Type,eMail,Telefone,Senha){
        super(FirstName,LastName,Type,eMail,Telefone);
        this._Senha = Senha;
        this._DataSenha = getDate();
    }

    getDate() {
        return Utilities.formatDate(new Date(), "UTC+8", "MM-dd-yyyy");
    }

    setDate() {
        this._DataSenha = this.getDate();
    }
    
    validarSenha(){

    }

    trocarSenha(NewSenha,OldSenha){
        if(NewSenha!==OldSenha){
            Personal._DataSenha = getDate();
            return OldSenha;
        }
    }
}
