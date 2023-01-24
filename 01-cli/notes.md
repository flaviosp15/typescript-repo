# Installing Typescript

There are two main ways to install Typescript in your projects:

- Via npm (the Node.js package manager)
- By installing Typescript's Visual Studio plugins

## Terminal commands

### Install

For npm users:

`npm install -g typescript`

This command install Typescript on your system globally.

### Version

To see the version print out on the screen:

`tsc -v`

### Help

For help on possible arguments you can type:

`tsc -h`

### Compile

This command will compile a single `.ts` file into `.js`:

`tsc app.ts`

To compile multiple `.ts` files:

`tsc app.ts another.ts anotherOne.ts`

### Joining Files

You can compile all your Typescript files into a single Javascript file:

`tsc *.ts --out app.js`

### Watcher

Instead of running the `tsc` command all the time you can use the option `--watch`.

`tsc *.ts --out app.js --watch`

Everytime you update your Typescript files it'll recompile the source files to Javascript.
