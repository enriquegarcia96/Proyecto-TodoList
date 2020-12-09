import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css',
   './font-awesome.css']
})
export class ListadoComponent implements OnInit {
  public listado_tareas : any [];
  public Tareas ={
    titulo_tarea: "",
    descripcion: "",
    username: ""

  }
  constructor(public service:AppService) {
    this.listado_tareas = [];
   }

   get_tareas(){
     var response: any[];
    this.service.get_tareas().subscribe(
        data => response = data,
        err => {
            console.log("Error al llamar el servicio");
        },
        ()=>{
            this.listado_tareas = response;

        }
    );

}

   insert_tareas(){
    var response;
    this.service.insert_tareas(this.Tareas).subscribe(
        data => response = data,
        err => {
            console.log("Error")
        },
        ()=>{
            this.Tareas = {
                titulo_tarea: "",
                descripcion:"",
                username:""
            }

            this.get_tareas();

        }
    )
}

delete_tareas(titulo_tarea: any){
  var response;
  var load={
      titulo_tarea : titulo_tarea
  }
  this.service.delete_tareas(load).subscribe(
      data => response = data,
      err => {
          console.log("Error")
      },
      ()=>{
          this.get_tareas();

      }
  )
}

pasarTareas(tarea: { titulo_tarea: any; descripcion: any; }){
  this.Tareas={
      titulo_tarea:tarea.titulo_tarea,
      descripcion:tarea.descripcion,
      username:tarea.descripcion
  }
}


update_tareas(){
  var response;
  this.service.update_tareas(this.Tareas).subscribe(
      data => response = data,
      err => {
          console.log("Ocurrio un error al llamar el servicio");
      },
      ()=>{

             this.get_tareas();
      }
  )

}


  ngOnInit(): void {
  }

}
