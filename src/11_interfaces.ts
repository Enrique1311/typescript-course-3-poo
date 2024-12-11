export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver ={
//   database:"",
//   password:"",
//   port: 6000
// }

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    // code
  }

  disconnect(): void {
    // code
  }

  isConnected(name: string): boolean {
    // code
    return true;
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    throw new Error('This method is not implemented');
  }

  disconnect(): void {
    // code
  }

  isConnected(name: string): boolean {
    // code
    return true;
  }
}
