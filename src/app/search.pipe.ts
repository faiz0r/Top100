import { Pipe, PipeTransform } from '@angular/core';
import { Model } from './model/Model';

@Pipe({ name: 'appFilter' })

export class SearchPipe implements PipeTransform {

    transform(items: Model[], searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toUpperCase();

        return items.filter(it => {
            return it['im:name'].label.toUpperCase().includes(searchText);
        });
    }
}