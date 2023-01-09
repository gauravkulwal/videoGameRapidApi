import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
order : any; 
sorts = [
  'released' , 'added' , 'updated' , 'created' ,  'rating' , 'name' , 'metacrit'
];
games: any;
  constructor(private httpService: HttpService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['game-search']){
        this.searchGames('metacrit' ,params['game-search'])
      }
      else{
        this.searchGames('metacrit')
      }
    })


    // this.httpService.getGamesList('1' ).subscribe((data: any) => {
    //   console.log('hello' ,data)
    // })
  }
  searchGames(sort: string, search?: any) {
    console.log(sort)
   this.httpService.getGamesList(sort , search).subscribe((gameList: any) => {
    this.games = gameList.results
    console.log(this.games)
   })
  }

}
