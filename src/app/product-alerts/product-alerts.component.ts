import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  // La anotación @Input() indica que el valor es transferido por el elemento padre
  @Input() product!: Product;

  @Output() notify = new EventEmitter();
}
