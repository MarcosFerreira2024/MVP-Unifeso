<div>
  <h1>Menu</h1>
  <ul>
    <li>
      <a href="#requisitos">Requisitos</a>
    <ul>
      <li>
      <a href="#requisitos_funcionais">Funcionais</a>
      </li>
      <li>
      <a href="#requisitos_nao_funcionais"">Não Funcionais</a>
      </li>
    </ul>
    </li>
    <li><a href="#prototipo">Protótipo</a></li>
    <li><a href="#stack">Stack/Tecnologias</a></li>
    <li><a href="#arquitetura">Arquitetura</a></li>
    <li><a href="#banco">Diagrama do Banco de Dados</a></li>
    <li><a href="#fora_escopo">Fora do Escopo Inicial</a></li>
    <li><a href="#repositorios">Repositórios</a></li>
    <li><a href="#estrutura">Estrutura das Pastas</a></li>
    <li><a href="#resumo">Resumo </a></li>
    
  </ul>
</div>

<div id="requisitos">
  <div>
    <h2 id="requisitos_funcionais">Requisitos Funcionais</h2>
    <ul>
      <li>
        <h3>1. Login de Usuários</h3>
        <p><strong>O que o sistema deve fazer:</strong> Permitir que usuários acessem o sistema por meio de autenticação com login e senha.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Essencial para diferenciar usuários e garantir segurança.</p>
        <p><strong>Conclusão:</strong> Atendido quando o sistema permitir login seguro com redirecionamento.</p>
      </li>
      <li>
        <h3>2. Diferenciação de Perfis</h3>
        <p><strong>O que o sistema deve fazer:</strong> Distinguir entre usuários padrão e administradores, oferecendo permissões diferentes.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Garante controle de acesso e separação de responsabilidades.</p>
        <p><strong>Conclusão:</strong> Cumprido quando o sistema aplicar permissões conforme o perfil.</p>
      </li>
      <li>
        <h3>3. Edição de Conteúdo por Administradores</h3>
        <p><strong>O que o sistema deve fazer:</strong> Permitir que administradores alterem informações sobre parques, trilhas, eventos e avaliações.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Mantém os dados atualizados e confiáveis.</p>
        <p><strong>Conclusão:</strong> Cumprido quando o painel permitir CRUD completo desses itens.</p>
      </li>
      <li>
        <h3>4. Cadastro de Parques, Trilhas e Eventos</h3>
        <p><strong>O que o sistema deve fazer:</strong> Permitir cadastro completo de parques, trilhas e eventos, incluindo horário, preço e localização.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Estrutura o núcleo de informações do sistema.</p>
        <p><strong>Conclusão:</strong> Cumprido quando novos registros puderem ser criados e vinculados corretamente.</p>
      </li>
      <li>
        <h3>5. Avaliação de Parques, Trilhas e Eventos</h3>
        <p><strong>O que o sistema deve fazer:</strong> Permitir que usuários registrem avaliações (1 a 5 estrelas).</p>
        <p><strong>Prioridade:</strong> Média</p>
        <p><strong>Justificativa:</strong> Melhora a experiência e ajuda outros visitantes.</p>
        <p><strong>Conclusão:</strong> Cumprido quando avaliações forem associadas ao autor e ao item.</p>
      </li>
      <li>
        <h3>6. Sistema de Filtros</h3>
        <p><strong>O que o sistema deve fazer:</strong> Permitir filtragem de parques, trilhas e eventos por critérios como local, titulo, descrição e preço.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Melhora a navegação e a busca de informações.</p>
        <p><strong>Conclusão:</strong> Cumprido quando o sistema exibir resultados filtrados em tempo real.</p>
      </li>
      <li>
        <h3>7. Sistema de Ordenação</h3>
        <p><strong>O que o sistema deve fazer:</strong> Permitir ordenação por popularidade, preço, distância, duração ou data.</p>
        <p><strong>Prioridade:</strong> Média</p>
        <p><strong>Justificativa:</strong> Complementa os filtros, tornando a experiência mais intuitiva.</p>
        <p><strong>Conclusão:</strong> Cumprido quando a ordenação for dinâmica e funcional.</p>
      </li>
      <li>
        <h3>8. Exibição Detalhada</h3>
        <p><strong>O que o sistema deve fazer:</strong> Mostrar páginas detalhadas para parques, trilhas e eventos com informações completas.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Fornece clareza e profundidade nas informações.</p>
        <p><strong>Conclusão:</strong> Cumprido quando cada item tiver uma página individual completa.</p>
      </li>
      <li>
        <h3>9. Sistema de Avaliação</h3>
        <p><strong>O que o sistema deve fazer:</strong> Permitir avaliações de usuários e moderação por administradores.</p>
        <p><strong>Prioridade:</strong> Média</p>
        <p><strong>Justificativa:</strong> Estimula interação e feedback.</p>
        <p><strong>Conclusão:</strong> Cumprido quando as avaliações forem exibidas e moderáveis.</p>
      </li>
      <li>
        <h3>10. Mapa Interativo</h3>
        <p><strong>O que o sistema deve fazer:</strong> Exibir mapas interativos com a localização dos parques e trilhas.</p>
        <p><strong>Prioridade:</strong> Média</p>
        <p><strong>Justificativa:</strong> Facilita o planejamento e a visualização geográfica.</p>
        <p><strong>Conclusão:</strong> Cumprido quando os mapas renderizarem corretamente no sistema.</p>
      </li>
      <li>
        <h3>11. Painel Administrativo</h3>
        <p><strong>O que o sistema deve fazer:</strong> Oferecer uma interface administrativa para gerenciar conteúdo e moderação.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Necessário para manter o sistema organizado e seguro.</p>
        <p><strong>Conclusão:</strong> Cumprido quando o painel estiver acessível apenas a administradores autenticados.</p>
      </li>
    </ul>
  </div>
  <div id="requisitos_nao_funcionais">
    <h2>Requisitos Não Funcionais</h2>
    <ul>
      <li>
        <h3>13. Desempenho</h3>
        <p><strong>O que o sistema deve fazer:</strong> Responder requisições em até 3 segundos.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Um site rápido melhora UX e SEO.</p>
        <p><strong>Conclusão:</strong> Cumprido quando for aprovado em testes de desempenho.</p>
      </li>
      <li>
        <h3>14. Segurança</h3>
        <p><strong>O que o sistema deve fazer:</strong> Proteger dados sensíveis e usar HTTPS.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Evita vazamento e garante conformidade.</p>
        <p><strong>Conclusão:</strong> Cumprido com autenticação segura e comunicação criptografada.</p>
      </li>
      <li>
        <h3>15. Usabilidade</h3>
        <p><strong>O que o sistema deve fazer:</strong> Garantir interface intuitiva e responsiva.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Melhora experiência e acessibilidade.</p>
        <p><strong>Conclusão:</strong> Cumprido quando o site for funcional em todos os dispositivos.</p>
      </li>
      <li>
        <h3>16. Escalabilidade</h3>
        <p><strong>O que o sistema deve fazer:</strong> Suportar adição de novos parques, trilhas e eventos sem reestruturação do código.</p>
        <p><strong>Prioridade:</strong> Média</p>
        <p><strong>Justificativa:</strong> Facilita manutenção e crescimento futuro.</p>
        <p><strong>Conclusão:</strong> Cumprido quando novos módulos puderem ser adicionados dinamicamente.</p>
      </li>
    </ul>
  </div>
