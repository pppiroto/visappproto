import { ChangeDetectorRef, Component, ComponentRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentService } from 'src/app/services/dynamic-component.service';


@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css']
})
export class MainFrameComponent implements OnInit {

  @ViewChild('dynCompContainer', { read: ViewContainerRef })
  compContainer!: ViewContainerRef;

  constructor(
    private cdr: ChangeDetectorRef,
    private componentService: DynamicComponentService) { 
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    let cmp: ComponentRef<any>;
    ['counter','counter','counter'].forEach((tileType) => {
      cmp = this.componentService.createDynaComp(this.compContainer, tileType);
    });
    this.cdr.detectChanges();
  }
}
