import { withInstall } from '../util';

import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';
export const Tinymce = createAsyncComponent(() => import('./src/Editor.vue'));

withInstall(Tinymce);
