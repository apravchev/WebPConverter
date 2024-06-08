import { ApiResponse } from '../apiResponse';
import { FileInfo } from '../fileInfo';

export class FileResponse extends ApiResponse {
  files: FileInfo[] = [];
  page?: number = 1;
  count?: number = 0;
  total?: number = 0;
}
