export class AlchemyRpcResponse<T> {
  jsonrpc: string;
  id: number;
  result: T;

  constructor(jsonrpc: string, id: number, result: T) {
    this.jsonrpc = jsonrpc;
    this.id = id;
    this.result = result;
  }
}
