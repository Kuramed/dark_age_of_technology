import { Usuario } from '../modelo/Core.mjs';
import { StorageService } from '../service/StorageService.mjs';

export class UsuarioController {
    constructor() {
        this.service = new StorageService('usuarios');
    }

    adicionarUsuario(NomeCompleto, Email, SenhaHash) {        
        const novoUsuario = new Usuario(null, NomeCompleto, Email, SenhaHash);        
        const usuarios = this.service.buscarTodos();
        usuarios.push(novoUsuario);
        this.service.salvarTodos(usuarios);        
        return novoUsuario;
    }

    listarUsuarios() {
        return this.service.buscarTodos();
    }

    removerUsuario(Id_usuario) {
        this.service.removerPorId(Id_usuario, 'Id_usuario');
    }
}