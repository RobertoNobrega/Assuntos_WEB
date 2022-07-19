"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function somarNumeros(num1, num2) {
    return num1 + num2;
}
// OBS: TypeScript permite usar uma sintaxe bem moderna, ao qual vai ser transpilado
// para uma sintaxe com mais compatibilidade.
exports.default = { somarNumeros }; // Vai exportar a função somarNumeros (usando o conceito de Módulo), para
// que possa ser importada em um outro arquivo.
