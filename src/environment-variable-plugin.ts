
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';

export function start(context: theia.PluginContext) {
    const informationMessageTestCommand = {
        id: 'environment-variable-open-terminal',
        label: "Environment variable: Open terminal"
    };
    const disposeTestCommand = {
        id: 'environment-variable-clear-collection',
        label: "Environment variable: Clear collection"
    };
    context.subscriptions.push(theia.commands.registerCommand(informationMessageTestCommand, () => {
        const collection = context.environmentVariableCollection;
        collection.replace('A', '~a2~');
        collection.append('B', '~b2~');
        collection.prepend('C', '~c2~');

        const terminal = theia.window.createTerminal({
            env: {
                A: 'a1',
                B: 'b1',
                C: 'c1'
            }
        });
        terminal.show();
        terminal.sendText('echo $A');
        terminal.sendText('echo $B');
        terminal.sendText('echo $C');
    }));
    context.subscriptions.push(theia.commands.registerCommand(disposeTestCommand, () => {
        context.environmentVariableCollection.clear();
    }));

}

export function stop() {

}
