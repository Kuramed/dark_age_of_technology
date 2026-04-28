import { CategoriaController } from '../controller/CategoriaController.mjs';

export class CategoriaView {
    constructor() {        
        this.controller = new CategoriaController();                
        this.form = document.getElementById('FormCategoria');                
        this.iniciarEventos();
    }

    iniciarEventos() {    
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();            
            const nome = document.getElementById('InputCatNome').value;
            const desc = document.getElementById('InputCatDesc').value;            
            this.controller.adicionarCategoria(nome, desc);                        
            this.form.reset();
            alert("Categoria salva com sucesso!");
        });
    }
}