import { CursoController } from '../controller/CursoController.mjs';

export class TelaCurso {
    constructor() {
        this.controller = new CursoController();
    }

    coletarDadosESalvar() {
        const id = document.getElementById('input-curso-id').value;
        const titulo = document.getElementById('input-titulo-curso').value;
        const descricao = document.getElementById('input-descricao-curso').value;
        const categoria = document.getElementById('select-categoria-curso').value;
        const instrutor = document.getElementById('select-instrutor-curso').value;

        const sucesso = this.controller.salvar(id, titulo, descricao, categoria, instrutor);
        
        if (sucesso) {
            this.limparFormulario();
            // Aqui você chamaria a função de renderizar a tabela, se tiver uma
        }
    }

    carregarDadosNoFormulario(id) {
        const curso = this.controller.buscarPorId(id);
        if (curso) {
            document.getElementById('input-curso-id').value = curso.id;
            document.getElementById('input-titulo-curso').value = curso.titulo;
            document.getElementById('input-descricao-curso').value = curso.descricao;
            document.getElementById('select-categoria-curso').value = curso.id_categoria;
            document.getElementById('select-instrutor-curso').value = curso.id_instrutor;
            
            document.getElementById('btn-salvar-curso').textContent = "Atualizar Curso";
        }
    }

    confirmarExclusao(id) {
        if (this.controller.excluir(id)) {
            // Recarregar tabela
        }
    }

    limparFormulario() {
        document.getElementById('form-curso').reset();
        document.getElementById('input-curso-id').value = "";
        document.getElementById('btn-salvar-curso').textContent = "Salvar Curso";
    }
}