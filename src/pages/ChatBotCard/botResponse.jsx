const botResponses = [
  {
    question: "Quem é você?",
    response: "Eu sou o único Bot que trabalha na FURIA! 🐾 Criado para ajudar você sobre dúvidas da FURIA e do time de CS!"
  },
  {
    question: "Como você está?",
    response: "Melhor agora, sempre torcendo para a FURIA! 🖤"
  },
  {
    question: "Qual é o seu nome?",
    response: "Eu me chamo ChatBot, fã número 1 da FURIA! 🔥"
  },
  {
    question: "Qual a line da FURIA de CSGO atualmente?",
    response: "🛡️ Line atual:\n\n- yuurih (Yuri Boian)\n- KSCERATO (Kaike Cerato)\n- FalleN👑 (Gabriel Toledo)\n- molodoy (Danil Golubenko)\n- Stand-in YEKINDAR (Mareks Gaļinskis)\n- sidde (Sidnei Macedo)"
  },
  {
    question: "Qual a line da FURIA feminina de CSGO atualmente?",
    response: "👑 Line feminina:\n\n- kaahSENSEI (Karina Takahashi)\n- izaa👑 (Izabella Galle)\n- gabs (Gabriela Freindorfer)\n- bizinha (Bruna Marvila)\n- lulitenz (Lucia Dubra)"
  },
  {
    question: "Quem é yuurih?",
    response: "🎯 Yuri 'yuurih' Boian é um dos jogadores mais consistentes do Brasil, fundamental na defesa dos bombsites e nos clutches da FURIA!"
  },
  {
    question: "Quem é KSCERATO?",
    response: "🔫 Kaike 'KSCERATO' Cerato é o rifler estrela da FURIA, conhecido mundialmente pela mira precisa e sangue frio!"
  },
  {
    question: "Quem é FalleN?",
    response: "👑 Gabriel 'FalleN' Toledo é uma lenda do CS mundial! Bicampeão de Major e referência de liderança e habilidade no Brasil e no mundo."
  },
  {
    question: "Quem é molodoy?",
    response: "🚀 Danil 'molodoy' Golubenko é um jovem russo promissor, contratado pela FURIA para reforçar a line no CS2."
  },
  {
    question: "Quem é YEKINDAR?",
    response: "💥 Mareks 'YEKINDAR' Gaļinskis é um dos riflers mais agressivos do mundo! Já brilhou pela Virtus.pro e Liquid antes de atuar como stand-in na FURIA."
  },
  {
    question: "Quem é sidde?",
    response: "🧠 Sidnei 'sidde' Macedo é um novo talento brasileiro no CS2, escolhido para integrar a FURIA e mostrar seu potencial."
  },
  {
    question: "Quais são os títulos da FURIA no CSGO?",
    response: "🏆 Títulos importantes:\n\n- DreamHack Open Summer 2020 (NA)\n- IEM New York 2020 (NA)\n- Elisa Invitational Fall 2021\n- CBCS Finals 2020\n- ESEA S29 Global Challenge\n\nSempre no topo! 🚀"
  },
  {
    question: "Quais jogos a FURIA compete atualmente?",
    response: "🎮 Jogos da FURIA:\n\n- Counter-Strike 2 (CS2)\n- Valorant\n- League of Legends (CBLOL)\n- Rocket League\n- Apex Legends\n- PUBG\n- Super Smash Bros.\n- Fighting Games (ex: Street Fighter)\n- Chess ♟️\n- Rainbow Six."
  },
  {
    question: "Qual sua arma favorita?",
    response: "🔫 Minha arma favorita é a AWP! Nada como acertar aquele tiro certeiro para decidir a rodada. 😎"
  },
  {
    question: "Quando a FURIA foi fundada?",
    response: "📅 A FURIA Esports foi fundada em agosto de 2017 por Jaime Pádua e André Akkari."
  },
  {
    question: "Quem é o dono da FURIA?",
    response: "🎩 A FURIA foi fundada e é liderada por Jaime Pádua e André Akkari, grandes nomes do poker e dos negócios!"
  },
  {
    question: "Qual o maior rival da FURIA no CS?",
    response: "⚔️ Grandes rivalidades:\n\n- MIBR (nacional)\n- Team Liquid (internacional)\n- G2 Esports (internacional)"
  },
  {
    question: "Onde fica a Gaming House da FURIA?",
    response: "🏠 A FURIA tem gaming offices em São Paulo (Brasil) e Boca Raton (Flórida, EUA)."
  },
  {
    question: "Qual o significado do nome FURIA?",
    response: "🔥 FURIA representa força, garra e paixão — valores que levam para dentro e fora dos servidores!"
  },
  {
    question: "Quem é o técnico do time de CS?",
    response: "🎯 O técnico da FURIA é Nicholas 'guerri' Nogueira, um dos mais respeitados no cenário!"
  },
  {
    question: "FURIA já jogou algum Major?",
    response: "🏆 Sim! A FURIA já participou de vários Majors importantes como StarLadder Berlin 2019, PGL Stockholm 2021, Antwerp 2022 e o histórico IEM Rio Major 2022!"
  },
  {
    question: "Como a torcida da FURIA é chamada?",
    response: "🎉 A 'Torcida FURIOSA' é famosa pelo apoio apaixonado e energia vibrante nos campeonatos!"
  },
  {
    question: "Quantos Majors a FURIA já jogou?",
    response: "📜 A FURIA já participou de mais de 5 Majors de CS:GO ao longo da sua história!"
  },
  {
    question: "Qual foi a melhor campanha da FURIA em um Major?",
    response: "🏆 A melhor campanha foi no IEM Rio Major 2022, onde chegaram às semifinais em casa, empurrados pela torcida brasileira! 🇧🇷"
  },
  {
    question: "Quem são os fundadores da FURIA?",
    response: "👥 Jaime Pádua e André Akkari são os visionários que fundaram a FURIA!"
  },
  {
    question: "Onde a FURIA nasceu?",
    response: "🇧🇷 A FURIA nasceu no Brasil, mas hoje atua em escala global!"
  },
  {
    question: "A FURIA tem time de Valorant?",
    response: "🎮 Sim! A FURIA disputa o Valorant Champions Tour (VCT) e outras competições internacionais!"
  },
  {
    question: "Qual é o lema da FURIA?",
    response: "🚀 'Born to make history' — 'Nascidos para fazer história'!"
  },
  {
    question: "Quem é o AWPer da FURIA no CS2?",
    response: "👑 FalleN é o AWPer principal da FURIA no CS2, uma lenda do cenário mundial!"
  },
  {
    question: "A FURIA tem time feminino?",
    response: "👑 Sim! A FURIA investe em equipes femininas como a line feminina de CS2!"
  },
  {
    question: "Quando a FURIA entrou no Valorant?",
    response: "📅 A FURIA entrou no cenário de Valorant em 2020, já se destacando no competitivo!"
  },
  {
    question: "Qual é o mascote da FURIA?",
    response: "🐆 A Pantera é o mascote da FURIA, representando força e agilidade!"
  },
  {
    question: "Qual foi o primeiro título internacional da FURIA?",
    response: "🏆 O primeiro título internacional da FURIA foi o DreamHack Open Summer 2020 na América do Norte!"
  },
  {
    question: "FURIA já teve jogadores estrangeiros?",
    response: "🌎 Sim! Jogadores como molodoy (Rússia) e YEKINDAR (Letônia) já jogaram pela FURIA!"
  },
  {
    question: "A FURIA já jogou fora do Brasil?",
    response: "✈️ A FURIA já disputou campeonatos nos EUA, Alemanha, Suécia, Dinamarca e outros países!"
  },
  {
    question: "A FURIA é só um time de CS?",
    response: "🚀 Não! A FURIA é multigames, com times em CS2, Valorant, LoL, Rocket League, Xadrez e muito mais!"
  },
  {
    question: "FURIA tem loja oficial?",
    response: "🛒 Sim! A FURIA tem uma loja online incrível e também lojas físicas vendendo roupas e produtos oficiais."
  },
  {
    question: "Por que o símbolo da FURIA é uma pantera?",
    response: "🐆 A pantera simboliza força, agilidade e ferocidade — marcas registradas da FURIA!"
  },
  {
    question: "FURIA tem time em esportes tradicionais?",
    response: "♟️ Sim! Além dos jogos eletrônicos, a FURIA investe em xadrez com grandes nomes como Krikor Mekhitarian."
  },
  {
    question: "O que é a FURIA Academy?",
    response: "🌱 A FURIA Academy é o projeto para desenvolver novos talentos no CS2 e outros games!"
  },
  {
    question: "Qual a frase famosa do FalleN?",
    response: "🎤 'Yes, we can!' — frase histórica do FalleN que marcou gerações no CS!"
  },
  {
    question: "Qual foi a primeira vez da FURIA em um Major?",
    response: "🎯 A estreia da FURIA em Majors foi no StarLadder Berlin Major 2019, conquistando o Top 8!"
  },
  {
    question: "Conte um momento histórico da FURIA no CSGO",
    response: "🔥 No IEM Rio Major 2022, a FURIA derrotou a Na'Vi nas quartas com o apoio enlouquecedor da torcida brasileira, chegando às semifinais em casa! Um dos momentos mais épicos do CS brasileiro!"
  },
  {
    question: "Conte outro momento histórico da FURIA",
    response: "🌟 No StarLadder Berlin Major 2019, a FURIA chocou o mundo ao alcançar o top 8, colocando o Brasil novamente em destaque no cenário internacional!"
  },
  {
    question: "Qual foi a primeira grande conquista da FURIA?",
    response: "🏆 O título da DreamHack Open Summer 2020 NA foi a primeira grande conquista internacional da FURIA, com uma campanha dominante!"
  },
  {
    question: "Quando FalleN estreou na FURIA?",
    response: "👑 FalleN estreou na FURIA em 2023, trazendo toda sua experiência e liderança para a nova geração!"
  }
];

export default botResponses;
