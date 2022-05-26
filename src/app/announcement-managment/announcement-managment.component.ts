import { Component, OnInit } from '@angular/core';
import { ContractService } from '../_services/contract.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnounceService } from '../_services/announce.service';
import { Announce } from '../models/announce';


@Component({
  selector: 'app-announcement-managment',
  templateUrl: './announcement-managment.component.html',
  styleUrls: ['./announcement-managment.component.css']
})
export class AnnouncementManagmentComponent implements OnInit {

  num=0;
    NombreOfProducts=0;
    Product={ 
            title:"",
            quantity:0,
            image:"",
            address:"",
            numTel:"",
            score:0,
            validation:false,
            isValidate:false,
            toPublish:false,
            isRejected:false
            }

    requests: Announce[] ;
    //HouseTitle: String;

    constructor(    private announceService:AnnounceService,
                    private contractService:ContractService,
                    private route: ActivatedRoute,
                    private router: Router) {
    this.requests=[];
    //this.HouseTitle="";
    }

    ngOnInit() {
     this.announceService.AnnouncesNotValidate().subscribe(result=> {
              this.requests = result;
            });
    }

    validation(title: String,address:String){

      console.log("************ 1 ***********"+address);
      this.announceService.validate(title).subscribe(result => this.refresh());
      console.log("************ 2 ***********"+title);
      this.contractService.AddHouseToEthereum(address,title).subscribe(result => {

      console.log("oooooh")
      });

    }

    reject(title: String){

          this.announceService.reject(title).subscribe(result => this.refresh());
          console.log("************ 2 ***********"+title);
        }

    refresh() {
          window.location.reload();
    }
}
