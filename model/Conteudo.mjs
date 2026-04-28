export class Modulo {   
    constructor ( Id_Modulo = null, Titulo, Ordem, Id_Curso = null ) {
        this.Id_Modulo = Id_Modulo ?? crypto.randomUUID();
        this.Titulo = Titulo;
        this.Ordem = Ordem;             
        this.Id_Curso = Id_Curso; 
    }

static validar(modulo) {
        const erros = [];
        if (!modulo.id_curso) erros.push('O curso é obrigatório');
        if (!modulo.titulo?.trim()) erros.push('O título do módulo é obrigatório');
        if (!modulo.ordem || isNaN(modulo.ordem)) erros.push('A ordem é obrigatória e deve ser um número');
        return erros;
    }
}

export class Aula {   
    constructor ( Id_Aula = null, Titulo, TipoConteudo, URL_Conteudo, DuracaoMinutos, Ordem, Id_Modulo = null ) {
        this.Id_Aula = Id_Aula ?? crypto.randomUUID();
        this.Titulo = Titulo;
        this.TipoConteudo = TipoConteudo;
        this.URL_Conteudo = URL_Conteudo;
        this.DuracaoMinutos = DuracaoMinutos;
        this.Ordem = Ordem;      
        this.Id_Modulo = Id_Modulo;
    } 

static validar(aula) {
        const erros = [];
        if (!aula.id_modulo) erros.push('O módulo é obrigatório');
        if (!aula.titulo?.trim()) erros.push('O título da aula é obrigatório');
        if (!aula.url_video?.trim()) erros.push('A URL do vídeo é obrigatória');
        if (!/^https?:\/\/.+/.test(aula.url_video)) 
            erros.push('URL do vídeo inválida');
        if (!aula.duracao_minutos || isNaN(aula.duracao_minutos)) 
            erros.push('Duração inválida');
        if (!aula.ordem || isNaN(aula.ordem)) 
            erros.push('Ordem inválida');
        return erros;
    }
}