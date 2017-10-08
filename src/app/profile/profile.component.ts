import { AfterContentInit, Component, ContentChild, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterContentInit {

  @ContentChild('profile', { read: TemplateRef })
  public navigateComp: TemplateRef<ProfileComponent>;

  @ViewChild('profileCount', { read: ViewContainerRef })
  public subMenuComp: ViewContainerRef;

  public ngAfterContentInit(): void {
    this.subMenuComp.createEmbeddedView(this.navigateComp);
  }

}
