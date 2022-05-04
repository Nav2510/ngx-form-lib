import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { PrefixSuffix, PrefixSuffixEnum } from '../../models/prefix-suffix.model';

@Component({
  selector: 'ngf-prefix-suffix',
  templateUrl: './prefix-suffix.component.html',
  styleUrls: ['./prefix-suffix.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrefixSuffixComponent {
  @Input() config: PrefixSuffix = {} as PrefixSuffix;

  readonly PrefixSuffixEnum =  PrefixSuffixEnum;
}
