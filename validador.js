function esGmailValido(correoElectronico) {
    // Expresión regular para verificar si el correo es de Gmail
    const regexGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regexGmail.test(correoElectronico);
}

module.exports = esGmailValido;