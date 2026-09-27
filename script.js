//Variável global para armazenar o estado do carrinho(Persistência em memória no Front-end)*/
let totalItensCarrinho = 0;

/**
 * Função responsável por incrementar o contador do carrinho 
 * e atualizar a interface do usuário (DOM) em tempo real.
 */
function adicionarAoCarrinho(){
    //1.Incrementar a quantidade de itens
    totalItensCarrinho++;

    //2. Manipular o DOM para atualizar o texto do contador na tela
    const elementoContador = document.getElementById("contador-carrinho");
    elementoContador.innerText = totalItensCarrinho;

    //3. Exibir um feedback (Alerta de Sucesso) para o usuário
    alert("🛒 Excelente escolha! O produto foi adicionado ao seu carrinho com sucesso.");
}