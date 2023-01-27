import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
postArr :any[] = []
postErr! : any;
  constructor(private api : DataService) { }

  ngOnInit(): void {
    this.api.getallData()
            .subscribe(res=>{
              console.log(res);
              this.postArr = res
            },error =>{
              console.log(error, 'error handler');
              this.postErr = error.message
            })
            
  }

}
