import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  search: any ='' ;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
// onSubmit(form: NgForm){
//   this.router.navigate(['search' ,form.value.search ])
// }
}
