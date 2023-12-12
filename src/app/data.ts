// Array para armazenar os objetos dos pontos turísticos
const lugares: any[] = [];

// Dia 1
lugares.push(
  {
    name: 'Praça Camões',
    city: 'Lisboa',
    summary: 'Comece o dia no Chiado, um dos bairros mais elegantes de Lisboa.',
    reasons:
      'Grandes edifícios, livrarias clássicas, teatros monumentais, lojas chiques.',
    mapLink: 'Link do mapa da Praça Camões aqui',
    photos: ['Link para fotos'],
    lat: 38.7104,
    lng: -9.1402,
    timeOfDay: 'Manhã',
  },
  {
    name: 'Convento do Carmo',
    city: 'Lisboa',
    summary: 'Explore o museu ao ar livre com arcos e pilares.',
    reasons: 'Remanescentes do terremoto de 1755, museu de arqueologia.',
    mapLink: 'Link do mapa do Convento do Carmo aqui',
    photos: ['Link para fotos'],
    lat: 38.7119,
    lng: -9.1405,
    timeOfDay: 'Manhã',
  },
  {
    name: 'Igreja de São Roque',
    city: 'Lisboa',
    summary:
      'Visite a igreja deslumbrante com ouro, mármore e azulejos pintados à mão.',
    reasons: 'Interior rico, arquitetura deslumbrante.',
    mapLink: 'Link do mapa da Igreja de São Roque aqui',
    photos: ['Link para fotos'],
    lat: 38.7106,
    lng: -9.1406,
    timeOfDay: 'Manhã',
  },
  {
    name: 'Miradouro de São Pedro de Alcântara',
    city: 'Lisboa',
    summary:
      'Desfrute de vistas panorâmicas sobre a cidade e o Castelo de São Jorge.',
    reasons: 'Belvedere bonito, jardins, esculturas.',
    mapLink: 'Link do mapa do Miradouro de São Pedro de Alcântara aqui',
    photos: ['Link para fotos'],
    lat: 38.7161,
    lng: -9.144,
    timeOfDay: 'Manhã',
  },
  {
    name: 'Rua Dom Pedro V',
    city: 'Lisboa',
    summary: 'Explore a área com uma melhor seleção de restaurantes.',
    reasons: 'Comida portuguesa clássica, restaurante Faz Frio.',
    mapLink: 'Link do mapa da Rua Dom Pedro V aqui',
    photos: ['Link para fotos'],
    lat: 38.7167,
    lng: -9.1436,
    timeOfDay: 'Tarde',
  },
  {
    name: 'Estação de Trem do Rossio',
    city: 'Lisboa',
    summary: 'Admire a fachada exuberante da estação de trem do Rossio.',
    reasons: 'Arquitetura histórica, localização central.',
    mapLink: 'Link do mapa da Estação de Trem do Rossio aqui',
    photos: ['Link para fotos'],
    lat: 38.7146,
    lng: -9.1389,
    timeOfDay: 'Tarde',
  },
  {
    name: 'Praça do Comércio',
    city: 'Lisboa',
    summary: 'Entrada régia na maior praça da Europa.',
    reasons: 'Arco impressionante, significado histórico.',
    mapLink: 'Link do mapa da Praça do Comércio aqui',
    photos: ['Link para fotos'],
    lat: 38.7076,
    lng: -9.1368,
    timeOfDay: 'Tarde',
  },
  {
    name: 'Alfama',
    city: 'Lisboa',
    summary:
      'Explore um dos bairros mais antigos de Lisboa com ruínas romanas e herança mourisca.',
    reasons: 'Becos medievais, catedral da Sé, Miradouro de Santa Luzia.',
    mapLink: 'Link do mapa de Alfama aqui',
    photos: ['Link para fotos'],
    lat: 38.7119,
    lng: -9.1254,
    timeOfDay: 'Tarde',
  },
  {
    name: 'Miradouro da Senhora do Monte',
    city: 'Lisboa',
    summary: 'Desfrute de vistas panorâmicas sobre a cidade.',
    reasons: 'Ponto mais alto, vistas panorâmicas.',
    mapLink: 'Link do mapa do Miradouro da Senhora do Monte aqui',
    photos: ['Link para fotos'],
    lat: 38.723,
    lng: -9.1275,
    timeOfDay: 'Noite',
  },
  {
    name: 'Sant’Avó',
    city: 'Lisboa',
    summary:
      'Termine o dia com especialidades regionais portuguesas fantásticas.',
    reasons: 'Atmosfera acolhedora, ambiente não turístico.',
    mapLink: 'Link do mapa do Sant’Avó aqui',
    photos: ['Link para fotos'],
    lat: 38.7227,
    lng: -9.1283,
    timeOfDay: 'Noite',
  }
);

