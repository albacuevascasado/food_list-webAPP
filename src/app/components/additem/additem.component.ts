import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  title:string = "";
  price:number = 0;
  quantity: number = 0;

  constructor(private itemService:ItemService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const item = new Item();
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    if (item.title == "" || item.price == 0 || item.quantity == 0 ) {
      alert("Complete all the fields");
    }
    else {
      this.itemService.addItem(item).subscribe((item)=> this.router.navigate(['']));
    }
    
  }

}
