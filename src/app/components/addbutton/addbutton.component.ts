import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbutton',
  templateUrl: './addbutton.component.html',
  styleUrls: ['./addbutton.component.css']
})
export class AddbuttonComponent implements OnInit {

  @Input() text:string = "";
  @Input() color:string = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


}
