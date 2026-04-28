import { Categoria } from '../modelo/Core.mjs';
import { StorageService } from '../service/StorageService.mjs';

export class CategoriaController {
    constructor() {   
        this.service = new StorageService('categorias');
    }

    adicionarCategoria(Nome, Descricao) {        
        const novaCategoria = new Categoria(null, Nome, Descricao);                 
        const categorias = this.service.buscarTodos();
        categorias.push(novaCategoria);
        this.service.salvarTodos(categorias);        
        return novaCategoria; 
    }
    
    listarCategorias() {
        return this.service.buscarTodos();
    }
    
    atualizarCategoria(Id_Categoria, novoNome, novaDescricao) {
        const categorias = this.service.buscarTodos();                
        const index = categorias.findIndex(cat => cat.Id_Categoria === Id_Categoria);

        if (index !== -1) {            
            categorias[index].Nome = novoNome;
            categorias[index].Descricao = novaDescricao;                  
            this.service.salvarTodos(categorias);
            return categorias[index];
        }
        return null; 
    }

    removerCategoria(Id_Categoria) {     
        this.service.removerPorId(Id_Categoria, 'Id_Categoria');
    }
}