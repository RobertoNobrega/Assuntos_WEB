function somarNumeros(num1: number, num2: number): number{ // Dois Argumentos Numéricos, ao qual retorna um número.
    return num1 + num2;
}

// OBS: TypeScript permite usar uma sintaxe bem moderna, ao qual vai ser transpilado
// para uma sintaxe com mais compatibilidade.

export default {somarNumeros};  // Vai exportar a função somarNumeros (usando o conceito de Módulo), para
// que possa ser importada em um outro arquivo.

