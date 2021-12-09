import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor(private itemService:ItemService ) { }

  ngOnInit(): void {

    this.itemService.getItems().subscribe((items) => 
      {this.items = items;
      this.getTotal();});
    

  }

  deleteItem(item:Item){
    this.itemService.deleteItem(item).subscribe(() => this.items = this.items.filter(i => i.id !== item.id));
    this.getTotal();
  }

  getTotal(){
    this.total = this.items
                .filter(item => item.completed==false)
                .map(item => item.price * item.quantity)
                .reduce((acc, item) => acc +=item, 0);
  }

  itemToggle(item:Item){
    this.itemService.updateItem(item).subscribe();
    this.getTotal();
  }

}