// Dia 2
lugares.push(
  {
    name: 'Mosteiro dos Jerónimos',
    city: 'Lisboa',
    summary: 'Visite o Patrimônio Mundial da UNESCO.',
    reasons: 'Arquitetura manuelina, túmulo de Vasco da Gama.',
    mapLink: 'Link do mapa do Mosteiro dos Jerónimos aqui',
    photos: ['Link para fotos'],
    lat: 38.6977,
    lng: -9.206,
    timeOfDay: 'Manhã',
  },
  {
    name: 'Clube Naval de Lisboa',
    city: 'Lisboa',
    summary:
      'Desfrute de peixe grelhado ou um prato clássico de frutos do mar à beira-rio.',
    reasons: 'Popular entre as famílias portuguesas, vista para o rio.',
    mapLink: 'Link do mapa do Clube Naval de Lisboa aqui',
    photos: ['Link para fotos'],
    lat: 38.6938,
    lng: -9.2069,
    timeOfDay: 'Tarde',
  },
  {
    name: 'Torre de Belém',
    city: 'Lisboa',
    summary:
      'Explore o símbolo da grandiosa Era dos Descobrimentos de Portugal.',
    reasons: 'Significado histórico, localização à beira-mar.',
    mapLink: 'Link do mapa da Torre de Belém aqui',
    photos: ['Link para fotos'],
    lat: 38.6916,
    lng: -9.2163,
    timeOfDay: 'Tarde',
  },
  {
    name: 'MAAT - Museu de Arte, Arquitetura e Tecnologia',
    city: 'Lisboa',
    summary:
      'Descubra a arquitetura contemporânea e desfrute de vistas panorâmicas.',
    reasons: 'Design inspirado em ondas, panorama da ponte 25 de Abril.',
    mapLink: 'Link do mapa do MAAT aqui',
    photos: ['Link para fotos'],
    lat: 38.6976,
    lng: -9.2069,
    timeOfDay: 'Tarde',
  },
  {
    name: 'Agulha no Palheiro',
    city: 'Lisboa',
    summary:
      'Desfrute de uma refeição aconchegante com comida deliciosa e excelente seleção de vinhos.',
    reasons: 'Atmosfera acolhedora, extensa seleção de vinhos.',
    mapLink: 'Link do mapa do Agulha no Palheiro aqui',
    photos: ['Link para fotos'],
    lat: 38.698,
    lng: -9.2047,
    timeOfDay: 'Noite',
  }
);

// Dia 3
lugares.push(
  {
    name: 'Milfontes',
    city: 'Milfontes',
    summary:
      'Desfrute de um almoço descontraído e explore a encantadora costa do Alentejo.',
    reasons: 'Centro histórico branco, vistas para o mar.',
    mapLink: 'Link do mapa de Vila Nova de Milfontes aqui',
    photos: ['Link para fotos'],
    lat: 37.7224,
    lng: -8.7949,
    timeOfDay: 'Manhã',
  },
  {
    name: 'Porto das Barcas',
    city: 'Milfontes',
    summary: 'Almoce com vistas deslumbrantes sobre a dramática costa.',
    reasons: 'Especialidades de frutos do mar, vistas para o mar.',
    mapLink: 'Link do mapa do Porto das Barcas aqui',
    photos: ['Link para fotos'],
    lat: 37.72,
    lng: -8.8005,
    timeOfDay: 'Tarde',
  },
  {
    name: 'Praia dos Estudantes',
    city: 'Lagos',
    summary: 'Relaxe com um copo de vinho nos bares à beira-mar ao pôr do sol.',
    reasons: 'Bares à beira-mar, vistas do pôr do sol.',
    mapLink: 'Link do mapa da Praia dos Estudantes aqui',
    photos: ['Link para fotos'],
    lat: 37.0973,
    lng: -8.6727,
    timeOfDay: 'Noite',
  }
);

