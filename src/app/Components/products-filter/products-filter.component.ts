import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ColorService } from 'src/app/color.service';
import { SizeService } from 'src/app/size.service';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css'],
})
export class ProductsFilterComponent implements OnInit {
  sizes: string[] = [];
  colors: string[] = [];
  @Output() filterChange = new EventEmitter<any>();
  filter: any = {
    prices: [{ min: 0, max: 0 }],
    colors: [''],
    sizes: [''],
  };
  constructor(
    private sizeService: SizeService,
    private colorService: ColorService
  ) {}
  ngOnInit(): void {
    this.sizes = this.sizeService.getSizes();
    this.colors = this.colorService.getColors();
  }

  changePrice(event: any, min: number, max: number) {
    if (event.target.checked) {
      this.filter.price.push({ min: min, max: max });
    } else {
      const item = this.filter.price.findIndex((x: any) => {
        x.min == min && x.max == max;
      });
      this.filter.price.splice(item, 1);
    }
    this.filterChange.emit(this.filter);
  }

  changeSize(event: any, s: string) {
    if (event.target.checked) {
      this.filter.sizes.push(s);
    } else {
      const item = this.filter.sizes.findIndex((x: any) => {
        x == s;
      });
      this.filter.sizes.splice(item, 1);
    }
    this.filterChange.emit(this.filter);
  }
  changeColor(event: any, c: string) {
    if (event.target.checked) {
      this.filter.colors.push(c);
    } else {
      const item = this.filter.colors.findIndex((x: any) => {
        x == c;
      });
      this.filter.colors.splice(item, 1);
    }
    this.filterChange.emit(this.filter);
  }
}
