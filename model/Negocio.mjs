export class Plano {
    constructor ( Id_Plano = null, Nome, Descricao, Preco, DuracaoMeses ) {
        this.Id_Plano = Id_Plano ?? crypto.randomUUID();
        this.Nome = Nome;
        this.Descricao = Descricao;
        this.Preco = Preco; 
        this.DuracaoMeses = DuracaoMeses;
    }

static validar(plano) {
        const erros = [];
        if (!plano.nome?.trim()) erros.push('O nome do plano é obrigatório');
        if (plano.preco === undefined || isNaN(plano.preco)) 
            erros.push('O preço é obrigatório e deve ser numérico');
        if (!plano.duracao_meses || isNaN(plano.duracao_meses)) 
            erros.push('A duração é obrigatória e deve ser um número');
        return erros;
    }
}

export class Assinatura {
    constructor ( Id_Assinatura = null, DataFim, Id_Usuario = null, Id_Plano = null, dataInicio = null ) {
        this.Id_Assinatura = Id_Assinatura ?? crypto.randomUUID();                
        this.DataFim = DataFim;                 
        this.Id_Usuario = Id_Usuario;
        this.Id_Plano = Id_Plano;        
        this.dataInicio = dataInicio ?? new Date().toISOString();
    }
}

export class Pagamento {
    constructor ( Id_Pagamento = null, ValorPago, MetodoPagamento, Id_Transacao_gateway, Id_Assinatura = null, DataPagamento = null ) {
        this.Id_Pagamento = Id_Pagamento ?? crypto.randomUUID();
        this.ValorPago = ValorPago; 
        this.MetodoPagamento = MetodoPagamento;
        this.Id_Transacao_gateway = Id_Transacao_gateway;               
        this.Id_Assinatura = Id_Assinatura;        
        this.DataPagamento = DataPagamento ?? new Date().toISOString();
    }
}