import { FileInfo } from './fileInfo';

export abstract class ApiResponse {
  message: String = '';
  status: number = 400;
}
