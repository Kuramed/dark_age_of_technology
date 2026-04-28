export class Matricula {
    constructor ( Id_matricula = null, Id_Usuario = null, Id_Curso = null, DataMatricula = null, DataConclusao = null ) {
        this.Id_matricula = Id_matricula ?? crypto.randomUUID();
        this.Id_Usuario = Id_Usuario;
        this.Id_Curso = Id_Curso;
        this.DataMatricula = DataMatricula ?? new Date().toISOString();
        this.DataConclusao = DataConclusao; 
    }
}

export class ProgressoAula {
    constructor ( Status, Id_Usuario = null, Id_Aula = null, DataConclusao = null ) {     
        this.Status = Status;      
        this.Id_Usuario = Id_Usuario;
        this.Id_Aula = Id_Aula;
        this.DataConclusao = DataConclusao ?? new Date().toISOString();
    }
}

export class Avaliacao {
    constructor ( Id_Avaliacao = null, Nota, Comentario = null, Id_Usuario = null, Id_Curso = null, DataAvaliacao = null ) {
        this.Id_Avaliacao = Id_Avaliacao ?? crypto.randomUUID();          
        this.Nota = Nota; 
        this.Comentario = Comentario;        
        this.Id_Usuario = Id_Usuario;
        this.Id_Curso = Id_Curso;       
        this.DataAvaliacao = DataAvaliacao ?? new Date().toISOString();
    }
}