import { Curso } from '../model/Core.mjs';
import { StorageService } from '../service/StorageService.mjs';

export class CursoController {
    constructor() {
        this.storage = new StorageService('cursos_db');
    }

    salvar(idExistente, titulo, descricao, id_categoria, id_instrutor) {
        try {
            const curso = new Curso(titulo, descricao, id_categoria, id_instrutor);
            
            // Validação estática (conforme o PDF CRUD-MVC)
            const erros = Curso.validar(curso);
            if (erros.length > 0) throw new Error(erros.join('<br>'));

            let cursos = this.storage.ler() || [];

            if (idExistente) {
                const index = cursos.findIndex(c => c.id === Number(idExistente));
                if (index !== -1) {
                    curso.id = Number(idExistente);
                    cursos[index] = curso;
                }
            } else {
                cursos.push(curso);
            }

            this.storage.salvar(cursos);
            this.mostrarAlerta(`Curso ${idExistente ? 'atualizado' : 'cadastrado'} com sucesso!`, 'success');
            return true;
        } catch (error) {
            this.mostrarAlerta(error.message, 'danger');
            return false;
        }
    }

    excluir(id) {
        if (confirm("Tem certeza que deseja excluir este curso?")) {
            let cursos = this.storage.ler() || [];
            cursos = cursos.filter(c => c.id !== Number(id));
            this.storage.salvar(cursos);
            this.mostrarAlerta("Curso removido com sucesso!", 'success');
            return true;
        }
        return false;
    }

    buscarPorId(id) {
        const cursos = this.storage.ler() || [];
        return cursos.find(c => c.id === Number(id));
    }

    mostrarAlerta(mensagem, tipo) {
        const divAlerta = document.getElementById('alerta-sistema');
        if (divAlerta) {
            divAlerta.className = `alert alert-${tipo} mt-3`;
            divAlerta.innerHTML = mensagem;
            divAlerta.classList.remove('d-none');
            setTimeout(() => divAlerta.classList.add('d-none'), 4000);
        }
    }
}