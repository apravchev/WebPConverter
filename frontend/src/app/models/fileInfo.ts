export class FileInfo {
  id: String = '';
  name: String = '';
  size: number = 0;
  path: String = '';
  format: String = '';
  original?: FileInfo;
  converted?: FileInfo[];
}
