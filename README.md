<div>
  <h1>Menu</h1>
  <ul>
    <li><a href="#prototipo">Protótipo</a></li>
    <li><a href="#stack">Stack/Tecnologias</a></li>
    <li><a href="#arquitetura">Arquitetura</a></li>
    <li><a href="estrutura">Estrutura das Pastas</a></li>
    <li><a href="#resumo">Resumo </a></li>
  </ul>
</div>

<div id="prototipo">
  <h1>Protótipo</h1>
  <a href="https://www.figma.com/design/WKbKEBoPorf7jbQlPPFozL/Projetos?node-id=0-1&p=f&t=bbLaDisVC6go9FAN-0">Acessar no Figma</a>
</div>

<div id="stack">

  <h3>TypeScript</h3>
  <p>TypeScript traz tipagem estática ao JavaScript, reduzindo bugs em tempo de desenvolvimento e melhorando a manutenção do código.</p>

  <h3>React</h3>
  <p>React será a biblioteca de UI no frontend.</p>

  <h3>Node.js</h3>
  <p>Node.js serve como ambiente do backend. A combinação Node + TypeScript permite escrever APIs escaláveis. </p>

  <h3>JavaScript</h3>
  <p>JavaScript é a linguagem de execução. <p>
</div>

<div id="arquitetura">
  <h1>Arquitetura: Domain-Driven Design (DDD)</h1>
  <p>O projeto seguirá os princípios do DDD para manter o domínio centralizado, testável e independente de frameworks/infrastrutura.</p>

  <h3>Princípios principais</h3>
  <ul>
    <li><strong>Domínio no centro:</strong> regras de negócio vivas nas entidades e casos de uso.</li>
    <li><strong>Separação de camadas:</strong> domínio, aplicação, infraestrutura e interface.</li>
    <li><strong>Bounded Contexts:</strong> dividir o sistema quando o domínio cresce ou há modelos conceituais distintos.</li>
  </ul>

  <h3>Camadas (visão geral)</h3>
  <ol>
    <li><strong>Domain:</strong> entidades, value objects, agregados, regras e interfaces (contratos) de repositórios.</li>
    <li><strong>Application (Use Cases):</strong> orquestra casos de uso; usa interfaces do domínio e orquestra transações e validações de alto nível.</li>
    <li><strong>Infrastructure:</strong> implementações concretas (banco, filas, integrações externas) que implementam os contratos do domínio.</li>
    <li><strong>Interface (API / UI):</strong> camada que expõe os endpoints REST/GraphQL e a UI em React — adapta requisições para os casos de uso.</li>
  </ol>







