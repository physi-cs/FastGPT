import { PluginTemplateType } from '@fastgpt/global/core/plugin/type.d';
import type { SystemPluginTemplateItemType } from '@fastgpt/global/core/workflow/type';

declare global {
  var communityPlugins: SystemPluginTemplateItemType[];
}
