import { StorageService } from '../service/StorageService.mjs';

export class MatriculaController {
    constructor() {
        this.storage = new StorageService('matriculas_db');
    }

    matricular(id_usuario, id_curso) {
        try {
            if (!id_usuario || !id_curso) {
                throw new Error("Selecione um aluno e um curso para realizar a matrícula.");
            }

            let matriculas = this.storage.ler() || [];
            
            // Verifica se o aluno já está matriculado nesse curso
            const jaMatriculado = matriculas.find(m => m.id_usuario === id_usuario && m.id_curso === id_curso);
            if (jaMatriculado) throw new Error("⚠️ Este aluno já está matriculado neste curso.");

            const novaMatricula = {
                id: Date.now(),
                id_usuario,
                id_curso,
                data: new Date().toLocaleDateString('pt-BR')
            };

            matriculas.push(novaMatricula);
            this.storage.salvar(matriculas);
            this.mostrarAlerta("🎓 Matrícula realizada com sucesso!", 'success');
            return true;
        } catch (error) {
            this.mostrarAlerta(error.message, 'danger');
            return false;
        }
    }

    cancelarMatricula(id) {
        if (confirm("Tem certeza que deseja cancelar esta matrícula?")) {
            let matriculas = this.storage.ler() || [];
            matriculas = matriculas.filter(m => m.id !== Number(id));
            this.storage.salvar(matriculas);
            this.mostrarAlerta("Matrícula cancelada.", 'success');
        }
    }

    mostrarAlerta(mensagem, tipo) {
        const divAlerta = document.getElementById('alerta-sistema');
        if(divAlerta) {
            divAlerta.className = `alert alert-${tipo} mt-3`;
            divAlerta.innerHTML = mensagem;
            divAlerta.classList.remove('d-none');
            setTimeout(() => divAlerta.classList.add('d-none'), 4000);
        }
    }
}