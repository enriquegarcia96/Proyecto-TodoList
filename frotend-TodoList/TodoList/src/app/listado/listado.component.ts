import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css',
   './font-awesome.css']
})
export class ListadoComponent implements OnInit {
  public listado_tareas : any [];
  public Tareas ={
    tituloDeLaTarea: "",
    description: "",
    userName: ""

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
              tituloDeLaTarea: "",
                description:"",
                userName:""
            }

          swal.fire({
            title: 'Tarea Agregado Satisfactoriamnete',
            text: "Buen trabajo!",
            icon: 'success'
          })

            this.get_tareas();

        }
    )
}

delete_tareas( tituloDeLaTarea: any){
  var response;
  var load={
    tituloDeLaTarea :  tituloDeLaTarea
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

pasarTareas(tarea: {  tituloDeLaTarea: any; description: any; userName:any }){
  this.Tareas={
    tituloDeLaTarea:tarea.tituloDeLaTarea,
      description:tarea.description,
      userName:tarea.userName
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

        swal.fire({
          title: 'Tarea Actualizado Agregado Satisfactoriamnete',
          text: "Buen trabajo!",
          icon: 'success'
        })

             this.get_tareas();
      }
  )

}


  ngOnInit(): void {
  }

}
