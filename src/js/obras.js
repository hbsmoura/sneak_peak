const obras = [
    {
        "id": "ff001",
        "titulo": "Liga da Justiça de Zack Snyder",
        "tipo": "filme",
        "segmento": "ficcional",        
        "duracao": "4h02m",
        "lancamento": 2021,
        "ultimaEdicao": 2021,
        "direcao": "Zack Snyder",
        "pais": "USA",
        "nota": 84,
        "descricao": "Determinado a garantir que o sacrifício final do Superman não foi em vão, Bruce Wayne alinha forças com Diana Prince com planos de recrutar uma equipe de metahumanos para proteger o mundo de uma ameaça de proporções catastróficas que se aproxima.",
        "categoria": ["Ação", "Aventura", "Fantasia", "Sci-Fi"],
        "partes": ["https://www.youtube.com/embed/jt3-3LtSj6c"]
    },

    {
        "id": "sf001",
        "titulo": "House of Cards",
        "tipo": "série",
        "segmento": "ficcional",        
        "duracao": "50m",
        "lancamento": 2013,
        "ultimaEdicao": 2019,
        "direcao": "Beau Willimon",
        "pais": "USA",
        "nota": 81,
        "descricao": "Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.",
        "categoria": ["Drama", "Política"],
        "partes": ["https://www.youtube.com/embed/SvSkxBYuoQY", "https://www.youtube.com/embed/gBabKoHSErI", "https://www.youtube.com/embed/GBsV8IiQ0jw", "https://www.youtube.com/embed/NTzycsqxYJ0", "https://www.youtube.com/embed/N0LTNe7sR_Q", "https://www.youtube.com/embed/kasvV-XyzqU"]
    },

    {
        "id": "sf002",
        "titulo": "Diários de um Vampiro",
        "tipo": "série",
        "segmento": "ficcional",        
        "duracao": "43m",
        "lancamento": 2009,
        "ultimaEdicao": 2016,
        "direcao": "Kevin Williamson & Julie Plec",
        "pais": "USA",
        "nota": 83,
        "descricao": "Elena tenta sobreviver entre os seres sobrenaturais que vivem em segredo. Ela se apaixona pelo misterioso Stefan, mas o retorno do seu irmão, Damon, ameaça essa paixão.",
        "categoria": ["Sci-Fi", "Drama", "Fantasia"],
        "partes": ["https://www.youtube.com/embed/BmVmhjjkN4E", "https://www.youtube.com/embed/tQPB53ti3LQ", "https://www.youtube.com/embed/vsUeZHGIHlU", "https://www.youtube.com/embed/cbixkXJZmHQ", "https://www.youtube.com/embed/Svy8b0kBEE8", "https://www.youtube.com/embed/7lx_OePXzh0", "https://www.youtube.com/embed/zJo26KSG0co", "https://www.youtube.com/embed/T80g0HaB1qw"]
    },

    {
        "id": "ff002",
        "titulo": "Velozes & Furiosos 9",
        "tipo": "filme",
        "segmento": "ficcional",        
        "duracao": "2h25m",
        "lancamento": 2021,
        "ultimaEdicao": 2021,
        "direcao": "Justin Lin",
        "pais": "USA",
        "nota": 78,
        "descricao": "Dominic Toretto e sua família precisam enfrentar o seu irmão mais novo Jakob, um assassino mortal que está trabalhando com uma antiga inimiga, a cyber-terrorista Cipher.", 
        "categoria": ["Crime", "Ação", "Thriller"],
        "partes": ["https://www.youtube.com/embed/NnDGWyfP7q4"]
    },

    {
        "id": "fd001",
        "titulo": "Marielle: O Documentário",
        "tipo": "filme",
        "segmento": "documental",        
        "duracao": "1h",
        "lancamento": 2020,
        "ultimaEdicao": 2020,
        "direcao": "Caio Cavechini & Eliane Scarvodelli",
        "pais": "Brasil",
        "nota": 60,
        "descricao": "Na noite de 14 de março de 2018, Marielle Franco e o motorista Anderson Gomes foram assassinados. Dois anos depois, os mandantes do crime ainda não foram identificados.", 
        "categoria": ["Crime", "Política"],
        "partes": ["https://www.youtube.com/embed/juZgnUsSJKA"]
    },

    {
        "id": "sd001",
        "titulo": "Cosmos",
        "tipo": "série",
        "segmento": "documental",        
        "duracao": "1h",
        "lancamento": 2014,
        "ultimaEdicao": 2014,
        "direcao": "Ann Druyan & Steven Soter",
        "pais": "USA",
        "nota": 83,
        "descricao": "Uma aventura que se estende por bilhões de anos na evolução da vida e da consciência. Uma visita a um laboratório de 100 mil anos de idade. A história da mudança no estilo de vida que alterou radicalmente a existência humana e a vida do herege que encontrou Deus no livro da natureza, abrindo caminho para as estrelas.", 
        "categoria": ["Ciência", "Espaço", "Natureza"],
        "partes": ["https://www.youtube.com/embed/Fm4UV5_HsPA", "https://www.youtube.com/embed/QoNSU9o6464", "https://www.youtube.com/embed/ghZ5gsr6MAk"]
    },

    {
        "id": "sd002",
        "titulo": "A Perfect Planet",
        "tipo": "série",
        "segmento": "documental",        
        "duracao": "44m",
        "lancamento": 2021,
        "ultimaEdicao": 2021,
        "direcao": "",
        "pais": "Reino Unido",
        "nota": 93,
        "descricao": "Uma fusão única de história natural e ciência da terra que explica como nosso planeta vivo opera. Esta série de cinco partes mostra como as forças da natureza impulsionam, moldam e apóiam a grande diversidade de vida selvagem da Terra.", 
        "categoria": ["Natureza"],
        "partes": ["https://www.youtube.com/embed/635uup08DLU"]
    },

    {
        "id": "fd002",
        "titulo": "Loki - Arnaldo Baptista",
        "tipo": "filme",
        "segmento": "documental",        
        "duracao": "2h",
        "lancamento": 2008,
        "ultimaEdicao": 2008,
        "direcao": "Paulo Henrique Fontenelle",
        "pais": "Brasil",
        "nota": 69,
        "descricao": "Loki brings the trajectory of Arnaldo Baptista from childhood, passing through the most successful phase as leader of the Mutantes, marriage to singer Rita Lee and then separation. He also goes through the depression that devastated his life after the group ended and that led him to attempt suicide, his solo career, rapprochement with his brother and member of the Mutantes, Sérgio Dias, culminating in the band's return in 2006.", 
        "categoria": ["Música"],
        "partes": ["https://www.youtube.com/embed/pj6U26Rg7Xw"]
    },

    {
        "id": "ff003",
        "titulo": "Major Grom Contra o Dr. Peste",
        "tipo": "filme",
        "segmento": "ficcional",        
        "duracao": "2h16m",
        "lancamento": 2021,
        "ultimaEdicao": 2021,
        "direcao": "Oleg Trofim",
        "pais": "Rússia",
        "nota": 69,
        "descricao": "Um assassino mascarado aterroriza a cidade. Agora um detetive rebelde e seu parceiro novato são os únicos que podem resolver o problema.", 
        "categoria": ["Ação", "Aventura"],
        "partes": ["https://www.youtube.com/embed/uiBiL0ZVLoM"]
    },

    {
        "id": "ff004",
        "titulo": "O Esquadrão Suicida",
        "tipo": "filme",
        "segmento": "ficcional",        
        "duracao": "2h12m",
        "lancamento": 2021,
        "ultimaEdicao": 2021,
        "direcao": "James Gunn",
        "pais": "USA",
        "nota": 82,
        "descricao": "Os supervilões Harley Quinn (Margot Robbie), Bloodsport (Idris Elba), Peacemaker (John Cena) e uma coleção de malucos condenados da prisão de Belle Reve juntam-se à super-secreta e super-obscura Força Tarefa X, enquanto são deixados na remota ilha de Corto Maltese para combater o inimigo.", 
        "categoria": ["Ação", "Aventura", "Comédia", "Sci-Fi"],
        "partes": ["https://www.youtube.com/embed/h6bWwRCtg28"]
    },

    {
        "id": "sf003",
        "titulo": "Lúcifer",
        "tipo": "série",
        "segmento": "ficcional",        
        "duracao": "45m",
        "lancamento": 2016,
        "ultimaEdicao": 2021,
        "direcao": "Tom Kapinos",
        "pais": "USA",
        "nota": 85,
        "descricao": "Entediado com a vida nas trevas, o diabo se muda para Los Angeles, abre um piano-bar e empresta sua sabedoria a uma investigadora de assassinatos.",
        "categoria": ["Sci-Fi", "Crime", "Fantasia"],
        "partes": ["https://www.youtube.com/embed/pDBatKGEtWM", "https://www.youtube.com/embed/j_uuBS8w6jA", "https://www.youtube.com/embed/F9Ldm096jAU", "https://www.youtube.com/embed/IGKShjoRV3Q", "https://www.youtube.com/embed/NcnK3C5W7SI"]
    },

    {
        "id": "sf004",
        "titulo": "Falcão e o Soldado Invernal",
        "tipo": "série",
        "segmento": "ficcional",        
        "duracao": "50m",
        "lancamento": 2021,
        "ultimaEdicao": 2021,
        "direcao": "Malcolm Spellman",
        "pais": "USA",
        "nota": 78,
        "descricao": "Após os eventos de \"Vingadores: Ultimato\", Sam Wilson/Falcão e Bucky Barnes/Soldado Invernal se unem em uma aventura que testa suas habilidades - e a paciência.",
        "categoria": ["Sci-Fi", "Ação", "Aventura", "Drama", "Guerra", "Política"],
        "partes": ["https://www.youtube.com/embed/ZHaokMTWgdY"]
    },

    {
        "id": "ff005",
        "titulo": "Halloween - A Noite do Terror",
        "tipo": "filme",
        "segmento": "ficcional",        
        "duracao": "1h31m",
        "lancamento": 1978,
        "ultimaEdicao": 1978,
        "direcao": "John Carpenter",
        "pais": "USA",
        "nota": 76,
        "descricao": "Na noite de Halloween de 1963, Michael Myers, de seis anos, assassina brutalmente sua irmã. Preso em uma instituição para doentes mentais sob os cuidados do dr. Sam Loomis, Michael cresce apenas para odiar. Em outubro de 1978, ele foge do hospital, seguido pelo dr. Loomis, que sabe que Michael vai matar novamente. O psicopata passa a perseguir a adolescente Laurie Strode e seus amigos, e prepara seu ataque mortal para a noite de Halloween.",
        "categoria": ["Terror", "Thriller"],
        "partes": ["https://www.youtube.com/embed/fQNtP45pHMI"]
    },

    {
        "id": "ff006",
        "titulo": "Pagando Bem, Que Mal Tem?",
        "tipo": "filme",
        "segmento": "ficcional",        
        "duracao": "1h42m",
        "lancamento": 2008,
        "ultimaEdicao": 2008,
        "direcao": "Kevin Smith",
        "pais": "USA",
        "nota": 62,
        "descricao": "Zack Brown (Seth Rogen) e Miriam Linky (Elizabeth Banks) são amigos há muito tempo, sendo que atualmente dividem uma casa e possuem diversas dívidas. Após terem a água e a luz cortadas, eles resolvem fazer um filme pornô caseiro para conseguir algum dinheiro. Desta forma selecionam alguns amigos para ajudá-los, jurando que o sexo não irá prejudicar a amizade existente. Só que, quando as gravações começam, o negócio se torna algo bem maior do que imaginavam.",
        "categoria": ["Comédia"],
        "partes": ["https://www.youtube.com/embed/fxKykljP0gs"]
    },

    {
        "id": "ff007",
        "titulo": "Expresso do Amanhã",
        "tipo": "filme",
        "segmento": "ficcional",        
        "duracao": "2h05m",
        "lancamento": 2013,
        "ultimaEdicao": 2013,
        "direcao": "Bong Joon-ho",
        "pais": "USA",
        "nota": 62,
        "descricao": "Em um mundo pós-apocalíptico, uma nova onda de gelo causada por um experimento sem sucesso quase exterminou a vida na Terra. Os sobreviventes vivem em um trem máquina chamado Snowpiercer que separa os passageiros por classes sociais, mas nem todos estão satisfeitos com essa divisão.",
        "categoria": ["Ação", "Sci-Fi", "Drama"],
        "partes": ["https://www.youtube.com/embed/x4lzz3Fvsc4"]
    },

    {
        "id": "sf005",
        "titulo": "Miraculous: As Aventuras de LadyBug",
        "tipo": "série",
        "segmento": "ficcional",        
        "duracao": "26m",
        "lancamento": 2015,
        "ultimaEdicao": 2021,
        "direcao": "Thomas Astruc",
        "pais": "USA",
        "nota": 79,
        "descricao": "Ladybug é uma heroína que tem a missão de defender Paris de um vilão misterioso. Junto com o parceiro Cat Noir, eles devem conciliar o dia a dia com a vida de super-heróis.",
        "categoria": ["Ação", "Aventura", "Animação", "Kids"],
        "partes": ["https://www.youtube.com/embed/y5SJ7pUtOfY", "https://www.youtube.com/embed/BtgsZH7jIxA", "https://www.youtube.com/embed/zfmWIeziPNU", "https://www.youtube.com/embed/7GH1-Zo0T1Y"]
    },

    {
        "id": "sf006",
        "titulo": "Peaky Blinders: Sangue, Apostas e Navalhas",
        "tipo": "série",
        "segmento": "ficcional",        
        "duracao": "1h",
        "lancamento": 2013,
        "ultimaEdicao": 2019,
        "direcao": "Steven Knight",
        "pais": "Reino Unido",
        "nota": 86,
        "descricao": "Thomas Shelby e seus irmãos retornam a Birmingham depois de servir no exército britânico durante a Primeira Guerra Mundial. Os Peaky Blinders, a gangue na qual Thomas é líder, controlam a cidade de Birmingham. Mas, como as ambições de Shelby se estendem para além de Birmingham, ele planeja construir o império de negócios que criou e impedir qualquer um que atrapalhar.",
        "categoria": ["Ação", "Crime", "Drama"],
        "partes": ["https://www.youtube.com/embed/oVzVdvGIC7U", "https://www.youtube.com/embed/uIJ07Wg5i0k", "https://www.youtube.com/embed/t5D4-nTAWLY", "https://www.youtube.com/embed/whgdkjDJAjg", "https://www.youtube.com/embed/Uv8bfaxl9j4"]
    },

    {
        "id": "sf007",
        "titulo": "Game of Thrones",
        "tipo": "série",
        "segmento": "ficcional",        
        "duracao": "1h",
        "lancamento": 2011,
        "ultimaEdicao": 2019,
        "direcao": "David Benioff & D. B. Weisst",
        "pais": "Reino Unido",
        "nota": 84,
        "descricao": "Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.",
        "categoria": ["Sci-Fi", "Fantasia", "Drama", "Ação", "Aventura"],
        "partes": ["https://www.youtube.com/embed/bjqEWgDVPe0", "https://www.youtube.com/embed/AlhHGUfCYw4", "https://www.youtube.com/embed/nblUgAMoOvU", "https://www.youtube.com/embed/xZY43QSx3Fk", "https://www.youtube.com/embed/R5yPXKOlVHo", "https://www.youtube.com/embed/zjiM6PDQJi8", "https://www.youtube.com/embed/giYeaKsXnsI", "https://www.youtube.com/embed/rlR4PJn8b8I"]
    },

    {
        "id": "sf008",
        "titulo": "Dr. House",
        "tipo": "série",
        "segmento": "ficcional",        
        "duracao": "44m",
        "lancamento": 2004,
        "ultimaEdicao": 2011,
        "direcao": "David Shore",
        "pais": "USA",
        "nota": 86,
        "descricao": "Um médico dissidente e anti-social, que se especializou em medicina de diagnóstico. Faz o que for preciso para resolver casos intrigantes que estão no seu caminho, usando a sua equipe de médicos e sua inteligência.",
        "categoria": ["Comédia", "Mistério", "Drama"],
        "partes": ["https://www.youtube.com/embed/MczMB8nU1sY", "https://www.youtube.com/embed/NlOaNTGFWk0", "https://www.youtube.com/embed/0AiLeNVtFtU", "https://www.youtube.com/embed/6nPBjaxA-TA", "https://www.youtube.com/embed/X_N0ZukXJm0", "https://www.youtube.com/embed/x6IB-gqdC8s", "https://www.youtube.com/embed/M5SHM4QKhI8", "https://www.youtube.com/embed/egF9z9tsKuM"]
    },

    {
        "id": "sf009",
        "titulo": "Vikings",
        "tipo": "série",
        "segmento": "ficcional",        
        "duracao": "44m",
        "lancamento": 2013,
        "ultimaEdicao": 2019,
        "direcao": "Michael Hirst",
        "pais": "Irlanda",
        "nota": 80,
        "descricao": "Ragnar Lothbrok, um jovem que se considera descendente de Odin, é um guerreiro, fazendeiro e chefe de família.",
        "categoria": ["Drama", "História", "Ação", "Aventura", "Guerra"],
        "partes": ["https://www.youtube.com/embed/9GgxinPwAGc", "https://www.youtube.com/embed/x6rLjCrA5QQ", "https://www.youtube.com/embed/lE6YTts8cgY", "https://www.youtube.com/embed/G3DwTh_aPKw", "https://www.youtube.com/embed/s28cBkmoVIk", "https://www.youtube.com/embed/Y7d0A5re7-0"]
    },

    {
        "id": "fd003",
        "titulo": "Dublê de Risco",
        "tipo": "filme",
        "segmento": "documental",        
        "duracao": "1h24m",
        "lancamento": 2018,
        "ultimaEdicao": 2018,
        "direcao": "Kurt Mattila",
        "pais": "USA",
        "nota": 59,
        "descricao": "Segue o lendário dublê Eddie Braun enquanto ele tenta uma das acrobacias mais perigosas da história. Contemplando a aposentadoria e tendo sobrevivido a mais de três décadas de terríveis acidentes de carro, explosões, quedas e saltos que desafiam a morte, Eddie decide completar o que seu herói de infância nunca terminou - o infame salto de foguete do Snake River Canyon - um evento audacioso na televisão que quase matou o audacioso, Evel Knievel.",
        "categoria": [],
        "partes": ["https://www.youtube.com/embed/LqKsTnYKOho"]
    },

    {
        "id": "fd004",
        "titulo": "Curse of the Blair Witch",
        "tipo": "filme",
        "segmento": "documental",        
        "duracao": "44m",
        "lancamento": 1999,
        "ultimaEdicao": 1999,
        "direcao": "Eduardo Sánchez & Daniel Myrick & Ben Rock",
        "pais": "USA",
        "nota": 64,
        "descricao": "Curse of the Blair Witch is a documentary about the Blair Witch legend and the three filmmakers who disappeared in October of 1999. It first aired on the Sci-Fi Channel on July 11, 1999 as a promotional prelude to the release of The Blair Witch Project on July 30, 1999.",
        "categoria": ["Terror", "Thriller"],
        "partes": ["https://www.youtube.com/embed/i3f-WB04Vko"]
    },

    {
        "id": "fd005",
        "titulo": "Pelé",
        "tipo": "filme",
        "segmento": "documental",        
        "duracao": "1h48m",
        "lancamento": 2021,
        "ultimaEdicao": 2021,
        "direcao": "Ben Nicholas & David Tryhorn",
        "pais": "Brasil",
        "nota": 75,
        "descricao": "Documentário que retrata a vida de Pelé, da busca pela perfeição à condição de mito. Abrangendo um extraordinário período de 12 anos, a produção mostra como o único jogador a vencer três Copas do Mundo passou de astro do futebol em 1958 a herói nacional em 1970, uma época radical e turbulenta no Brasil.",
        "categoria": ["Esporte"],
        "partes": ["https://www.youtube.com/embed/GS0dFi63Nzg"]
    },

    {
        "id": "fd006",
        "titulo": "Amy",
        "tipo": "filme",
        "segmento": "documental",        
        "duracao": "2h8m",
        "lancamento": 2015,
        "ultimaEdicao": 2015,
        "direcao": "Asif Kapadia",
        "pais": "USA",
        "nota": 81,
        "descricao": "Ainda adolescente, Amy Winehouse já demonstrava para a família o talento vocal que possuía. Aos 18 anos ela já fazia shows na Inglaterra e, com o tempo, passou a ganhar fama. O sucesso do álbum \"Back to Black\" a tornou uma celebridade mundial, mas também fez com que seus problemas com álcool e drogas aumentassem exponencialmente.",
        "categoria": ["Música"],
        "partes": ["https://www.youtube.com/embed/_2yCIwmNuLE"]
    },

    {
        "id": "sd003",
        "titulo": "Segredos do Fundo do Mar",
        "tipo": "série",
        "segmento": "documental",        
        "duracao": "47m",
        "lancamento": 2018,
        "ultimaEdicao": 2021,
        "direcao": "",
        "pais": "USA",
        "nota": 80,
        "descricao": "Conheça alguns mistérios marítimos, novos e antigos. Eles ganham vida com dados científicos e recriações para revelar naufrágios, tesouros e cidades afundadas no fundo de lagos, mares e oceanos ao redor do mundo.",
        "categoria": ["Natureza", "Ciência"],
        "partes": ["https://www.youtube.com/embed/QYyJaItITx8", "https://www.youtube.com/embed/1IW8oZbdb_U"]
    },

    {
        "id": "sd004",
        "titulo": "We Are the Champions",
        "tipo": "série",
        "segmento": "documental",        
        "duracao": "30m",
        "lancamento": 2020,
        "ultimaEdicao": 2020,
        "direcao": "",
        "pais": "Reino Unido",
        "nota": 50,
        "descricao": "Explore the quirkiest, most charming, and oddly inspirational competitions you never knew existed, and the determined, passionate, and incredibly skilled competitors who put it all on the line to become heroes in their own extraordinary worlds.",
        "categoria": ["Life Style"],
        "partes": ["https://www.youtube.com/embed/ePFl4iWzVow"]
    },

    {
        "id": "ff008",
        "titulo": "Bacurau",
        "tipo": "filme",
        "segmento": "ficcional",        
        "duracao": "2h11m",
        "lancamento": 2019,
        "ultimaEdicao": 2019,
        "direcao": "Kleber Mendonça Filho & Juliano Dornelles",
        "pais": "Brasil",
        "nota": 79,
        "descricao": "Num futuro recente, Bacurau, um povoado do sertão de Pernambuco, some misteriosamente do mapa. Quando uma série de assassinatos inexplicáveis começam a acontecer, os moradores da cidade tentam reagir. Mas como se defender de um inimigo desconhecido e implacável?",
        "categoria": ["Mistério", "Faroeste", "Thriller"],
        "partes": ["https://www.youtube.com/embed/qlheaoLnewE"]
    },

    {
        "id": "ff009",
        "titulo": "Central do Brasil",
        "tipo": "filme",
        "segmento": "ficcional",        
        "duracao": "1h50m",
        "lancamento": 1998,
        "ultimaEdicao": 1998,
        "direcao": "Walter Salles",
        "pais": "Brasil",
        "nota": 82,
        "descricao": "Dora escreve cartas para analfabetos na estação Central do Brasil. Uma das clientes de Dora é Ana, que vem escrever uma carta com o seu filho, Josué, um garoto de nove anos, que sonha encontrar o pai que nunca conheceu. Na saída da estação, Ana é atropelada e Josué fica abandonado. Mesmo a contragosto, Dora acaba acolhendo o menino e envolvendo-se com ele. Termina por levar Josué para o interior do Nordeste, à procura do pai. À medida em que vão entrando país adentro, esses dois personagens, tão diferentes, vão se aproximando... Começa então uma viagem fascinate ao coração do Brasil, à procura do pai desaparecido, e uma viagem profundamente emotiva ao coração de cada um dos personagens do filme.",
        "categoria": ["Drama"],
        "partes": ["https://www.youtube.com/embed/lARFBFxjLNI"]
    },

    {
        "id": "sd005",
        "titulo": "Você Nunca Esteve Sozinha: O Doc de Juliette",
        "tipo": "série",
        "segmento": "documental",        
        "duracao": "35m",
        "lancamento": 2001,
        "ultimaEdicao": 2001,
        "direcao": "",
        "pais": "Brasil",
        "nota": 67,
        "descricao": "100 dias de BBB e o Brasil caiu de amores por Juliette. Quem é essa mulher? O que no seu passado projeta o fenômeno que ela se tornou? Os bastidores da fama e os próximos passos.",
        "categoria": ["Fama"],
        "partes": ["https://www.youtube.com/embed/nfjV3mlbaM4"]
    },

    {
        "id": "sd006",
        "titulo": "Até o Fim - Flamengo Campeão da Libertadores 2019",
        "tipo": "série",
        "segmento": "documental",        
        "duracao": "42m",
        "lancamento": 2019,
        "ultimaEdicao": 2019,
        "direcao": "",
        "pais": "Brasil",
        "nota": 100,
        "descricao": "Bastidores inéditos e a saga até a final. A preparação, as viagens, a tensão e a festa nos vestiários, além de entrevistas exclusivas com os personagens do título.",
        "categoria": ["Esporte"],
        "partes": ["https://www.youtube.com/embed/rnci6nD6Yo8"]
    }
]
