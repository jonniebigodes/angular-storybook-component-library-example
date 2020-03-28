import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { MatButtonModule, } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SuperDuperUiModule } from 'super-duper-ui';
export default {
    title: 'My Sample Component',
    decorators: [
        moduleMetadata({
          // imports both components to allow component composition with storybook
          declarations: [SampleComponent],
          imports: [CommonModule, MatButtonModule,MatIconModule,SuperDuperUiModule],
        }),
      ],
}


export const Default = () => ({
    component: SampleComponent
});
