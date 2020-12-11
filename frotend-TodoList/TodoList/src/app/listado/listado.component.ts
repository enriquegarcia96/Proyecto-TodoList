import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css',
   './font-awesome.css']
})
export class ListadoComponent implements OnInit {
  public listado_tareas : any [];
  public idusuario2: string;
  public iddTarea = {
    idta:""
  }
  public Tareas ={
    tituloDeLaTarea: "",
    description: "",
    estado: "",
    userName: ""
  }
  public TareaActualizar={
    _id: "",
    tituloDeLaTarea: "",
    description: "",
    estado: "",
    userName : ""
  }
  
  constructor(public service:AppService, private activatedRoutee: ActivatedRoute) {
    
    this.listado_tareas = [];
    this.idusuario2= "";
    this.iddTarea;
   }

  ngOnInit() {
    let idusuario1 = this.activatedRoutee.snapshot.params.idusuario;
    console.log(idusuario1);
    this.idusuario2 = idusuario1;
    this.get_tareas();
  }

  get_idusuario(){
      let idusuario1 = this.activatedRoutee.snapshot.params.idusuario;
    console.log(idusuario1);
    this.idusuario2 = idusuario1;
  }
 
   
 
  

   get_tareas(){
     var response: any[];
     let idusario: string;
     idusario = this.idusuario2;
     this.Tareas.userName =idusario;
    this.service.get_tareas(this.Tareas.userName).subscribe(
        data => response = data,
        err => {
            console.log("Error al llamar el servicio");
        },
        ()=>{
            this.listado_tareas = response;
            console.log(response);
        }
    );

}

   insert_tareas(){
    var response;
    this.Tareas.userName = this.idusuario2;
    
    this.service.insert_tareas(this.Tareas).subscribe(
        data => response = data,
        err => {
            console.log("Error")
        },
        ()=>{
            this.Tareas = {
                tituloDeLaTarea: "",
                description:"",
                estado:"",
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

delete_tareas(id1: any){
  var response;
  var load={
    id : id1
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

pasarTareas(tarea: { tituloDeLaTarea: any; description: any; estado:any, _id:any}){
  this.TareaActualizar={
      _id:tarea._id,
      tituloDeLaTarea:tarea.tituloDeLaTarea,
      description:tarea.description,
      estado:tarea.estado,
      userName: this.idusuario2
  }
}


update_tareas(){
  var response;
  this.service.update_tareas(this.TareaActualizar).subscribe(
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


}
