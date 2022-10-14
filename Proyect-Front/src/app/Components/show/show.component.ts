import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  proveedorList$ : any=[];
  empresaList$! : Observable<any[]>;
  empresaList : any=[];

  nombres: any=[];



  empresaListMap:Map<number,string> = new Map()

  
  constructor(
    private service:EmpresaServiceService
  ) { }

  ngOnInit(): void {
    this.proveedorList$ = this.service.getProveedorList();
    console.log(this.proveedorList$[0]);
    this.proveedorList$.subscribe(nombres => this.nombres = nombres, error => console.log(error));
  }

}
