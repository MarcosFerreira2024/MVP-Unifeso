<div>
  <h1>Menu</h1>
  <li><a href="#alunos">Alunos</a></li>
  <li><a href="#projeto_escolhido">Projeto Escolhido</a></li>
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
    <li><a href="#fora_escopo">Fora do Escopo Inicial</a></li>
    <li><a href="#repositorios">Repositórios</a></li>
    <li><a href="#estrutura">Estrutura das Pastas</a></li>
    <li><a href="dependencias">Dependências</a></li>
    <li><a href="#links">Links Uteis </a></li>
  </ul>
</div>
<div id="alunos">
  <h1>Alunos</h1>
  <ul>
    <li>Marcos Vinicius Ferreira Pinto.</li>
    <li>Miguel Arcuri Carapeto Faria.</li>
    <li>Luiz Felipe Oliveira Da Silva.</li>
  </ul>

</div>
<div id="projeto_escolhido">
  <h1>Projeto Escolhido</h1>
  <p>Terê Verde Online</p>

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
        <p><strong>Conclusão:🟩</strong> Atendido quando o sistema permitir login seguro com redirecionamento.</p>
      </li>
      <li>
        <h3>2. Diferenciação de Perfis</h3>
        <p><strong>O que o sistema deve fazer:</strong> Distinguir entre usuários padrão e administradores, oferecendo permissões diferentes.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Garante controle de acesso e separação de responsabilidades.</p>
        <p><strong>Conclusão:🟩</strong> Cumprido quando o sistema aplicar permissões conforme o perfil.</p>
      </li>
      <li>
        <h3>3. Edição de Conteúdo por Administradores</h3>
        <p><strong>O que o sistema deve fazer:</strong> Permitir que administradores alterem informações sobre parques, trilhas, eventos e avaliações.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Mantém os dados atualizados e confiáveis.</p>
        <p><strong>Conclusão:🟩</strong> Cumprido quando o painel permitir CRUD completo desses itens.</p>
      </li>
      <li>
        <h3>4. Cadastro de Parques, Trilhas e Eventos</h3>
        <p><strong>O que o sistema deve fazer:</strong> Permitir cadastro completo de parques, trilhas e eventos, incluindo horário, preço e localização.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Estrutura o núcleo de informações do sistema.</p>
        <p><strong>Conclusão:🟩</strong> Cumprido quando novos registros puderem ser criados e vinculados corretamente.</p>
      </li>
      <li>
        <h3>5. Avaliação de Parques, Trilhas e Eventos</h3>
        <p><strong>O que o sistema deve fazer:</strong> Permitir que usuários registrem avaliações (1 a 5 estrelas).</p>
        <p><strong>Prioridade:</strong> Média</p>
        <p><strong>Justificativa:</strong> Melhora a experiência e ajuda outros visitantes.</p>
        <p><strong>Conclusão:🟩</strong> Cumprido quando avaliações forem associadas ao autor e ao item.</p>
      </li>
      <li>
        <h3>6. Sistema de Filtros</h3>
        <p><strong>O que o sistema deve fazer:</strong> Permitir filtragem de parques, trilhas e eventos por critérios como local, titulo, descrição e preço.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Melhora a navegação e a busca de informações.</p>
        <p><strong>Conclusão:🟩</strong> Cumprido quando o sistema exibir resultados filtrados em tempo real.</p>
      </li>
      <li>
        <h3>7. Sistema de Ordenação</h3>
        <p><strong>O que o sistema deve fazer:</strong> Permitir ordenação por popularidade, preço, distância, duração ou data.</p>
        <p><strong>Prioridade:</strong> Média</p>
        <p><strong>Justificativa:</strong> Complementa os filtros, tornando a experiência mais intuitiva.</p>
        <p><strong>Conclusão:🟩</strong> Cumprido quando a ordenação for dinâmica e funcional.</p>
      </li>
      <li>
        <h3>8. Exibição Detalhada</h3>
        <p><strong>O que o sistema deve fazer:</strong> Mostrar páginas detalhadas para parques, trilhas e eventos com informações completas.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Fornece clareza e profundidade nas informações.</p>
        <p><strong>Conclusão:🟩</strong> Cumprido quando cada item tiver uma página individual completa.</p>
      </li>
      <li>
        <h3>9. Sistema de Avaliação</h3>
        <p><strong>O que o sistema deve fazer:</strong> Permitir avaliações de usuários e moderação por administradores.</p>
        <p><strong>Prioridade:</strong> Média</p>
        <p><strong>Justificativa:</strong> Estimula interação e feedback.</p>
        <p><strong>Conclusão:🟩</strong> Cumprido quando as avaliações forem exibidas e moderáveis.</p>
      </li>
      <li>
        <h3>10. Mapa Interativo</h3>
        <p><strong>O que o sistema deve fazer:</strong> Exibir mapas interativos com a localização dos parques e trilhas.</p>
        <p><strong>Prioridade:</strong> Média</p>
        <p><strong>Justificativa:</strong> Facilita o planejamento e a visualização geográfica.</p>
        <p><strong>Conclusão:🟩</strong> Cumprido quando os mapas renderizarem corretamente no sistema.</p>
      </li>
      <li>
        <h3>11. Painel Administrativo</h3>
        <p><strong>O que o sistema deve fazer:</strong> Oferecer uma interface administrativa para gerenciar conteúdo e moderação.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Necessário para manter o sistema organizado e seguro.</p>
        <p><strong>Conclusão:🟩</strong> Cumprido quando o painel estiver acessível apenas a administradores autenticados.</p>
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
        <p><strong>Conclusão:🟩</strong> Cumprido quando for aprovado em testes de desempenho.</p>
      </li>
      <li>
        <h3>14. Segurança</h3>
        <p><strong>O que o sistema deve fazer:</strong> Proteger dados sensíveis e usar HTTPS.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Evita vazamento e garante conformidade.</p>
        <p><strong>Conclusão:🟩</strong> Cumprido com autenticação segura e comunicação criptografada.</p>
      </li>
      <li>
        <h3>15. Usabilidade</h3>
        <p><strong>O que o sistema deve fazer:</strong> Garantir interface intuitiva e responsiva.</p>
        <p><strong>Prioridade:</strong> Alta</p>
        <p><strong>Justificativa:</strong> Melhora experiência e acessibilidade.</p>
        <p><strong>Conclusão:🟩</strong> Cumprido quando o site for funcional em todos os dispositivos.</p>
      </li>
      <li>
        <h3>16. Escalabilidade</h3>
        <p><strong>O que o sistema deve fazer:</strong> Suportar adição de novos parques, trilhas e eventos sem reestruturação do código.</p>
        <p><strong>Prioridade:</strong> Média</p>
        <p><strong>Justificativa:</strong> Facilita manutenção e crescimento futuro.</p>
        <p><strong>Conclusão:🟩</strong> Cumprido quando novos módulos puderem ser adicionados dinamicamente.</p>
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
<pre>
Backend:

