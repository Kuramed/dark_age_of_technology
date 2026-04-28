import { Plano } from '../modelo/Negocio.mjs';
import { StorageService } from '../service/StorageService.mjs';

export class PlanoController {
    constructor() {
        this.service = new StorageService('planos');
    }

    adicionarPlano(Nome, Descricao, Preco, DuracaoMeses) {
        const novoPlano = new Plano(null, Nome, Descricao, Preco, DuracaoMeses);        
        const planos = this.service.buscarTodos();
        planos.push(novoPlano);
        this.service.salvarTodos(planos);
        
        return novoPlano;
    }

    listarPlanos() {
        return this.service.buscarTodos();
    }

    removerPlano(Id_plano) {
        this.service.removerPorId(Id_plano, 'Id_plano');
    }
}