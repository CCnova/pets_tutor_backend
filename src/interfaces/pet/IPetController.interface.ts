export default interface IPetController {
  list(request: any, response: any): Promise<void>;
  post(request: any, response: any): Promise<void>;
}