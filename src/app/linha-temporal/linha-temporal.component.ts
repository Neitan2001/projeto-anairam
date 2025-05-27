import { Component, OnInit } from '@angular/core';

interface Evento {
  date: string;
  label: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-linha-temporal',
  templateUrl: './linha-temporal.component.html',
  styleUrls: ['./linha-temporal.component.css']
})
export class LinhaTemporalComponent implements OnInit {
  eventos: Evento[] = [];

  selectedEvent: Evento | null = null;

  hoveredIndex: number | null = null;

  ngOnInit(): void {
    this.eventos = [
      {
        date: '07/01/2021', label: 'Primeiro encontro',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dolor vitae diam dignissim sollicitudin vel a felis. Sed nec lorem dictum, ornare lorem sed, vulputate tortor. Integer rutrum augue erat, id hendrerit nisl aliquet quis. Aenean augue quam, placerat eget ante eu, pellentesque lacinia elit. Praesent rutrum neque sit amet odio imperdiet, quis luctus mauris venenatis. Proin ullamcorper nisl purus, dictum scelerisque tortor vulputate venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In fermentum sed eros non fermentum. Nam dictum dolor a velit faucibus malesuada. Integer quis efficitur enim. Vestibulum nec sapien libero. Nulla facilisi. Donec convallis euismod nulla, non pharetra est pulvinar nec.',
        imageUrl: 'https://vykcaezbaaokfpzflldq.supabase.co/storage/v1/object/public/anairam-assets//Show-Louis-Tomlison.webp'
      },
      {
        date: '07/01/2022', label: 'Segundo encontro',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dolor vitae diam dignissim sollicitudin vel a felis. Sed nec lorem dictum, ornare lorem sed, vulputate tortor. Integer rutrum augue erat, id hendrerit nisl aliquet quis. Aenean augue quam, placerat eget ante eu, pellentesque lacinia elit. Praesent rutrum neque sit amet odio imperdiet, quis luctus mauris venenatis. Proin ullamcorper nisl purus, dictum scelerisque tortor vulputate venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In fermentum sed eros non fermentum. Nam dictum dolor a velit faucibus malesuada. Integer quis efficitur enim. Vestibulum nec sapien libero. Nulla facilisi. Donec convallis euismod nulla, non pharetra est pulvinar nec.',
        imageUrl: 'https://vykcaezbaaokfpzflldq.supabase.co/storage/v1/object/public/anairam-assets//Show-Louis-Tomlison.webp'
      },
    ];
  }
}
