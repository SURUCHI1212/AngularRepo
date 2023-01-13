import { Component } from '@angular/core';
import { CommonService } from './shared/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pagination';

  Items:any;
  page:number=1;
  count:number=0;
  tableItems:number=5;
  tableSizes:any=[2,4,6,8];

  constructor(private cs:CommonService){}

  ngOnInit()
  {
    this.getList();
  }


  getList()
  {
    this.cs.getAll().subscribe((data)=>{
      this.Items=data;
      console.log(this.Items);
    }
    )
  }

  onTableData(event:any)
  {
    this.page=event;
    this.getList();
  }

  onTableSize(event:any)
  {
    this.tableItems=event.target.value;
    this.page=1;
    this.getList();
  }
}
