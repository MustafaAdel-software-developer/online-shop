import { AfterViewInit, Component } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  quantity: number = 0;
  showRecent?: boolean;

  constructor(private productService: ProductService) {}
  changeValue(event: any) {
    this.quantity = event.target.value;
  }

  showRecentProducts() {
    this.productService.getRecentProducts().subscribe((data: any) => {});
  }
  hideRecentProducts() {
    this.productService.getFeaturedProducts().subscribe((data: any) => {});
  }

  ngAfterViewInit(): void {
    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
      loop: true,
      margin: 29,
      nav: false,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 2,
        },
        576: {
          items: 3,
        },
        768: {
          items: 4,
        },
        992: {
          items: 5,
        },
        1200: {
          items: 6,
        },
      },
    });
  }
}
