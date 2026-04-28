import { Pagamento } from '../model/Negocio.mjs';
import { StorageService } from '../service/StorageService.mjs';

export class FinanceiroController {
    constructor() {
        this.storage = new StorageService('pagamentos_db');
    }

    // Registra um novo pagamento/assinatura
    processarPagamento(idExistente, id_usuario, id_plano, valor, metodo) {
        try {
            const pagamento = new Pagamento(id_usuario, id_plano, Number(valor), metodo);
            
            // Validação estática no modelo Negocio.mjs
            const erros = Pagamento.validar(pagamento);
            if (erros.length > 0) throw new Error(erros.join('<br>'));

            let pagamentos = this.storage.ler() || [];

            if (idExistente) {
                const index = pagamentos.findIndex(p => p.id === Number(idExistente));
                if (index !== -1) {
                    pagamento.id = Number(idExistente);
                    pagamentos[index] = pagamento;
                }
            } else {
                pagamentos.push(pagamento);
            }

            this.storage.salvar(pagamentos);
            this.mostrarAlerta("Pagamento processado com sucesso!", 'success');
            return true;
        } catch (error) {
            this.mostrarAlerta(error.message, 'danger');
            return false;
        }
    }

    excluir(id) {
        if (confirm("Deseja estornar/excluir este registro financeiro?")) {
            let pagamentos = this.storage.ler() || [];
            pagamentos = pagamentos.filter(p => p.id !== Number(id));
            this.storage.salvar(pagamentos);
            this.mostrarAlerta("Registro removido.", 'success');
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