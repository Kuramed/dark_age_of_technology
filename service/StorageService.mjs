export class StorageService {
    constructor(chaveBanco) {      
        this.chave = chaveBanco;
    }
  
    salvarTodos(itens) {
        localStorage.setItem(this.chave, JSON.stringify(itens)); 
    }
  
    buscarTodos() {
        const dadosTexto = localStorage.getItem(this.chave);       
        return dadosTexto ? JSON.parse(dadosTexto) : [];
    }
   
    removerPorId(id, nomeDaColunaId) {
        let itens = this.buscarTodos();        
        itens = itens.filter(item => item[nomeDaColunaId] !== id);
        this.salvarTodos(itens);
    }
}