export class FileInfo {
  name: String = '';
  size: number = 0;
  path: String = '';
  original?: FileInfo;
  converted?: FileInfo[];
}