📦src
┣ 📂application
┃ ┗ 📂useCases
┃ ┃ ┣ 📂Authentication
┃ ┃ ┃ ┣ 📜ConsumeVerificationCodeUseCase.ts
┃ ┃ ┃ ┣ 📜LoginUseCase.ts
┃ ┃ ┃ ┗ 📜SignUpUseCase.ts
┃ ┃ ┣ 📂Authorization
┃ ┃ ┃ ┗ 📜VerifyTokenUseCase.ts
┃ ┃ ┣ 📂Event
┃ ┃ ┃ ┣ 📜DeleteEventUseCase.ts
┃ ┃ ┃ ┣ 📜FindEventByIdUseCase.ts
┃ ┃ ┃ ┗ 📜UpdateEventUseCase.ts
┃ ┃ ┣ 📂Outing
┃ ┃ ┃ ┣ 📂helpers
┃ ┃ ┃ ┃ ┗ 📜locationHelper.ts
┃ ┃ ┃ ┣ 📜AddEventUseCase.ts
┃ ┃ ┃ ┣ 📜AddParkUseCase.ts
┃ ┃ ┃ ┣ 📜AddTrailUseCase.ts
┃ ┃ ┃ ┣ 📜CreateEventUseCase.ts
┃ ┃ ┃ ┣ 📜CreateParkUseCase.ts
┃ ┃ ┃ ┣ 📜CreateTrailUseCase.ts
┃ ┃ ┃ ┣ 📜DeleteOutingUseCase.ts
┃ ┃ ┃ ┣ 📜FindOutingBySlugUseCase.ts
┃ ┃ ┃ ┣ 📜ListOutingsUseCase.ts
┃ ┃ ┃ ┗ 📜UpdateOutingUseCase.ts
┃ ┃ ┣ 📂Rating
┃ ┃ ┃ ┣ 📜CreateRatingUseCase.ts
┃ ┃ ┃ ┣ 📜DeleteRatingUseCase.ts
┃ ┃ ┃ ┣ 📜FindAllRatingsByOutingSlugUseCase.ts
┃ ┃ ┃ ┣ 📜FindAllRatingsByUserIdUseCase.ts
┃ ┃ ┃ ┗ 📜UpdateRatingUseCase.ts
┃ ┃ ┗ 📂User
┃ ┃ ┃ ┣ 📜DeleteUserUseCase.ts
┃ ┃ ┃ ┣ 📜FindUserByIdUseCase.ts
┃ ┃ ┃ ┣ 📜ListUsersUseCase.ts
┃ ┃ ┃ ┗ 📜UpdateUserUseCase.ts
┣ 📂docs
┃ ┣ 📜auth.yaml
┃ ┣ 📜index.ts
┃ ┣ 📜openapi.yaml
┃ ┣ 📜outing.yaml
┃ ┣ 📜rating.yaml
┃ ┣ 📜spec.ts
┃ ┗ 📜user.yaml
┣ 📂domain
┃ ┣ 📂entities
┃ ┃ ┣ 📜Event.ts
┃ ┃ ┣ 📜Park.ts
┃ ┃ ┣ 📜Rating.ts
┃ ┃ ┣ 📜User.ts
┃ ┃ ┗ 📜VerificationCode.ts
┃ ┣ 📂interfaces
┃ ┃ ┣ 📜IEmailService.ts
┃ ┃ ┣ 📜IEventRepository.ts
┃ ┃ ┣ 📜IHashProvider.ts
┃ ┃ ┣ 📜IOutingRepository.ts
┃ ┃ ┣ 📜IParkRepository.ts
┃ ┃ ┣ 📜IRatingRepository.ts
┃ ┃ ┣ 📜ITokenProvider.ts
┃ ┃ ┣ 📜ITrailRepository.ts
┃ ┃ ┣ 📜IUserRepository.ts
┃ ┃ ┣ 📜IVerificationCodeRepository.ts
┃ ┃ ┗ 📜IVerificationCodeService.ts
┃ ┗ 📂value objects
┃ ┃ ┣ 📜Biodiversity.ts
┃ ┃ ┣ 📜Capacity.ts
┃ ┃ ┣ 📜Content.ts
┃ ┃ ┣ 📜Difficulty.ts
┃ ┃ ┣ 📜Email.ts
┃ ┃ ┣ 📜Name.ts
┃ ┃ ┣ 📜Password.ts
┃ ┃ ┣ 📜RatingValue.ts
┃ ┃ ┗ 📜Title.ts
┣ 📂helpers
┃ ┣ 📜errorHandler.ts
┃ ┣ 📜mapPrismaRole.ts
┃ ┣ 📜mapPrismaUserToUserFromDb.ts
┃ ┣ 📜normalizeBadWords.ts
┃ ┗ 📜validateValueOrThrow.ts
┣ 📂infrastructure
┃ ┣ 📂db
┃ ┃ ┗ 📂seeds
┃ ┃ ┃ ┣ 📜admin.ts
┃ ┃ ┃ ┣ 📜category.ts
┃ ┃ ┃ ┣ 📜city.ts
┃ ┃ ┃ ┣ 📜eventOutings.ts
┃ ┃ ┃ ┣ 📜index.ts
┃ ┃ ┃ ┣ 📜parkOutings.ts
┃ ┃ ┃ ┣ 📜photos.ts
┃ ┃ ┃ ┣ 📜trailOutings.ts
┃ ┃ ┃ ┗ 📜user.ts
┃ ┣ 📂libs
┃ ┃ ┣ 📂nodemailer
┃ ┃ ┃ ┗ 📜config.ts
┃ ┃ ┗ 📂prisma
┃ ┃ ┃ ┣ 📂generated
┃ ┃ ┃ ┃ ┣ 📂internal
┃ ┃ ┃ ┃ ┃ ┣ 📜class.ts
┃ ┃ ┃ ┃ ┃ ┣ 📜prismaNamespace.ts
┃ ┃ ┃ ┃ ┃ ┗ 📜prismaNamespaceBrowser.ts
┃ ┃ ┃ ┃ ┣ 📂models
┃ ┃ ┃ ┃ ┃ ┣ 📜Category.ts
┃ ┃ ┃ ┃ ┃ ┣ 📜City.ts
┃ ┃ ┃ ┃ ┃ ┣ 📜Event.ts
┃ ┃ ┃ ┃ ┃ ┣ 📜Location.ts
┃ ┃ ┃ ┃ ┃ ┣ 📜OpenHour.ts
┃ ┃ ┃ ┃ ┃ ┣ 📜Outings.ts
┃ ┃ ┃ ┃ ┃ ┣ 📜Park.ts
┃ ┃ ┃ ┃ ┃ ┣ 📜Photo.ts
┃ ┃ ┃ ┃ ┃ ┣ 📜Ratings.ts
┃ ┃ ┃ ┃ ┃ ┣ 📜Trail.ts
┃ ┃ ┃ ┃ ┃ ┣ 📜Users.ts
┃ ┃ ┃ ┃ ┃ ┗ 📜VerificationCodes.ts
┃ ┃ ┃ ┃ ┣ 📜browser.ts
┃ ┃ ┃ ┃ ┣ 📜client.ts
┃ ┃ ┃ ┃ ┣ 📜commonInputTypes.ts
┃ ┃ ┃ ┃ ┣ 📜enums.ts
┃ ┃ ┃ ┃ ┗ 📜models.ts
┃ ┃ ┃ ┗ 📜prisma.ts
┃ ┣ 📂provider
┃ ┃ ┣ 📜HashProvider.ts
┃ ┃ ┗ 📜TokenProvider.ts
┃ ┣ 📂repositories
┃ ┃ ┣ 📜EventRepository.ts
┃ ┃ ┣ 📜OutingRepository.ts
┃ ┃ ┣ 📜ParkRepository.ts
┃ ┃ ┣ 📜RatingRepository.ts
┃ ┃ ┣ 📜TrailRepository.ts
┃ ┃ ┣ 📜UserRepository.ts
┃ ┃ ┗ 📜VerificationCodeRepository.ts
┃ ┣ 📂services
┃ ┃ ┣ 📂email
┃ ┃ ┃ ┣ 📂template
┃ ┃ ┃ ┃ ┗ 📜verificationCode.html
┃ ┃ ┃ ┗ 📜EmailService.ts
┃ ┃ ┗ 📂verificationCode
┃ ┃ ┃ ┗ 📜VerificationCodeService.ts
┃ ┗ 📂types
┃ ┃ ┣ 📜database.ts
┃ ┃ ┗ 📜global.ts
┣ 📂presentation
┃ ┣ 📂controllers
┃ ┃ ┣ 📜.gitkeep
┃ ┃ ┣ 📜AuthenticationController.ts
┃ ┃ ┣ 📜OutingController.ts
┃ ┃ ┣ 📜RatingController.ts
┃ ┃ ┣ 📜TokenController.ts
┃ ┃ ┣ 📜UserController.ts
┃ ┃ ┗ 📜VerificationCodeController.ts
┃ ┣ 📂middlewares
┃ ┃ ┣ 📜ensureAuthenticated.ts
┃ ┃ ┣ 📜rateLimiter.ts
┃ ┃ ┣ 📜requireAdmin.ts
┃ ┃ ┗ 📜validationMiddleware.ts
┃ ┣ 📂routes
┃ ┃ ┣ 📜auth.ts
┃ ┃ ┣ 📜outing.ts
┃ ┃ ┣ 📜rating.ts
┃ ┃ ┣ 📜routes.ts
┃ ┃ ┗ 📜user.ts
┃ ┗ 📂schemas
┃ ┃ ┣ 📜auth.schema.ts
┃ ┃ ┣ 📜outing.schema.ts
┃ ┃ ┣ 📜rating.schema.ts
┃ ┃ ┣ 📜token.schema.ts
┃ ┃ ┗ 📜user.schema.ts
┣ 📂shared
┃ ┣ 📂container
┃ ┃ ┗ 📜index.ts
┃ ┗ 📜enums.ts
┣ 📂tests
┃ ┣ 📂functions
┃ ┃ ┗ 📜normalizeBadWords.test.ts
┃ ┣ 📂services
┃ ┃ ┗ 📜SendVerificationEmail.test.ts
┃ ┗ 📂Vo
┃ ┃ ┣ 📜Content.test.ts
┃ ┃ ┣ 📜Email.test.ts
┃ ┃ ┣ 📜Name.test.ts
┃ ┃ ┣ 📜Password.test.ts
┃ ┃ ┗ 📜Title.test.ts
┗ 📜index.ts

