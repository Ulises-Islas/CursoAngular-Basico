import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Dr. Strange', 'Thor', 'Hulk'];
  eliminado: string = '';

  borrarHeroe(): void {
    this.eliminado = this.heroes.pop() || ''; //después del OR retorna una cadena vacía en caso de que la función retorne undefined
  }

}
