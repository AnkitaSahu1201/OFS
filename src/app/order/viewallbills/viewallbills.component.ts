import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/model/bill';
import { ReportService } from 'src/app/report.service';


@Component({
  selector: 'app-viewallbills',
  templateUrl: './viewallbills.component.html',
  styleUrls: ['./viewallbills.component.css']
})
export class ViewallbillsComponent implements OnInit {
  bills:Bill[]=[];
  constructor(private h:ReportService) {
    this.h.getAllBills().subscribe(a=>this.bills=a);
   }

  ngOnInit(): void {
  }

  
}
