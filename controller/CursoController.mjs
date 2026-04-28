import { Curso } from '../model/Core.mjs'; // Ajuste o caminho se necessário
import { StorageService } from '../service/StorageService.mjs';

export class CursoController {
    constructor() {
        // Inicializa o serviço apontando para a chave 'cursos_db' no localStorage
        this.storage = new StorageService('cursos_db');
    }

    // ==========================================
    // 1. SALVAR (Cria um novo ou Atualiza um existente)
    // ==========================================
    salvar(idExistente, titulo, descricao, id_categoria, id_instrutor) {
        try {
            // Cria a instância para passar pela validação
            const curso = new Curso(titulo, descricao, id_categoria, id_instrutor);
            
            // Chama a validação estática do Model
            const erros = Curso.validar(curso);
            if (erros.length > 0) {
                throw new Error(erros.join('<br>'));
            }

            let cursos = this.storage.ler() || [];

            if (idExistente) {
                // MODO EDIÇÃO: Atualiza o curso que já existe
                const index = cursos.findIndex(c => c.id === Number(idExistente));
                if (index !== -1) {
                    // Mantém o ID original, mas atualiza os dados
                    curso.id = Number(idExistente); 
                    cursos[index] = curso;
                }
            } else {
                // MODO CRIAÇÃO: Adiciona o novo curso à lista
                cursos.push(curso);
            }

            this.storage.salvar(cursos);
            this.mostrarAlerta(` Curso ${idExistente ? 'atualizado' : 'cadastrado'} com sucesso!`, 'success');
            return true; 

        } catch (error) {
            this.mostrarAlerta(error.message, 'danger');
            return false; 
        }
    }

    // ==========================================
    // 2. EXCLUIR
    // ==========================================
    excluir(id) {
        if (confirm("Tem a certeza que deseja excluir este curso?")) {
            let cursos = this.storage.ler() || [];
            
            // Filtra mantendo apenas os que têm o ID DIFERENTE do selecionado
            cursos = cursos.filter(curso => curso.id !== Number(id));
            
            this.storage.salvar(cursos);
            this.mostrarAlerta("🗑️ Curso removido com sucesso!", 'success');
            
            // Aqui você deve chamar a função que recarrega a sua tabela no HTML
            // Exemplo: renderizarTabelaCursos();
        }
    }

    // ==========================================
    // 3. PREPARAR EDIÇÃO (Carrega dados para o formulário)
    // ==========================================
    prepararEdicao(id) {
        const cursos = this.storage.ler() || [];
        const cursoEditado = cursos.find(c => c.id === Number(id));

        if (cursoEditado) {
            // Preenche os inputs do formulário com os dados encontrados
            document.getElementById('input-titulo').value = cursoEditado.titulo;
            document.getElementById('input-descricao').value = cursoEditado.descricao;
            document.getElementById('select-categoria').value = cursoEditado.id_categoria;
            document.getElementById('select-instrutor').value = cursoEditado.id_instrutor;
            
            // PREENCHE O ID OCULTO (Crucial para saber que é uma edição)
            document.getElementById('input-curso-id').value = cursoEditado.id;
            
            // Muda o texto do botão para dar feedback visual
            document.getElementById('btn-salvar-curso').textContent = "Atualizar Curso";
        }
    }

    // ==========================================
    // 4. ALERTA VISUAL (Bootstrap)
    // ==========================================
    mostrarAlerta(mensagem, tipo) {
        const divAlerta = document.getElementById('alerta-sistema');
        if(divAlerta) {
            divAlerta.className = `alert alert-${tipo} mt-3`;
            divAlerta.innerHTML = mensagem;
            divAlerta.classList.remove('d-none');

            setTimeout(() => {
                divAlerta.classList.add('d-none');
            }, 4000);
        } else {
            alert(mensagem.replace(/<br>/g, '\n')); // Fallback caso não ache a div
        }
    }
}