import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { CadastroService } from '../cadastro-produto/cadastro.service';
import { Produto } from '../interface/produto.interface';


export interface PeriodicElement {
  name: string;
  position: number;
  quantidade: number;
  symbol: string;
}

export interface PeriodicElemente {
  id: number;
  name: string;
  position: number;
  quantidade: number;
  peso: number;
  description: string;
  valor: bigint;
  imagem: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', quantidade: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', quantidade: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', quantidade: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', quantidade: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', quantidade: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', quantidade: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', quantidade: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', quantidade: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', quantidade: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', quantidade: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.scss']
})
export class ProdutosDetalhesComponent implements OnInit {

  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['position', 'name', 'quantidade', 'symbol', 'actions'];
  displayedColumn: string[] = ['id', 'name', 'quantidade', 'actions'];
  periodic: PeriodicElemente[] = [];
  dataSource: any;
  loading = false;

  constructor(
    private produtoService: CadastroService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.lista();
  }

  openDialog(element: PeriodicElemente | null, id?: any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '900px',
      data: element === null ? new Produto() : element
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        this.produtoService.edit(element, id).subscribe((res) => {
          this.periodic.push(res);
        });
        this.dataSource = this.periodic;
        this.table.renderRows();
      }
    });
  }

  public delete(id: any) {
    this.loading = true;
    this.produtoService.delete(id).subscribe((res) => {
      console.log(res);
      this.loading = false
      this.lista();
    }, (erro) => {
      console.log(erro);
      this.loading = false;
    })
  }

  public edit(element: any, id: any) {
    this.openDialog(element, id);
  }

  public lista() {
    this.produtoService.listarProtudos().subscribe((response) => {
      response.forEach((produto: any) => {
        this.periodic.push(produto);
      });
      this.dataSource = this.periodic;
    }, (erro) => {

    });
  }
}
