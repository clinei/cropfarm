import { Injectable, Output, EventEmitter } from '@angular/core';

function shuffle(arr): any[] {
  const result = [...arr];

  for (let i = result.length - 1; i >= 0 ; i -= 1) {
    const j = Math.floor(Math.random() * i);
    const temp = result[j];
    result[j] = result[i];
    result[i] = temp;
  }

  return result;
}

function ascendingArray(length: number): number[] {
  return ascendingArray2(0, length);
}
function ascendingArray2(start: number, end: number): number[] {
  const result = new Array(end - start);

  for (let i = 0; i < result.length; i += 1) {
    result[i] = i;
  }

  return result;
}

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  size: number = 9;
  columns: string[][];
  flat: string[];
  used: number = 0;
  available: number[];

  @Output()
  next: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.flat = new Array(this.size * this.size);
    this.columns = new Array(this.size);
    for (let i = 0; i < this.size; i += 1) {
      this.columns[i] = new Array();
    }
    this.available = shuffle(ascendingArray(this.size).concat(ascendingArray(this.size)).concat(ascendingArray(this.size)));
    this.next.emit(this.available[this.used]);
  }

  add(crop) {
    const colIndex = this.available[this.used];
    const rowIndex = this.columns[colIndex].length;
    this.flat[rowIndex * this.size + colIndex] = crop;
    this.columns[this.available[this.used]].push(crop);
    this.used += 1;
    this.score();
    if (this.used < this.available.length) {
    }
    else {
      this.available = shuffle(this.available);
      this.used = 0;
    }
    this.next.emit(this.available[this.used]);
  }

  private score() {
    // TODO:
    // only row matching is done
    // need diagonal and column matching
    const windowSize = 4;
    for (let i = windowSize; i < this.flat.length; i += 1) {
      let valid = true;
      for (let j = 0; j < windowSize; j += 1) {
        const curr = this.flat[i - j];
        if ( typeof curr === 'undefined' || curr !== this.flat[i]) {
          valid = false;
          break;
        }
      }
      if (valid) {
        const colIndex = (i - windowSize) % this.size;
        const rowIndex = Math.floor(i / this.size);
        for (let j = 0; j < windowSize + 1; j += 1) {
          if (colIndex + j < this.size) {
            this.columns[colIndex + j].splice(rowIndex, 1);
            for (let k = 0; k < this.size; k += 1) {
              for (let l = i; l <= windowSize; l += 1) {
                let destIndex = k * this.size + l;
                let srcIndex = (k + 1) * this.size + l;
                if (srcIndex < this.size * this.size) {
                  this.flat[destIndex] = this.flat[srcIndex];
                }
              }
            }
          }
        }
      }
    }
  }
}
