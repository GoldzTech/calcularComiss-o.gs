# 📊 Automação de Planilha de Comissão

Este projeto é um *script em Google Apps Script (JavaScript)* que automatiza o cálculo de *comissões de vendas* dentro de uma planilha do *Google Sheets*.

---

## 🚀 Funcionalidades
- Calcula automaticamente *10% de comissão* para cada vendedor com base no valor das vendas.
- Pode ser executado com apenas *um clique* dentro do Google Sheets.
- Não exige instalação de programas adicionais — tudo feito na nuvem via Google.

---

## 🛠 Tecnologias Utilizadas
- *Google Sheets* (planilha online)
- *Google Apps Script* (JavaScript para automação no Google)

---


## 📋 Como Usar

1. *Crie a planilha*
   - Abra o Google Drive → Novo → Planilhas Google.
   - Crie as colunas conforme o exemplo:
   
     | Nome    | Vendas | Comissão |
     |---------|--------|----------|
     | João    | 100    |          |
     | Maria   | 200    |          |
     | Pedro   | 150    |          |

2. *Adicione o código*
   - Na planilha, vá em *Extensões → Apps Script*.
   - Cole o conteúdo do arquivo calcularComissao.gs no editor.
   - Salve o projeto.

3. *Execute o script*
   - No editor do Apps Script, clique no botão ▶ para rodar a função calcularComissao.
   - A coluna *Comissão* será preenchida automaticamente.

---

## 💻 Código Principal (calcularComissao.gs)

```javascript
function calcularComissao() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet(); // pega a planilha atual
  var aba = planilha.getActiveSheet(); // pega a aba ativa
  var range = aba.getRange("B2:B4"); // pega as células com as vendas
  var valores = range.getValues(); // pega os valores das vendas

  for (var i = 0; i < valores.length; i++) {
    var comissao = valores[i][0] * 0.1; // 10% de comissão
    aba.getRange(i + 2, 3).setValue(comissao); // escreve na coluna C
  }
}