</div>


<div id="prototipo">
  <h1>Protótipo</h1>
  <a href="https://www.figma.com/design/WKbKEBoPorf7jbQlPPFozL/Projetos?node-id=0-1&p=f&t=bbLaDisVC6go9FAN-0">Acessar no Figma</a>
</div>

<div id="stack">
  <h1>Stacks/Tecnologias:</h1>

  <h3>TypeScript</h3>
  <h3>React</h3>
  <h3>Node.js</h3>
  <h3>JavaScript</h3>
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
    <li><strong>Presentation :</strong> camada que expõe os endpoints REST.</li>
  </ol>

<div id="banco">
  <h1>Diagrama do Banco de dados</h1>
  <a href="https://lucid.app/lucidchart/cea852b0-e175-42dc-83cb-0e9e8b16b9b0/edit?viewport_loc=685%2C311%2C3093%2C1437%2C0_0&invitationId=inv_857379fc-94f7-4d77-bb7f-d4a78a0da08e">Lucid Chart</a>
  <p>Precisa estar logado</p>
</div>
<div id="fora_escopo">
  <h1>Fora do Escopo</h1>
  <p>Esta seção descreve os elementos que <strong>não serão implementados</strong> nesta versão inicial do sistema, alinhando expectativas entre equipe de desenvolvimento e stakeholders.</p>
  <ul>
    <li>
      <h3>1. Integração com sistemas de pagamento</h3>
      <p>Compra ou reserva de ingressos online não será suportada no MVP.</p>
    </li>
    <li>
      <h3>2. Aplicativo mobile nativo</h3>
      <p>O MVP será apenas um site responsivo, não haverá app nativo em React Native por exemplo.</p>
    </li>
    <li>
      <h3>3. Sistema de reservas de trilhas ou eventos</h3>
      <p>Agendamento de horários específicos para visitação não será implementado.</p>
    </li>
    <li>
      <h3>4. Notificações push ou e-mails automáticos</h3>
      <p>Alertas sobre novos eventos, trilhas ou atualizações não estarão disponíveis.</p>
    </li>
    <li>
      <h3>5. Relatórios analíticos complexos</h3>
      <p>Dashboards administrativos detalhados de métricas e usuários não farão parte do MVP.</p>
    </li>
    <li>
      <h3>6. Tradução multilíngue completa</h3>
      <p>O MVP será apenas em português, suporte a outros idiomas não será implementado.</p>
    </li>
    <li>
      <h3>7. Mapas interativos avançados</h3>
      <p>O MVP terá apenas mapas simples para localização.</p>
    </li>
  </ul>
