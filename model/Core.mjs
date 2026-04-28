export class Usuario {
    constructor ( Id_usuario = null, NomeCompleto, Email, SenhaHash, DataCadastro = null ) {
        this.Id_usuario = Id_usuario ?? crypto.randomUUID();
        this.NomeCompleto = NomeCompleto;
        this.Email = Email;
        this.SenhaHash = SenhaHash;
        this.DataCadastro = new Date().toISOString();
    }

static validar(usuario) {
        const erros = [];
        if (!usuario.nome?.trim()) erros.push('O nome é obrigatório');
        if (!usuario.email?.trim()) erros.push('O e-mail é obrigatório');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.email)) 
            erros.push('E-mail inválido');
        if (!usuario.senha?.trim() || usuario.senha.length < 6) 
            erros.push('A senha deve ter pelo menos 6 caracteres');
        if (!usuario.perfil?.trim()) erros.push('O perfil é obrigatório');
        return erros;
    }
}



export class Categoria {
    constructor ( Id_Categoria = null, nome, descricao ) {
        this.Id_Categoria = Id_Categoria ?? crypto.randomUUID();
        this.nome = nome;
        this.descricao = descricao;
    }

static validar(categoria) {
        const erros = [];
        if (!categoria.nome?.trim()) erros.push('O nome da categoria é obrigatório');
        if (!categoria.descricao?.trim()) erros.push('A descrição é obrigatória');
        return erros;
    }
}

export class Curso {  
    constructor ( Id_Curso = null, Titulo, descricao, Nivel, TotalAulas, TotalHoras, Id_instrutor = null, Id_Categoria = null, DataPublicacao = null ) {
        this.Id_Curso = Id_Curso ?? crypto.randomUUID();
        this.Titulo = Titulo;
        this.descricao = descricao;
        this.Nivel = Nivel;
        this.TotalAulas = TotalAulas;
        this.TotalHoras = TotalHoras;  
        this.Id_instrutor = Id_instrutor;
        this.Id_Categoria = Id_Categoria;
        this.DataPublicacao = DataPublicacao ?? new Date().toISOString();
    }

static validar(curso) {
        const erros = [];
        if (!curso.titulo?.trim()) erros.push('O título é obrigatório');
        if (!curso.descricao?.trim()) erros.push('A descrição é obrigatória');
        if (!curso.id_categoria) erros.push('A categoria é obrigatória');
        if (!curso.id_instrutor) erros.push('O instrutor é obrigatório');
        return erros;
    }
}
