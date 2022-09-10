import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../models/usuario';

import { MatDialog } from '@angular/material/dialog';
import { NuevoComponent } from '../nuevo/nuevo.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    private _usuarioService: UsuarioService,
    public dialog: MatDialog
  ) {

  }

  displayedColumns1: string[] = ['id', 'correo', 'nombre', 'apellido', 'edad', 'distrito'];

  dataSource1: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this._usuarioService.findAll().subscribe(resp => {
      console.log(resp);

      this.usuarios = resp;
      this.dataSource1 = new MatTableDataSource<Usuario>(this.usuarios);
      this.dataSource1.paginator = this.paginator;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(NuevoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