</div>


<div id="repositorios">
  <h1>Repositórios</h1>

  <ul>
    <li><a href="https://github.com/MarcosFerreira2024/MVP-Frontend/">Frontend</a></li>
    <li><a href="https://github.com/MarcosFerreira2024/MVP-Unifeso/">Backend</a></li>
  </ul>
  
</div>

<div id="estrutura">
  <h1>Estrutura Atual do Projeto</h1>
  <p>Atualizada: 15/10/2025 <span>05:50 am</span></p>
  <pre>
  ├── 📁 .git/ 🚫 (hidden)
  ├── 📁 node_modules/ 🚫 (hidden)
  ├── 📁 prisma/
  │   ├── 📁 migrations/
  │   │   ├── 📁 20251015054349_criando_tabelas/
  │   │   │   └── 🗄️ migration.sql
  │   │   └── ⚙️ migration_lock.toml
  │   └── 📄 schema.prisma
  ├── 📁 src/
  │   ├── 📁 application/
  │   │   └── 📁 useCases/
  │   │       └── 📁 Authentication/
  │   │           ├── 📄 LoginUseCase.ts
  │   │           ├── 📄 SignUpUseCase.ts
  │   │           └── 📄 VerifyCodeUseCase.ts
  │   ├── 📁 domain/
  │   │   ├── 📁 entities/
  │   │   │   ├── 📄 Outing.ts
  │   │   │   ├── 📄 User.ts
  │   │   │   └── 📄 VerificationCode.ts
  │   │   ├── 📁 interfaces/
  │   │   │   ├── 📄 IEmailService.ts
  │   │   │   ├── 📄 IHashProvider.ts
  │   │   │   ├── 📄 ITokenProvider.ts
  │   │   │   ├── 📄 IUserRepository.ts
  │   │   │   └── 📄 IVerificationCodeRepository.ts
  │   │   └── 📁 value objects/
  │   │       ├── 📄 Content.ts
  │   │       ├── 📄 Email.ts
  │   │       ├── 📄 Name.ts
  │   │       ├── 📄 Password.ts
  │   │       └── 📄 Title.ts
  │   ├── 📁 helpers/
  │   │   ├── 📄 errorHandler.ts
  │   │   ├── 📄 mapPrismaRole.ts
  │   │   ├── 📄 mapPrismaUserToUserFromDb.ts
  │   │   ├── 📄 normalizeBadWords.ts
  │   │   └── 📄 validateValueOrThrow.ts
  │   ├── 📁 infrastructure/
  │   │   ├── 📁 config/
  │   │   ├── 📁 db/
  │   │   │   └── 🗄️ dev.db
  │   │   ├── 📁 libs/
  │   │   │   ├── 📁 nodemailer/
  │   │   │   │   └── 📄 config.ts
  │   │   │   └── 📁 prisma/
  │   │   │       ├── 📁 generated/ 🚫 (hidden)
  │   │   │       └── 📄 prisma.ts
  │   │   ├── 📁 providers/
  │   │   │   ├── 📄 HashProvider.ts
  │   │   │   └── 📄 TokenProvider.ts
  │   │   ├── 📁 repositories/
  │   │   │   └── 📄 UserRepository.ts
  │   │   ├── 📁 services/
  │   │   │   └── 📁 email/
  │   │   │       ├── 📁 template/
  │   │   │       │   └── 🌐 verificationCode.html
  │   │   │       └── 📄 EmailService.ts
  │   │   └── 📁 types/
  │   │       ├── 📄 dataBase.ts
  │   │       └── 📄 enums.ts
  │   ├── 📁 presentation/
  │   │   ├── 📁 controllers/
  │   │   │   ├── 📄 AuthenticationController.ts
  │   │   │   ├── 📄 OutingController.ts
  │   │   │   └── 📄 UserController.ts
  │   │   └── 📁 routes/
  │   ├── 📁 tests/
  │   │   ├── 📁 Vo/
  │   │   │   ├── 📄 Content.test.ts
  │   │   │   ├── 📄 Email.test.ts
  │   │   │   ├── 📄 Name.test.ts
  │   │   │   ├── 📄 Password.test.ts
  │   │   │   └── 📄 Title.test.ts
  │   │   └── 📁 functions/
  │   │       └── 📄 normalizeBadWords.test.ts
  │   └── 📄 index.ts
  ├── 🔒 .env 🚫 (hidden)
  ├── 📄 .env.example 
  ├── 🚫 .gitignore
  ├── 📖 README.md
  ├── 📄 jest.config.ts
  ├── 📄 jest.setup.ts
  ├── 📄 package-lock.json
  ├── 📄 package.json
  └── 📄 tsconfig.json
  </pre>
</div>


