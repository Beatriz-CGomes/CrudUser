import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalViewUsersComponent } from './modal-view-users/modal-view-users.component';
import { ModalFormUserComponent } from './modal-form-user/modal-form-user.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'benefits', 'action'];
  dataSource: any;
  listUsers: User[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<any>(this.listUsers);
  }

  ngOnInit() {
    this.getListUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  //FUNÇÕES DO USUÁRIOS
  getListUsers() {
    this.usersService.getAllUsers().subscribe({
      next: (response: any) => {
        this.listUsers = response;
        this.dataSource = new MatTableDataSource<any>(this.listUsers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.paginator._intl.itemsPerPageLabel = "Itens por página";
      }, error: (err) => {
        console.error(err);
      }
    });
  }

  deletUser(userId: string) {
    this.usersService.delete(userId).then(
      (response: any) => {
        window.alert('Usuário deletedo com sucesso ')
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //LOGICA DO MODAL
  openModalViewUser(user: User) {
    this.dialog.open(ModalViewUsersComponent, {
      width: '700px',
      height: '330px',
      data: user
    })
  }

  openModalAddUser() {
    this.dialog.open(ModalFormUserComponent, {
      width: '700px',
      height: '400px',
    }).afterClosed().subscribe(() => this.getListUsers());
  }

  openModalEditUser(user: User) {
    this.dialog.open(ModalFormUserComponent, {
      width: '700px',
      height: '400px',
      data: user
    }).afterClosed().subscribe(() => this.getListUsers());

  }

}
