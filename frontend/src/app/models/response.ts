import { FileInfo } from './fileInfo';

export class ApiResponse {
  message: String = '';
  files?: FileInfo[];
}
