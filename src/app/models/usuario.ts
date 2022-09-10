export class Usuario {
  id: number;
  correo: string;
  nombre: string;
  apellido: string;
  edad: number;
  distrito: Distrito;
}

export class Distrito {
  id: number;
  nombre: string;
}