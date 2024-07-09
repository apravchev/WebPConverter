export class FileInfo {
  id: string = '';
  name: string = '';
  size: number = 0;
  path: string = '';
  format: string = '';
  original?: FileInfo;
  converted?: FileInfo[];
}
