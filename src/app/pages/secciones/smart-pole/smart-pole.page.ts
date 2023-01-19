import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-smart-pole',
  templateUrl: './smart-pole.page.html',
  styleUrls: ['./smart-pole.page.scss'],
})
export class SmartPolePage implements OnInit {
  type: string = 'control';
  DataControl:any;
  DataEvents:any;
  DataControlOptions:any;
  controlact:string='';
  titulocero:string='';
  titconcat:string='';

  titulo:string='';
  batery:string='';
  idpark:string='';
  serie:string='';
  status:string='';
  direc:string='';
  created_date:string='';
  defaultHref = '';
  seriaurl:any;

  constructor(
    private rutaActiva: ActivatedRoute,
    private api: ApiService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public config: Config
  ) { }

  ngOnInit() {
    this.seriaurl = this.rutaActiva.snapshot.queryParams.serie;
    this.ConsultaDispositivoPole();
  }

  ConsultaDispositivoPole(){
    const headers = new HttpHeaders({
    });
    const data_post = {}    
    
    this.api.ConsultaDispositivoPole(data_post, headers,this.seriaurl).subscribe((data: any) => {
      this.DataControl = data.controls;
      if (data.controls.length > 0) {
        this.DataControlOptions = data.controls[0].options;
        this.controlact = data.controls[0].value;
        this.titulocero = data.controls[0].tag;
      }else{
        this.DataControlOptions = [];
        this.controlact = '';
        this.titulocero = '';
      }
      this.DataEvents = data.events;
      

      this.titulo=data.name;
      this.batery=data.batery;
      this.idpark=data.idpark;
      this.serie=data.serie;
      this.status=data.status;
      this.direc=data.project.name;
      this.created_date=data.created_date;

      console.log(this.DataControlOptions);
      console.log(this.controlact);
      console.log(this.titulocero);

      for (let i = 0; i < this.DataControlOptions.length; i++) {
        if (this.controlact == this.DataControlOptions[i].value) {
          this.titconcat= this.titulocero + ' : ' + this.DataControlOptions[i].tag + ' ('+ this.DataControlOptions[i].value +'%) ' ;
        }
      }

    });
  }

  CambiodeSelect(valor:string){
    const headers = new HttpHeaders({
    });
    const data_post = {
      tag:this.titulocero,
      value:valor
    }

    this.api.EnvPostDispositivoPole(data_post, headers,this.seriaurl).subscribe((data: any) => {
      console.log(data);
      this.ConsultaDispositivoPole();
    });
  }

  CambioData(tag:string,valor:string){
    var varnew = parseInt(valor);

    if (varnew == 1) {
      varnew = 0;
    }else if(varnew == 0){
      varnew = 1;
    }

    const headers = new HttpHeaders({
    });
    const data_post = {
      tag:tag,
      value:varnew
    }

    this.api.EnvPostDispositivoPole(data_post, headers,this.seriaurl).subscribe((data: any) => {
      console.log(data);
    });

  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/schedule`;
  }
}
