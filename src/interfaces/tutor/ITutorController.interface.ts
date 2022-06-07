export default interface ITutorController {
  list(request: any, response: any): Promise<void>;
  post(request: any, response: any): Promise<void>;
}