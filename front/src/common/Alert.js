const Swal = require('vue-sweetalert2')

export default class Alert {
    static messageEnvio(message) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: message == "" ? "Alteração feita com sucesso!" : message,
            showConfirmButton: false,
            timer: 1500
        })
    }
    static messageError(message) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message == "" ? "Não foi possível fazer a alteração!" : message,
        })
    }
}