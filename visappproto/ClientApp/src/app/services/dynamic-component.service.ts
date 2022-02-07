import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { CounterComponent } from '../components/counter/counter.component';
import { SakilaComponent } from '../components/sakila/sakila.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public createDynaComp(vCref: ViewContainerRef, tileType: string): ComponentRef<any> {
    let dynaCmp: any;

    // TODO tileType により、Componentを dynaCmp に設定する
    if (tileType === 'counter') {
      dynaCmp = CounterComponent;
    } 

    const factory = this.componentFactoryResolver.resolveComponentFactory(dynaCmp);
    const comp = vCref.createComponent(factory, 0);

    return comp;
  }
  public removeComp(vCref: ViewContainerRef, idx: number) {
    vCref.remove(idx);
  }

  public moveComp(vCref: ViewContainerRef, idx1: number, idx2: number) {
      const hostView = vCref.get(idx1);
      if (hostView != null) {
        vCref.move(hostView, idx2);
      }
  }
}
