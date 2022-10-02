import { Sandpack } from "@codesandbox/sandpack-react";
export default function Code() {
    return (
        <div>
            <Sandpack
                options={{
                    showConsole: true,
                    showConsoleButton: true
                }}
                files={{
                    '/index.js': `console.log('test')`
                }}
                customSetup={{
                    entry: '/index.js'
                }}
                theme="dark"
            />
        </div>
    )
}