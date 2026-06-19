export interface Photo {
  alt: string;
  url: string;
}

export const photos: Photo[] = [
  { alt: "Dedo de Deus - Parque Nacional da Serra dos Órgãos", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dedo_de_Deus_-_Parque_Nacional_da_Serra_dos_%C3%93rg%C3%A3os_-_Teres%C3%B3polis_-_Rio_de_Janeiro_-_Brasil_02.jpg" },
  { alt: "Rio Paquequer dentro do PARNASO", url: "https://commons.wikimedia.org/wiki/Special:FilePath/ParqueOrgaos-Paquequer.jpg" },
  { alt: "Belvedere Teresópolis - vista da Serra dos Órgãos", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Belvedere_Teres%C3%B3polis,_vista_da_Serra_dos_Org%C3%A3os.jpg" },
  { alt: "Mirante do Soberbo - Dedo de Deus", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Soberbo_-_Teres%C3%B3polis_RJ.jpg" },
  { alt: "Amanhecer no Hércules - Dedo de Deus", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Amanhecer_no_Hercules_--.jpg" },
  { alt: "Dedo de Deus visto do Mirante do Soberbo", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Teres%C3%B3polis_RJ_Brasil_-_Dedo_de_Deus_visto_do_Mirante_do_Soberbo_-_panoramio.jpg" },
  { alt: "Pico do Dedo de Deus", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pico_do_Dedo_de_Deus.JPG" },
  { alt: "Dedo de Deus - Teresópolis", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dedo_de_Deus_Serra_Teres%C3%B3polis_RJ.jpg" },
  { alt: "Palácio de Cristal - Petrópolis", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Crystal_Palace,_Petr%C3%B3polis.JPG" },
  { alt: "Museu Imperial - Petrópolis", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Museu_Imperial_-_Petr%C3%B3polis.jpg" },
  { alt: "Catedral de Petrópolis", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cathedral_of_Petr%C3%B3polis,_Brazil.jpg" },
  { alt: "Museu Imperial de Petrópolis - vista frontal", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Museu_Imperial_de_Petr%C3%B3polis,_Rio_de_Janeiro,_em_dia_de_visita%C3%A7%C3%A3o.jpg" },
  { alt: "Feirinha do Alto - Teresópolis", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Feirinha_do_Alto,_Teres%C3%B3polis.JPG" },
  { alt: "Parque Country Club - Nova Friburgo", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Parque_Country_Club_Nova_Friburgo.jpg" },
  { alt: "Parque dos Três Picos visto da Pedra do Sino", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Teres%C3%B3polis_RJ_Brasil_-_Parque_dos_Tres_Picos_em_Nova_Friburgo,_vista_da_Pedra_do_Sino_-_panoramio.jpg" },
  { alt: "Palacete da Princesa Isabel - Petrópolis", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Palacete_da_Princesa_Isabel_(2).jpg" },
];

export function pickRandomPhotos(count: number): Photo[] {
  const shuffled = [...photos].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
