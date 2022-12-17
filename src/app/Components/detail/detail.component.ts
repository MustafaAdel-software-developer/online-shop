import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColorService } from 'src/app/color.service';
import { Product } from 'src/app/interfaces/product';
import { StorageService } from 'src/app/Services/storage.service';
import { SizeService } from 'src/app/size.service';
import { ProductService } from '../../Services/product.service';
declare var $: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements AfterViewInit, OnInit {
  id: string = '';
  product: Product = {} as Product;
  products: Product[] = [];
  quantity: number = 1;
  color: string = '';
  colors: string[] = [];

  size: string = '';
  sizes: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private colorService: ColorService,
    private sizeService: SizeService,
    private storageService: StorageService
  ) {}
  ngAfterViewInit(): void {
    // Related carousel
    $('.related-carousel').owlCarousel({
      loop: true,
      margin: 29,
      nav: false,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.productService.getProductById(this.id).subscribe((data: any) => {
      this.product = data.data;
      this.color = this.product.color;
      this.size = this.product.size;
      this.productService
        .getProductByCategoryId(this.product.category_id)
        .subscribe((data: any) => {
          this.products = data.data;
        });
    });

    this.colors = this.colorService.getColors();
    this.sizes = this.sizeService.getSizes();
  }

  incQuantity() {
    this.quantity += 1;
  }

  decQuantity() {
    if (this.quantity > 1) this.quantity -= 1;
  }

  addToCartWithQuantity() {
    //const products = this.storageService.getProducts();
    // products.addProduct(this.product,this.quantity);
    //this.storageService.saveProducts(products);
    // this.storageService.addProduct(this.product, this.quantity);
  }
}
