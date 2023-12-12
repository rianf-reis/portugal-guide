/// <reference types="@types/googlemaps" />
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapService } from '../map.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageCarouselDialogComponent } from '../image-carousel-dialog/image-carousel-dialog.component';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() sights!: any[];
  map: google.maps.Map | undefined;

  focusedSight: any;
  center: any = {
    lat: 38.7223,
    lng: -9.1393,
  };
  openInfoWindows: any[] = [];
  zoom = 9;

  constructor(
    private mapService: MapService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.mapService.focusOnSight$.subscribe((sight) => {
      this.focusOnSight(sight);
    });
  }

  onMapReady(map: google.maps.Map) {
    this.map = map;
  }

  focusOnSight(sight: any): void {
    this.panToMarker(sight);
    this.zoomIn();
  }

  zoomIn() {
    const interval = setInterval(() => {
      if (this.zoom == 16) {
        clearInterval(interval);
        return;
      }

      if (this.zoom > 16) {
        this.zoom--;
      } else this.zoom++;
    }, 200);
  }

  onZoomChange(zoom: number) {
    this.zoom = zoom;
  }

  async getAllImages() {
    const a = [
      {
        name: 'Serra da Estrela',
        city: 'Guarda',
        summary:
          'Explore a deslumbrante Serra da Estrela, a montanha mais alta de Portugal continental.',
        reasons: 'Paisagens de tirar o fôlego, atividades ao ar livre.',
        mapLink: 'Link do mapa da Serra da Estrela aqui',
        photos: ['Link para fotos', 'Link para fotos', 'Link para fotos'],
        lat: 40.327,
        lng: -7.6262,
        timeOfDay: 'Dia inteiro',
        images: [
          'https://www.visitportugal.com/sites/default/files/styles/encontre_o_seu_portugal_destaque/public/mediateca/paisagem-unic%C3%A3.jpg?itok=0HIjtpjG',
          'https://cdn.visitportugal.com/img/Cordilheira-da-Estrela-02_635_375_80.jpg',
          'https://i1.wp.com/pulo-do-lobo.com/wp-content/uploads/2018/02/Seia-Portugal-Serra-da-Estrela-Vale-Rossim-lagoas-montanha-1.jpg',
        ],
      },
      {
        name: 'Viseu',
        city: 'Viseu',
        summary:
          'Visite a encantadora cidade de Viseu, conhecida pelo seu centro histórico e patrimônio cultural.',
        reasons: 'Arquitetura medieval, gastronomia regional.',
        mapLink: 'Link do mapa de Viseu aqui',
        photos: ['Link para fotos', 'Link para fotos', 'Link para fotos'],
        lat: 40.6566,
        lng: -7.9123,
        timeOfDay: 'Tarde',
        images: [
          'https://www.cm-viseu.pt/images/ImagensDestaque/VISEU-10-RAZ%C3%95ESPARAAVISITAR-GASTRONOMIA.jpg',
          'https://i.ytimg.com/vi/XoYDbRCh8mc/maxresdefault.jpg',
          'https://i.pinimg.com/originals/4a/34/6a/4a346a25ba6b60f44c7df5355d0eb69c.jpg',
        ],
      },
      {
        name: 'Aveiro',
        city: 'Aveiro',
        summary:
          'Conhecida como a "Veneza de Portugal", explore os canais e a arquitetura única de Aveiro.',
        reasons: 'Passeio de barco moliceiro, ovos moles.',
        mapLink: 'Link do mapa de Aveiro aqui',
        photos: ['Link para fotos', 'Link para fotos', 'Link para fotos'],
        lat: 40.6443,
        lng: -8.6455,
        timeOfDay: 'Tarde',
        images: [
          'https://i.ytimg.com/vi/oVeY_C5ayDc/maxresdefault.jpg',
          'https://www.portugaltravel.org/images/aveiro-tour.jpg',
          'https://cdn.visitportugal.com/img/Aveiro-Canal-da-Ria_635_375_80.jpg',
        ],
      },
      {
        name: 'Torre da Serra da Estrela',
        city: 'Guarda',
        summary:
          'Visite a Torre, o ponto mais alto da Serra da Estrela, para vistas panorâmicas deslumbrantes.',
        reasons: 'Vistas incríveis, oportunidades para caminhadas.',
        mapLink: 'Link do mapa da Torre da Serra da Estrela aqui',
        photos: ['Link para fotos'],
        lat: 40.3275,
        lng: -7.6127,
        timeOfDay: 'Manhã',
        images: [
          'https://www.infopedia.pt/$imagen/82/71782.jpg',
          'https://www.visitportugal.com/sites/default/files/styles/encontre_o_seu_portugal_destaque/public/mediateca/paisagem-unic%C3%A3.jpg?itok=0HIjtpjG',
        ],
      },
      {
        name: 'Sabores da Serra',
        city: 'Guarda',
        summary:
          'Desfrute de pratos tradicionais da região da Serra da Estrela em um ambiente acolhedor.',
        reasons: 'Gastronomia local, ambiente aconchegante.',
        mapLink: 'Link do mapa do restaurante Sabores da Serra aqui',
        photos: ['Link para fotos'],
        lat: 40.54,
        lng: -7.2682,
        timeOfDay: 'Noite',
        images: [
          'https://s3.amazonaws.com/cdn.bestrestaurants.pt/gallery/image/1/1465/MFtP5TrA.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/13/89/7b/38/photo0jpg.jpg',
        ],
      },
      {
        name: 'Restaurante O Lagar',
        city: 'Guarda',
        summary:
          'Experimente pratos regionais autênticos em um ambiente rústico e acolhedor.',
        reasons: 'Gastronomia local, atmosfera tradicional.',
        mapLink: 'Link do mapa do Restaurante O Lagar aqui',
        photos: ['Link para fotos'],
        lat: 40.5379,
        lng: -7.2716,
        timeOfDay: 'Noite',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/1b/1a/9d/24/restaurante-o-lagar.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/1b/1a/9d/2b/restaurante-o-lagar.jpg',
        ],
      },
      {
        name: 'Restaurante Solar dos Cunhas',
        city: 'Guarda',
        summary:
          'Desfrute de pratos refinados em um ambiente histórico e elegante.',
        reasons: 'Gastronomia sofisticada, atmosfera única.',
        mapLink: 'Link do mapa do Restaurante Solar dos Cunhas aqui',
        photos: ['Link para fotos'],
        lat: 40.5375,
        lng: -7.2677,
        timeOfDay: 'Noite',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/1b/1a/9d/24/restaurante-o-lagar.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/1b/1a/9d/2b/restaurante-o-lagar.jpg',
        ],
      },
      {
        name: 'Moliceiros de Aveiro',
        city: 'Aveiro',
        summary:
          'Faça um passeio encantador pelos canais de Aveiro a bordo dos pitorescos barcos moliceiros.',
        reasons: 'Experiência única, arquitetura encantadora.',
        mapLink: 'Link do mapa dos Moliceiros de Aveiro aqui',
        photos: ['Link para fotos'],
        lat: 40.6401,
        lng: -8.6525,
        timeOfDay: 'Tarde',
        images: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Moliceiros_em_Aveiro.jpg/1200px-Moliceiros_em_Aveiro.jpg',
          'https://i.ytimg.com/vi/_MFzE7i7PUQ/maxresdefault.jpg',
        ],
      },
      {
        name: 'Mercado do Peixe',
        city: 'Aveiro',
        summary:
          'Experimente pratos de frutos do mar frescos e autênticos no coração de Aveiro.',
        reasons: 'Frutos do mar frescos, ambiente vibrante.',
        mapLink: 'Link do mapa do restaurante Mercado do Peixe aqui',
        photos: ['Link para fotos'],
        lat: 40.6425,
        lng: -8.6456,
        timeOfDay: 'Noite',
        images: [
          'https://www.visitportugal.com/sites/default/files/mediateca/AVEIRO-peixe.jpg',
          'https://www.cm-aveiro.pt/images/Noticias/2021/Julho/Pescado1.jpg',
        ],
      },
      {
        name: 'Ovos Moles de Aveiro',
        city: 'Aveiro',
        summary:
          'Experimente os famosos Ovos Moles, um doce tradicional de Aveiro.',
        reasons: 'Doce local, tradição gastronômica.',
        mapLink: 'Link do mapa da loja de Ovos Moles aqui',
        photos: ['Link para fotos'],
        lat: 40.6442,
        lng: -8.6455,
        timeOfDay: 'Tarde',
        images: [
          'https://farm6.staticflickr.com/5622/22967101489_27e3893da3_b.jpg',
          'https://img.ev.mu/images/attractions/8190/960x640/421584.jpg',
        ],
      },
      {
        name: 'A Tasca do Confrade',
        city: 'Aveiro',
        summary:
          'Desfrute de petiscos tradicionais portugueses em um ambiente acolhedor.',
        reasons: 'Comida autêntica, ambiente descontraído.',
        mapLink: 'Link do mapa de A Tasca do Confrade aqui',
        photos: ['Link para fotos'],
        lat: 40.6419,
        lng: -8.6489,
        timeOfDay: 'Noite',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/0b/99/1d/17/entrance.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/0b/99/1d/14/a-tasca-do-confrade.jpg',
        ],
      },
      {
        name: 'Sé Catedral de Viseu',
        city: 'Viseu',
        summary:
          'Explore a impressionante catedral com uma mistura de estilos arquitetônicos.',
        reasons: 'Arquitetura histórica, arte sacra.',
        mapLink: 'Link do mapa da Sé Catedral de Viseu aqui',
        photos: ['Link para fotos'],
        lat: 40.6586,
        lng: -7.9128,
        timeOfDay: 'Manhã',
        images: [
          'https://www.cm-viseu.pt/images/ImagensDestaque/Catedral_Nossa_Senhora_da_Conceicao_01.jpg',
          'https://www.infopedia.pt/$imagen/82/3782.jpg',
        ],
      },
      {
        name: 'Muralha da Sé',
        city: 'Viseu',
        summary:
          'Desfrute de uma refeição deliciosa com vista para a Sé Catedral e o centro histórico.',
        reasons: 'Gastronomia variada, vista panorâmica.',
        mapLink: 'Link do mapa do restaurante Muralha da Sé aqui',
        photos: ['Link para fotos'],
        lat: 40.6581,
        lng: -7.9141,
        timeOfDay: 'Tarde',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/0e/c4/e5/6e/20171116-131006-largejpg.jpg',
          'https://s3-media0.fl.yelpcdn.com/bphoto/yxSvNLCZhxWX-cBfBp7iGg/o.jpg',
        ],
      },
      {
        name: 'Museu Grão Vasco',
        city: 'Viseu',
        summary:
          'Explore o Museu Grão Vasco, que abriga uma rica coleção de arte.',
        reasons: 'Arte clássica, história local.',
        mapLink: 'Link do mapa do Museu Grão Vasco aqui',
        photos: ['Link para fotos'],
        lat: 40.6583,
        lng: -7.9124,
        timeOfDay: 'Tarde',
        images: [
          'https://www.infopedia.pt/$imagen/74/74770.jpg',
          'https://www.centerofportugal.com/wp-content/uploads/2016/11/Museu-2-961x1024.jpg',
        ],
      },
      {
        name: 'Restaurante Avenida',
        city: 'Viseu',
        summary:
          'Desfrute de pratos tradicionais portugueses em um ambiente moderno e elegante.',
        reasons: 'Gastronomia local, atmosfera contemporânea.',
        mapLink: 'Link do mapa do Restaurante Avenida aqui',
        photos: ['Link para fotos'],
        lat: 40.6559,
        lng: -7.9135,
        timeOfDay: 'Noite',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/1a/5c/e3/7e/avenida.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/1a/5c/e3/88/avenida.jpg',
        ],
      },
      {
        name: 'Muralha Bar',
        city: 'Viseu',
        summary:
          'Desfrute de uma seleção de cocktails exclusivos em um ambiente descontraído.',
        reasons: 'Cocktails criativos, ambiente vibrante.',
        mapLink: 'Link do mapa do Muralha Bar aqui',
        photos: ['Link para fotos'],
        lat: 40.6559,
        lng: -7.9135,
        timeOfDay: 'Noite',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/1a/5c/e3/7e/avenida.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/1a/5c/e3/88/avenida.jpg',
        ],
      },
    ];
    // Crie um array de promessas, uma para cada chamada getImages
    const promises = a.map((sight) => this.getImages(sight));

    // Espere todas as promessas serem resolvidas
    await Promise.all(promises);

    // Imprima a lista atualizada de sights
    console.log(a);
  }

  panToMarker(sight: any) {
    this.focusedSight = sight;

    this.map?.panTo({
      lat: sight.lat + 0.001,
      lng: sight.lng,
    });
  }

  getImages(sight: any) {
    if (sight.images) return;

    const url = `https://www.googleapis.com/customsearch/v1`;
    const params = {
      key: 'AIzaSyD0uI1qpMLO7WBFF0yTsHe-Q00sGsuXP2I',
      cx: 'c6187a5772ddc4456',
      q: `${sight.name} ${sight.city}`,
      searchType: 'image',
      num: 8,
    };

    return this.http.get(url, { params }).subscribe((response: any) => {
      sight.images = response.items.map((item: any) => item.link);
    });
  }

  openImageCarouselDialog(images: string[]) {
    this.dialog.open(ImageCarouselDialogComponent, {
      data: { images },
    });
  }
}
