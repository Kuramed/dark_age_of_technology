import { FinanceiroController } from './controller/FinanceiroController.mjs';
import { MatriculaController } from './controller/MatriculaController.mjs';
// ... outros imports

const financeiroCtrl = new FinanceiroController();
const matriculaCtrl = new MatriculaController();

// Funções de ponte (Exemplo para o HTML chamar)
function salvarPagamento() {
    const id = document.getElementById('input-pagamento-id').value;
    const aluno = document.getElementById('select-aluno-pagamento').value;
    const plano = document.getElementById('select-plano-pagamento').value;
    const valor = document.getElementById('input-valor-pagamento').value;
    const metodo = document.getElementById('select-metodo-pagamento').value;

    financeiroCtrl.processarPagamento(id, aluno, plano, valor, metodo);
}

function realizarMatricula() {
    const aluno = document.getElementById('select-aluno-matricula').value;
    const curso = document.getElementById('select-curso-matricula').value;
    matriculaCtrl.matricular(aluno, curso);
}

// Expõe para o window para os botões do HTML (onclick) funcionarem
Object.assign(window, {
    salvarPagamento,
    realizarMatricula,
    // Adicione aqui as outras funções: salvarCurso, excluirCurso, etc.
});