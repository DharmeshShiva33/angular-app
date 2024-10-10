import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';

import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule, ButtonModule, BadgeModule, FormsModule, InputTextModule, MenubarModule, RippleModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Output() valueChange = new EventEmitter<string>();
  @Input() item: number = 0;

  public menuItem: MenuItem[] = [];
  public inputValue: string = "";

  ngOnInit() {
    this.menuItem = [
      {
        label: "Shop",
        items: [
          {
            label: "Home",
            icon: "pi pi-home"
          },
          {
            label: "Shop Details",
            icon: "pi-info-circle"
          }
        ]
      },
      {
        label: "On Sale",
      },
      {
        label: "New Arrivals",
      },
      {
        label: "Brands"
      }
    ]
  }

  emitFilterValue() {
    this.valueChange.emit(this.inputValue);
  }
}
