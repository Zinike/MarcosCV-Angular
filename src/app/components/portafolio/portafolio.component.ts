import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PortafolioModel } from 'src/app/models/portafolio';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