Front

📦src
┣ 📂actions
┃ ┣ 📜createOuting.ts
┃ ┣ 📜deleteOuting.ts
┃ ┣ 📜deleteRating.ts
┃ ┣ 📜fetchOutings.ts
┃ ┣ 📜login.ts
┃ ┣ 📜register.ts
┃ ┣ 📜sendRating.ts
┃ ┣ 📜sendVerificationCode.ts
┃ ┣ 📜updateOuting.ts
┃ ┗ 📜updateRating.ts
┣ 📂components
┃ ┣ 📂admin
┃ ┃ ┗ 📂outing
┃ ┃ ┃ ┣ 📜DifficultySelector.tsx
┃ ┃ ┃ ┣ 📜EventStepContent.tsx
┃ ┃ ┃ ┣ 📜OutingCreationModal.tsx
┃ ┃ ┃ ┣ 📜OutingEditModal.tsx
┃ ┃ ┃ ┣ 📜ParkStepContent.tsx
┃ ┃ ┃ ┣ 📜SelectionButtons.tsx
┃ ┃ ┃ ┣ 📜Step1Content.tsx
┃ ┃ ┃ ┣ 📜Step2Content.tsx
┃ ┃ ┃ ┣ 📜Step3Content.tsx
┃ ┃ ┃ ┣ 📜StepControllers.tsx
┃ ┃ ┃ ┗ 📜TrailStepContent.tsx
┃ ┣ 📂auth
┃ ┃ ┣ 📜AuthForm.tsx
┃ ┃ ┣ 📜CodeVerificationModal.tsx
┃ ┃ ┗ 📜InputLabelList.tsx
┃ ┣ 📂home
┃ ┃ ┗ 📜Section.tsx
┃ ┣ 📂outing
┃ ┃ ┣ 📂parks
┃ ┃ ┃ ┗ 📜ParkCards.tsx
┃ ┃ ┣ 📜Category.tsx
┃ ┃ ┣ 📜CategorySidebar.tsx
┃ ┃ ┣ 📜MoreInfo.tsx
┃ ┃ ┣ 📜MoreInfoList.tsx
┃ ┃ ┣ 📜OutingCard.tsx
┃ ┃ ┣ 📜OutingCardList.tsx
┃ ┃ ┣ 📜OutingCardListSkeleton.tsx
┃ ┃ ┣ 📜OutingCardSkeleton.tsx
┃ ┃ ┣ 📜OutingDetailSkeleton.tsx
┃ ┃ ┣ 📜TwoRowsCarousel.tsx
┃ ┃ ┗ 📜TwoRowsCarouselSkeleton.tsx
┃ ┣ 📂rating
┃ ┃ ┣ 📜Counts.tsx
┃ ┃ ┣ 📜RatingCard.tsx
┃ ┃ ┣ 📜RatingForm.tsx
┃ ┃ ┣ 📜RatingList.tsx
┃ ┃ ┗ 📜UserCard.tsx
┃ ┣ 📂trails
┃ ┃ ┣ 📜TrailCard.tsx
┃ ┃ ┣ 📜TrailCardInfo.tsx
┃ ┃ ┣ 📜TrailCardList.tsx
┃ ┃ ┣ 📜TrailCardListSkeleton.tsx
┃ ┃ ┗ 📜TrailImage.tsx
┃ ┣ 📜Button.tsx
┃ ┣ 📜ConfirmDialog.tsx
┃ ┣ 📜FullGaleryImages.tsx
┃ ┣ 📜FullScreenImage.tsx
┃ ┣ 📜Galery.tsx
┃ ┣ 📜Header.tsx
┃ ┣ 📜HeaderDefault.tsx
┃ ┣ 📜HeaderLinks.tsx
┃ ┣ 📜InformativeText.tsx
┃ ┣ 📜Input.tsx
┃ ┣ 📜Label.tsx
┃ ┣ 📜Loading.tsx
┃ ┣ 📜Logout.tsx
┃ ┣ 📜Map.tsx
┃ ┣ 📜MobileCarousel.tsx
┃ ┣ 📜MobileHeaderMenu.tsx
┃ ┣ 📜Modal.tsx
┃ ┣ 📜OpenStatus.tsx
┃ ┣ 📜Pagination.tsx
┃ ┣ 📜RevealingImage.tsx
┃ ┣ 📜Scrollable.tsx
┃ ┣ 📜ScrollToHash.tsx
┃ ┣ 📜ScrollTop.tsx
┃ ┣ 📜SearchButton.tsx
┃ ┣ 📜SectionTitle.tsx
┃ ┣ 📜Select.tsx
┃ ┣ 📜Selectors.tsx
┃ ┣ 📜SelectorsList.tsx
┃ ┣ 📜TextArea.tsx
┃ ┣ 📜Tooltip.tsx
┃ ┗ 📜VisibleGaleryImages.tsx
┣ 📂context
┃ ┣ 📜CodeContext.tsx
┃ ┣ 📜LoadingContext.tsx
┃ ┣ 📜loadingTypesAndContext.ts
┃ ┣ 📜OutingsContext.tsx
┃ ┗ 📜UserContext.tsx
┣ 📂css
┃ ┗ 📜index.css
┣ 📂helpers
┃ ┣ 📜api.ts
┃ ┣ 📜avatar.ts
┃ ┣ 📜buildOutingPayload.ts
┃ ┣ 📜formatPrice.ts
┃ ┣ 📜formatZodErrors.ts
┃ ┣ 📜getFirstPhoto.ts
┃ ┣ 📜handleErrors.ts
┃ ┣ 📜parks.ts
┃ ┣ 📜ratings.ts
┃ ┣ 📜timestampConverter.ts
┃ ┣ 📜utils.ts
┃ ┗ 📜validationSchemas.ts
┣ 📂hooks
┃ ┣ 📜useAuthorization.ts
┃ ┣ 📜useBodyScrollLock.ts
┃ ┣ 📜useCarouselNavigation.ts
┃ ┣ 📜useConfirmDelete.ts
┃ ┣ 📜useDebouncedValidation.ts
┃ ┣ 📜useEvent.ts
┃ ┣ 📜useFormState.ts
┃ ┣ 📜useGalery.ts
┃ ┣ 📜useImagePreloader.ts
┃ ┣ 📜useLoading.ts
┃ ┣ 📜useLogin.ts
┃ ┣ 📜useModal.ts
┃ ┣ 📜useOpenStatus.ts
┃ ┣ 📜useOuting.ts
┃ ┣ 📜useOutingCreation.ts
┃ ┣ 📜useOutingCrud.ts
┃ ┣ 📜useOutingEdit.ts
┃ ┣ 📜useOutings.ts
┃ ┣ 📜useOutingsByCategory.ts
┃ ┣ 📜usePagination.ts
┃ ┣ 📜usePark.ts
┃ ┣ 📜useRatingDelete.ts
┃ ┣ 📜useRatingForm.ts
┃ ┣ 📜useRatingFormDialog.ts
┃ ┣ 📜useRegister.ts
┃ ┣ 📜useScrollState.ts
┃ ┣ 📜useSearch.ts
┃ ┣ 📜useSearchOutings.ts
┃ ┣ 📜useSelect.ts
┃ ┣ 📜useSidebar.ts
┃ ┣ 📜useTrail.ts
┃ ┣ 📜useTrailCard.ts
┃ ┗ 📜useTwoRowsCarousel.ts
┣ 📂layouts
┃ ┣ 📜AdminRoute.tsx
┃ ┣ 📜AuthLayout.tsx
┃ ┣ 📜MainLayout.tsx
┃ ┗ 📜RedirectIfAuth.tsx
┣ 📂pages
┃ ┣ 📜Admin.tsx
┃ ┣ 📜Home.tsx
┃ ┣ 📜Login.tsx
┃ ┣ 📜Outing.tsx
┃ ┣ 📜Register.tsx
┃ ┗ 📜Search.tsx
┣ 📂types
┃ ┣ 📜Outing.ts
┃ ┗ 📜User.ts
┣ 📜App.tsx
┗ 📜main.tsx

  </pre>
</div >
  <div id="dependencias">
    <h2>Dependências de Desenvolvimento</h2>
  <ul>
    <li>@types/bcrypt</li>
    <li>@types/cors</li>
    <li>@types/dotenv</li>
    <li>@types/express</li>
    <li>@types/jest</li>
    <li>@types/jsonwebtoken</li>
    <li>@types/nodemailer</li>
    <li>jest</li>
    <li>ts-jest</li>
    <li>ts-node</li>
    <li>tsx</li>
    <li>typescript</li>
  </ul>
  
  <h2>Dependências</h2>
  <ul>
    <li>@prisma/client</li>
    <li>bcrypt</li>
    <li>cors</li>
    <li>dotenv</li>
    <li>express</li>
    <li>jsonwebtoken</li>
    <li>nodemailer</li>
    <li>prisma</li>
    <li>reflect-metadata</li>
    <li>tsyringe</li>
    <li>zod</li>
  </ul>
</div>

<div id="links">

  
</div>


