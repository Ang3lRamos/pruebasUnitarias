const esGmailValido = require('./validador');

// Test para verificar si una dirección de Gmail válida es detectada correctamente
test.only('Detectar Gmail válido', () => {
    const correoValido = 'usuario@gmail.com';
    expect(esGmailValido(correoValido)).toBe(true);
});

// Test para verificar si una dirección de Gmail inválida es detectada correctamente
test.only('Detectar Gmail inválido', () => {
    const correoInvalido = 'usuario@notgmail.com';
    expect(esGmailValido(correoInvalido)).toBe(false);
});
