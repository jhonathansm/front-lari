export class User {
  name: string = '';
  email: string = '';
  password: string = '';
  endereco = new Endereco();
  permission: string = '';

}

export class Endereco {
  logradouro: string = '';
  numero: string = '';
  complemento: string = '';
  bairro: string = '';
  cep: string = '';
  cidade: string = '';
  estado: string = '';
  pontoReferencia: string = '';
}
