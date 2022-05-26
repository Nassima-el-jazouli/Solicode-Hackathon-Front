import { Component, OnInit } from '@angular/core';
import { AnnounceService } from '../_services/announce.service';
import { Announce } from '../models/announce';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-announces-list',
  templateUrl: './announces-list.component.html',
  styleUrls: ['./announces-list.component.css']
})
export class AnnouncesListComponent implements OnInit {

announces: Announce[] ;
announces2: Announce[] ;


  constructor(private announceService: AnnounceService,
              private route: ActivatedRoute,
              private router: Router) {

              this.announces=[];
              this.announces2=[];

              }

  ngOnInit(): void {

     this.announceService.findAllAnnounces().subscribe(result=> {
          this.announces = result;
          console.log("************ fffffff ....***********"+this.announces[1].isValidate);

        });


  }

  AddToPublication(title:String){

  console.log("************ publication ....***********");
      this.announceService.Publish(title).subscribe(result => this.gotoExploreList());
  }

  gotoExploreList() {
          console.log("*************** publication redirection ******************");
          this.router.navigate(['/announces-list']);
    }

  RemovePublication(title:String){

      console.log("************ publication ....***********");
          this.announceService.RemovePublication(title).subscribe(result => this.gotoExploreList());
      }

  consulterAnnounceById() {

        this.announceService.consulterAnnounceById().subscribe(result=> {
             this.announces2 = result;
             console.log("************ fffffff ....***********"+this.announces[1].isValidate);

           });
     }

}

