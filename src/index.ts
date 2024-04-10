import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the jupyterlab-ascii-homer extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-ascii-homer:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension jupyterlab-ascii-homer is activated!');

    // print homer simpsons as ascii art
    console.log(`
        ___
       //_\\_
     ."\\    ".
    /          \\
    |           \\_
    |       ,--.-.)
    \\     /  o \\o\\
    /\\/\\  \\    /_/
      (_.   \`--'__)
      |     .-'  \\
      |  .-'.     )
      | (  _/--.-'
      |  \`.___.'
            (
    src: https://www.asciiart.eu/cartoons/simpsons
    `);

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('jupyterlab-ascii-homer settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for jupyterlab-ascii-homer.', reason);
        });
    }
  }
};

export default plugin;
