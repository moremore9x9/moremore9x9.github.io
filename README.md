Site pessoal para apresentar meus projetos e acompanhar o desenvolvimento de cada um. Ele usa apenas HTML, CSS e JavaScript.

## Como o site está organizado

- `index.html`: página inicial e seleção das notas mais recentes.
- `projeto-1.html`, `projeto-2.html`, `projeto-3.html`: páginas dos projetos.
- `contato.html`: canais de contato e seção opcional de apoio.
- `css/style.css`: cores, tipografia, componentes e regras para telas menores.
- `js/i18n.js`: dicionário central de traduções e seletor de idioma (PT-BR / EN).
- `js/main.js`: menu móvel e leitura das notas.
- `data/updates.json`: fonte única das notas de desenvolvimento.
- `assets/images/`: local para imagens e capturas de tela.
- `assets/icons/`: local para ícones adicionais, se forem necessários.

## Como funciona a tradução

O idioma padrão é **pt-BR**. O visitante pode alternar para **inglês** pelo seletor `PT-BR / EN` ao lado do ícone da página inicial. A troca é imediata, sem recarregar a página.

- A preferência fica salva em `localStorage` na chave `moremore-language`.
- Se o armazenamento não estiver disponível, o site continua funcionando e usa pt-BR como padrão.
- O atributo `lang` do elemento `<html>` é atualizado a cada troca.
- Títulos de página, metadados, textos, `aria-label`s e mensagens dinâmicas também são traduzidos.

### Como adicionar ou alterar textos

1. Abra `js/i18n.js` e localize o dicionário `translations`.
2. Adicione a mesma chave em `"pt-BR"` e em `en`.
3. No HTML, marque o elemento com um dos atributos abaixo:
   - `data-i18n="chave"` para substituir o texto do elemento.
   - `data-i18n-attr="aria-label:chave"` para substituir um atributo. Use vírgulas para vários atributos.
4. Se a chave existir apenas em inglês, o site exibe automaticamente o texto em pt-BR como fallback.

### Como adicionar notas traduzidas

Cada nota em `data/updates.json` pode ter um bloco `translations`. Exemplo:

```json
{
  "date": "2026-11-12",
  "project": "project-tce",
  "category": "Progresso",
  "title": "Título em português",
  "description": "Texto em português.",
  "translations": {
    "en": {
      "category": "Progress",
      "title": "English title",
      "description": "English text."
    }
  }
}
```

Campos ausentes no bloco `translations` usam o valor em português.
