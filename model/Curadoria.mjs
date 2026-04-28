export class Trilha {
    constructor ( Id_Trilha = null, Titulo, Descricao, Id_Categoria = null ) {
        this.Id_Trilha = Id_Trilha ?? crypto.randomUUID();
        this.Titulo = Titulo;
        this.Descricao = Descricao;     
        this.Id_Categoria = Id_Categoria;
    }
}

export class TrilhaCurso {
    constructor ( Ordem, Id_Trilha = null, Id_Curso = null ) {
        this.Ordem = Ordem;    
        this.Id_Trilha = Id_Trilha;
        this.Id_Curso = Id_Curso;
    }
}

export class Certificado {
    constructor ( Id_certificado = null, CodigoVerificacao, Id_Usuario = null, Id_Curso = null, Id_Trilha = null, DataEmissao = null ) {
        this.Id_certificado = Id_certificado ?? crypto.randomUUID();
        this.CodigoVerificacao = CodigoVerificacao; 
        this.Id_Usuario = Id_Usuario;
        this.Id_Curso = Id_Curso;
        this.Id_Trilha = Id_Trilha;   
        this.DataEmissao = DataEmissao ?? new Date().toISOString();
    }
}