// Dia 4
lugares.push(
  {
    name: 'Rua Silva Lopes',
    city: 'Lagos',
    summary: 'Explore o charmoso centro histórico com uma rica história.',
    reasons: 'Significado histórico, tour a pé gratuito.',
    mapLink: 'Link do mapa da Rua Silva Lopes aqui',
    photos: ['Link para fotos'],
    lat: 37.1048,
    lng: -8.675,
    timeOfDay: 'Manhã',
  },
  {
    name: 'Praia do Camilo',
    city: 'Lagos',
    summary:
      'Visite uma das deslumbrantes praias de Lagos entre falésias e grutas.',
    reasons: 'Praia isolada, costa dramática.',
    mapLink: 'Link do mapa da Praia do Camilo aqui',
    photos: ['Link para fotos'],
    lat: 37.086,
    lng: -8.6709,
    timeOfDay: 'Tarde',
  },
  {
    name: 'Gastrobar & Garrafeira Repolho',
    city: 'Lagos',
    summary:
      'Jante num tranquilo bar de tapas com ótima comida e uma extensa seleção de vinhos.',
    reasons: 'Ambiente acolhedor, vasta seleção de vinhos.',
    mapLink: 'Link do mapa do Gastrobar & Garrafeira Repolho aqui',
    photos: ['Link para fotos'],
    lat: 37.1046,
    lng: -8.6731,
    timeOfDay: 'Noite',
  }
);

// Dia 6
lugares.push(
  {
    name: 'Évora',
    city: 'Évora',
    summary:
      'Cidade medieval bem preservada e animada, lar de uma das melhores universidades de Portugal.',
    reasons:
      'Arquitetura clássica, Templo de Diana, Catedral, Igreja de São Francisco.',
    mapLink: 'Link do mapa de Évora aqui',
    photos: ['Link para fotos'],
    lat: 38.5713,
    lng: -7.9135,
    timeOfDay: 'Manhã',
  },
  {
    name: 'Híbrido',
    city: 'Évora',
    summary:
      'Restaurante com menu criativo que combina receitas locais antigas com toques contemporâneos.',
    reasons: 'Culinária única, ambiente agradável.',
    mapLink: 'Link do mapa do Híbrido aqui',
    photos: ['Link para fotos'],
    lat: 38.5725,
    lng: -7.9078,
    timeOfDay: 'Tarde',
  },
  {
    name: 'Jardim Público',
    city: 'Évora',
    summary: 'Passeie pelos belos jardins públicos no coração da cidade.',
    reasons: 'Áreas verdes, tranquilidade.',
    mapLink: 'Link do mapa do Jardim Público aqui',
    photos: ['Link para fotos'],
    lat: 38.5738,
    lng: -7.9077,
    timeOfDay: 'Tarde',
  },
  {
    name: 'Enoteca Cartuxa',
    city: 'Évora',
    summary: 'Experimente vinhos locais na maior região vinícola de Portugal.',
    reasons: 'Degustação de vinhos, atmosfera acolhedora.',
    mapLink: 'Link do mapa da Enoteca Cartuxa aqui',
    photos: ['Link para fotos'],
    lat: 38.5749,
    lng: -7.9062,
    timeOfDay: 'Noite',
  }
  // Adicione mais lugares conforme necessário
);

// Dia 7
lugares.push(
  {
    name: 'Coimbra',
    city: 'Coimbra',
    summary:
      'Cidade histórica com uma das universidades mais antigas da Europa.',
    reasons: 'Arquitetura barroca, Biblioteca Joanina, Sé Velha.',
    mapLink: 'Link do mapa de Coimbra aqui',
    photos: ['Link para fotos'],
    lat: 40.2115,
    lng: -8.4292,
    timeOfDay: 'Manhã',
  },
  {
    name: 'Taberna Almedina',
    city: 'Coimbra',
    summary:
      'Desfrute de pratos tradicionais portugueses em um ambiente acolhedor.',
    reasons: 'Comida local, atmosfera autêntica.',
    mapLink: 'Link do mapa da Taberna Almedina aqui',
    photos: ['Link para fotos'],
    lat: 40.2073,
    lng: -8.4236,
    timeOfDay: 'Tarde',
  },
  {
    name: 'Tapas nas Costas',
    city: 'Coimbra',
    summary:
      'Experimente tapas deliciosas enquanto aproveita a vida estudantil vibrante.',
    reasons: 'Vida noturna animada, comida saborosa.',
    mapLink: 'Link do mapa do Tapas nas Costas aqui',
    photos: ['Link para fotos'],
    lat: 40.2107,
    lng: -8.4244,
    timeOfDay: 'Noite',
  }
  // Adicione mais lugares conforme necessário
);

