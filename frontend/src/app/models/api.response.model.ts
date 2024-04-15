import { UploadedFile } from './uploaded.file.model';

export class ApiResponse {
  message: String = '';
  files?: UploadedFile[];
}
