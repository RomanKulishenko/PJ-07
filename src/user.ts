export class User {
  private id: number;
  private userName: string;
  private userFoto: string;

  constructor(id: number, userName: string) {
    this.id = id;
    this.userName = userName;
    this.userFoto = "./src/image/foto4.png";
  }

  public getId(): number {
    return this.id;
  }
  public getUserName(): string {
    return this.userName;
  }
  public getUserFoto(): string {
    return this.userFoto;
  }
}
