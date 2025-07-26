function avancar(id) {
  const container = document.getElementById(id);
  const produtos = container.getElementsByClassName("produto");
  let ativoIndex = [...produtos].findIndex((p) =>
    p.classList.contains("ativo")
  );

  produtos[ativoIndex].classList.remove("ativo");
  let proximo = (ativoIndex + 1) % produtos.length;
  produtos[proximo].classList.add("ativo");
}

function voltar(id) {
  const container = document.getElementById(id);
  const produtos = container.getElementsByClassName("produto");
  let ativoIndex = [...produtos].findIndex((p) =>
    p.classList.contains("ativo")
  );

  produtos[ativoIndex].classList.remove("ativo");
  let anterior = (ativoIndex - 1 + produtos.length) % produtos.length;
  produtos[anterior].classList.add("ativo");
}