// Dia 8
lugares.push(
  {
    name: 'Douro Valley',
    city: 'Douro Valley',
    summary: 'Faça uma viagem de carro relaxante pelo famoso Vale do Douro.',
    reasons: 'Vinhas em socalcos, Rio Douro, aldeias pitorescas.',
    mapLink: 'Link do mapa do Vale do Douro aqui',
    photos: ['Link para fotos'],
    lat: 41.1579,
    lng: -7.7874,
    timeOfDay: 'Manhã',
  },
  {
    name: 'Lamego',
    city: 'Douro Valley',
    summary:
      'Visite a encantadora cidade de Lamego com sua igreja barroca e escadaria impressionante.',
    reasons: 'Santuário de Nossa Senhora dos Remédios, vinhedos.',
    mapLink: 'Link do mapa de Lamego aqui',
    photos: ['Link para fotos'],
    lat: 41.0932,
    lng: -7.8085,
    timeOfDay: 'Tarde',
  },
  {
    name: 'Peso da Régua',
    city: 'Douro Valley',
    summary:
      'Explore a cidade às margens do Rio Douro, conhecida por sua produção de vinho do Porto.',
    reasons: 'Museu do Vinho do Porto, paisagens deslumbrantes.',
    mapLink: 'Link do mapa do Peso da Régua aqui',
    photos: ['Link para fotos'],
    lat: 41.1616,
    lng: -7.7877,
    timeOfDay: 'Tarde',
  }
  // Adicione mais lugares conforme necessário
);

// Dia 9
lugares.push(
  {
    name: 'Torre dos Clérigos',
    city: 'Porto',
    summary:
      'Obtenha vistas panorâmicas da cidade a partir da Torre dos Clérigos.',
    reasons: 'Arquitetura barroca, panorama da cidade.',
    mapLink: 'Link do mapa da Torre dos Clérigos aqui',
    photos: ['Link para fotos'],
    lat: 41.1459,
    lng: -8.6139,
    timeOfDay: 'Manhã',
  },
  {
    name: 'Livraria Lello',
    city: 'Porto',
    summary: 'Visite uma das livrarias mais bonitas do mundo.',
    reasons: 'Arquitetura única, experiência literária.',
    mapLink: 'Link do mapa da Livraria Lello aqui',
    photos: ['Link para fotos'],
    lat: 41.1472,
    lng: -8.6144,
    timeOfDay: 'Manhã',
  },
  {
    name: 'Avenida dos Aliados',
    city: 'Porto',
    summary: 'Passeie pela majestosa avenida no coração da cidade.',
    reasons: 'Arquitetura beaux-arts, atmosfera urbana.',
    mapLink: 'Link do mapa da Avenida dos Aliados aqui',
    photos: ['Link para fotos'],
    lat: 41.1486,
    lng: -8.611,
    timeOfDay: 'Tarde',
  }
  // Adicione mais lugares conforme necessário
);

// Dia 10
lugares.push(
  {
    name: 'Mercado do Bolhão',
    city: 'Porto',
    summary:
      'Explore o famoso mercado tradicional com produtos frescos e locais.',
    reasons: 'Produtos regionais, ambiente animado.',
    mapLink: 'Link do mapa do Mercado do Bolhão aqui',
    photos: ['Link para fotos'],
    lat: 41.1496,
    lng: -8.6112,
    timeOfDay: 'Manhã',
  },
  {
    name: 'Serralves',
    city: 'Porto',
    summary:
      'Descubra uma instituição cultural com jardins, museu de arte contemporânea e arquitetura única.',
    reasons: 'Arte contemporânea, arquitetura moderna.',
    mapLink: 'Link do mapa da Serralves aqui',
    photos: ['Link para fotos'],
    lat: 41.159,
    lng: -8.6564,
    timeOfDay: 'Tarde',
  },
  {
    name: 'Praia dos Ingleses',
    city: 'Porto',
    summary: 'Relaxe na praia à beira-mar na Foz do Douro.',
    reasons: 'Praia tranquila, vista para o oceano.',
    mapLink: 'Link do mapa da Praia dos Ingleses aqui',
    photos: ['Link para fotos'],
    lat: 41.1541,
    lng: -8.6743,
    timeOfDay: 'Tarde',
  }
  // Adicione mais lugares conforme necessário
);

export default lugares;
