import {Pipe, Injectable, PipeTransform} from "@angular/core";
@Pipe({
  name: 'nameFilter'
})
@Injectable()
export class NameFilterPipe implements PipeTransform {
  transform(items: any[], value: string): any[] {
    if(!!items && !!value)
      return items.filter(it => this.filterString(it.name, value) || this.filterString(it.lastname, value));
    return items;
  }
  filterString(value: string, query: string) {
    return value.toLowerCase().indexOf(query.toLowerCase()) > -1;
  }
}
