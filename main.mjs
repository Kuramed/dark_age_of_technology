import { TelaCurso } from './tela/TelaCurso.mjs';
import { TelaCategoria } from './tela/TelaCategoria.mjs';

// Inicialização das Telas
const telaCurso = new TelaCurso();
const telaCategoria = new TelaCategoria();

// Expõe para o escopo global (window)
Object.assign(window, {
    // Ações de Curso
    salvarCurso: () => telaCurso.coletarDadosESalvar(),
    editarCurso: (id) => telaCurso.carregarDadosNoFormulario(id),
    excluirCurso: (id) => telaCurso.confirmarExclusao(id),

    // Ações de Categoria
    salvarCategoria: () => telaCategoria.coletarDadosESalvar(),
    editarCategoria: (id) => telaCategoria.carregarDadosNoFormulario(id),
    excluirCategoria: (id) => telaCategoria.confirmarExclusao(id)
});

console.log("Sistema DevTech-EDU inicializado com sucesso.");