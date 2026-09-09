function finalizarCompra() {
    let nome, preco, quantidade, total, subtotal;
    nome = document.getElementById("txtnome").value;
    preco = parseFloat(document.getElementById("txtprecoUnitario").value);
    quantidade = parseInt(document.getElementById("txtQuantidade").value);
    let formaPagamento = document.getElementById("selecao").value;
    subtotal = preco * quantidade;
    switch (formaPagamento) {
        case ("pix"):
            total = subtotal * 0.95;
            document.getElementById("resumoCompra").innerHTML = `
             <p>Compra concluída!</p>
             <p>Produto: ${nome}</p>
             <p>Quantidade: ${quantidade}</p>
             <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>
             <p>Desconto: R$ ${(subtotal * 0.05).toFixed(2)}</p>
             <p>Valor final: R$ ${total.toFixed(2)}</p>
             <p>Forma de Pagamento: PIX</p>
`;
            break;
        case ("dinheiro"):
            total = subtotal * 0.90;
            document.getElementById("resumoCompra").innerHTML = `
             <p>Compra concluída!</p>
             <p>Produto: ${nome}</p>
             <p>Quantidade: ${quantidade}</p>
             <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>
             <p>Desconto: R$ ${(subtotal * 0.10).toFixed(2)}</p>
             <p>Valor final: R$ ${total.toFixed(2)}</p>
             <p>Forma de Pagamento: Dinheiro</p>
`;
            break;
        case ("Cartão"):
            total = subtotal;
            document.getElementById("resumoCompra").innerHTML = `
             <p>Compra concluída!</p>
             <p>Produto: ${nome}</p>
             <p>Quantidade: ${quantidade}</p>
             <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>
             <p>Desconto: R$ 0.00</p>
             <p>Valor final: R$ ${total.toFixed(2)}</p>
             <p>Forma de Pagamento: Cartão</p>
`;
            break;
    }

}