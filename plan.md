# Plano do PixConteúdo

## Escopo desta etapa
Construir uma landing page responsiva em português do Brasil com as imagens fornecidas, vitrine da oferta, checkout Pix, botão “Já paguei”, acompanhamento de status e base técnica para aprovação manual. Incluir cadastro, login e fluxo de esqueci minha senha para que cada pedido fique vinculado a um usuário.

Quando o usuário clicar em “Já paguei”, o servidor deverá gerar 50 números aleatórios distintos entre 1 e 1.000.000 e persistir essa seleção vinculada ao usuário e ao pedido. A área dos conteúdos continua fora do escopo visual desta primeira entrega e será liberada somente em uma etapa posterior após aprovação.

A chave `PIXGATE_API_KEY` será recebida apenas pelo cartão seguro de segredos e consumida no servidor. Nenhum segredo será enviado ao navegador.

## Direção de design
- **Estilos considerados:** editorial premium (0,07), cyber-neon (0,05), minimalismo financeiro (0,08).
- **Escolhido:** editorial premium com acentos de verde-lima e azul-noite.
- **Movimento:** sensação de “acesso reservado”, com composição assimétrica, tipografia forte e blocos que descem como uma página de vendas de alto valor.
- **Princípios:** confiança antes da conversão; imagens como prova visual; checkout sem distrações; estados de pagamento explícitos.
- **Cores:** fundo azul-noite quase preto para autoridade, branco quente para leitura e verde-lima como assinatura de ação/conversão.
- **Layout:** hero em duas colunas no desktop, com galeria vertical recortada; checkout em painel destacado e seções de benefícios em fluxo editorial, não em grade genérica.
- **Elementos de assinatura:** selo circular “acesso reservado”, linha pontilhada de progresso e cartões com borda fina e brilho sutil.
- **Interação:** CTA leva ao checkout; o botão “Já paguei” abre confirmação e muda o status; feedback sempre contextual e sem linguagem técnica.
- **Animação:** entrada suave dos blocos, hover discreto nas imagens e transições curtas nos estados do pedido; respeitar `prefers-reduced-motion`.
- **Tipografia:** serif display para títulos (`Georgia`) e sans limpa para interface (`Inter`/system-ui), com contraste forte entre promessa e instruções.
- **Essência:** uma porta de entrada clara e confiável para uma coleção digital reservada. Personalidade: direta, premium, cuidadosa.
- **Voz:** “Seu próximo acesso começa aqui.” / “Pague via Pix, avise a gente e acompanhe a aprovação.”
- **Marca:** wordmark “PixConteúdo” com o “P” tratado como um portal/recorte.
- **Cor proprietária:** verde-lima elétrico `#C8F169`.

## Arquitetura
- `client/src/pages/Home.tsx`: landing, modal de autenticação, checkout e status.
- `client/src/index.css`: tokens, layout editorial e responsividade.
- `server/routers.ts`: cadastro/login/logout, pedido, confirmação de pagamento e consulta de status.
- `drizzle/schema.ts`: usuário, sessão, pedido, número de sorteio e token de recuperação.
- `server/db.ts`: persistência e geração transacional de números distintos.
- `public/offerta/*`: imagens fornecidas no ZIP.
- `public/manus-routes.json`: manifesto da rota pública.

## Limites desta etapa
A área de conteúdos, entrega de arquivos e painel administrativo completo ficam para depois. A aprovação manual terá o estado e a persistência preparados; a interface administrativa completa pode ser expandida na próxima etapa. O envio real do e-mail de recuperação depende de um provedor de e-mail, que não foi escolhido nesta solicitação; a estrutura de token será preparada sem expor tokens na interface pública.
