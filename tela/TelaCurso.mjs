import { CursoController } from '../controller/CursoController.mjs';

export class CursoView {
    constructor() {
        this.controller = new CursoController();
        this.form = document.getElementById('FormCurso');        
        this.iniciarEventos();
    }

    iniciarEventos() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();            
            const titulo = document.getElementById('InputCurTitulo').value;            
            const nivel = document.getElementById('SelectCurNivel').value;
            const horas = Number(document.getElementById('InputCurHoras').value);            
            this.controller.adicionarCurso(titulo, "", nivel, 0, horas, null, null);            
            this.form.reset();
            alert("Curso salvo com sucesso!");
        });
    }
} 