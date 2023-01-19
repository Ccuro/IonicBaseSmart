import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { ChartComponent,ApexAxisChartSeries,ApexChart,ApexXAxis,ApexDataLabels,ApexStroke,ApexMarkers,ApexYAxis,ApexGrid,ApexTitleSubtitle,ApexLegend } from "ng-apexcharts";
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-smart-parking',
  templateUrl: './smart-parking.page.html',
  styleUrls: ['./smart-parking.page.scss'],
})
export class SmartParkingPage implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions:Partial<ChartOptions>;
  dispositivosParking:any;
  seriaurl:any;
  
  titulo:string='';
  batery:string='';
  idpark:string='';
  serie:string='';
  status:string='';
  direc:string='';
  created_date:string='';
  defaultHref = '';

  constructor(private api: ApiService,private rutaActiva: ActivatedRoute) {
    this.chartOptions = {
      series: [
        {
          name: this.titulo,
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: this.titulo
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
  }
  
  ngOnInit() {
    this.seriaurl = this.rutaActiva.snapshot.queryParams.serie;
    this.ConsultaParking();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }
  
  ConsultaParking(){
    const headers = new HttpHeaders({
    });
    const data_post = {
      serie : this.seriaurl
    }
    
    this.api.ConsultaDispositivoParking(data_post, headers , this.seriaurl).subscribe((data: any) => {
      this.dispositivosParking = data;
      console.log(this.dispositivosParking);
      this.titulo=data.name;
      this.batery=data.batery;
      this.idpark=data.idpark;
      this.serie=data.serie;
      this.status=data.status;
      this.direc=data.project.name;
      this.created_date=data.created_date;
    });
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/schedule`;
  }
  
}
