export class TelaNavegador {
    constructor() {        
        this.btnAcademico = document.getElementById('BtnMenuAcademico');
        this.btnConteudo = document.getElementById('BtnMenuConteudo');
        this.btnFinanceiro = document.getElementById('BtnMenuFinanceiro');        
        this.secaoAcademico = document.getElementById('SecaoAcademico');
        this.secaoConteudo = document.getElementById('SecaoConteudo');
        this.secaoFinanceiro = document.getElementById('SecaoFinanceiro');
        this.iniciarNavegacao();
    }

    iniciarNavegacao() {        
        this.btnAcademico.addEventListener('click', (e) => {
            e.preventDefault(); 
            this.mostrarSecao(this.secaoAcademico, this.btnAcademico);
        });
        
        this.btnConteudo.addEventListener('click', (e) => {
            e.preventDefault();
            this.mostrarSecao(this.secaoConteudo, this.btnConteudo);
        });
        
        this.btnFinanceiro.addEventListener('click', (e) => {
            e.preventDefault();
            this.mostrarSecao(this.secaoFinanceiro, this.btnFinanceiro);
        });
    }

    mostrarSecao(secaoAtiva, botaoAtivo) {        
        const todasAsSecoes = document.querySelectorAll('.secao-tela');
        todasAsSecoes.forEach(secao => secao.classList.add('d-none'));        
        const todosOsBotoes = document.querySelectorAll('.nav-link');
        todosOsBotoes.forEach(btn => btn.classList.remove('active'));
        secaoAtiva.classList.remove('d-none');
        botaoAtivo.classList.add('active');
    }
}