import { Modulo } from '../modelo/Conteudo.mjs';
import { StorageService } from '../service/StorageService.mjs';

export class ModuloController {
    constructor() {
        this.service = new StorageService('modulos');
    }

    adicionarModulo(Titulo, Ordem, Id_Curso) {
        const novoModulo = new Modulo(null, Titulo, Ordem, Id_Curso);        
        const modulos = this.service.buscarTodos();
        modulos.push(novoModulo);
        this.service.salvarTodos(modulos);        
        return novoModulo;
    }

    listarModulos() {
        return this.service.buscarTodos();
    }

    removerModulo(Id_Modulo) {
        this.service.removerPorId(Id_Modulo, 'Id_Modulo');
    }
}