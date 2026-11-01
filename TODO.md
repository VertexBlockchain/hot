# TODO — PixConteúdo

## Página de oferta visual
- [x] Exibir uma página responsiva em português do Brasil com título, descrição, preço, benefícios, chamada para ação e as imagens fornecidas pelo usuário.
- [x] Levar o visitante ao checkout sem exigir login para apenas visualizar a oferta.

## Cadastro, login e recuperação
- [ ] Permitir cadastro de usuário com identificação básica e credenciais próprias.
- [ ] Permitir login do usuário e manter o pedido vinculado à conta correta.
- [ ] Exibir fluxo de “Esqueci minha senha” com mensagem segura e sem revelar se um e-mail existe; persistir token de recuperação para integração de envio na próxima etapa.

## Checkout Pix
- [ ] Exibir resumo da oferta e identificação básica do comprador.
- [ ] Criar cobrança Pix server-side usando a integração Pixgate, com QR Code e código copia e cola quando a chave segura estiver configurada.
- [ ] Nunca expor a chave Pixgate no navegador, na interface ou no código-fonte.
- [ ] Permitir clicar em “Já paguei” e registrar a confirmação sem declarar aprovação automática.
- [ ] Mostrar os estados aguardando pagamento, pagamento informado, em análise, aprovado e recusado.

## Números para sorteios futuros
- [ ] A cada clique válido em “Já paguei”, gerar exatamente 50 números aleatórios distintos entre 1 e 1.000.000.
- [ ] Vincular os 50 números ao usuário e ao pedido e persistir a seleção para consultas futuras.
- [ ] Não exibir os números antes da confirmação do pedido; depois, mostrar a seleção ao comprador com linguagem clara.

## Liberação futura
- [ ] Manter a área de conteúdos fora desta primeira etapa e impedir que ela apareça como liberada antes da aprovação manual.
- [ ] Deixar o pedido preparado para aprovação/recusa manual e futura liberação de conteúdo.
