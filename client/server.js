import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import { spawn } from 'child_process';

import config from './webpack.config.development';

const argv = require('minimist')(process.argv.slice(2));

const app = express();
const compiler = webpack(config);
const PORT = process.env.PORT || 3000;

const wdm = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
});

app.use(wdm);

app.use(webpackHotMiddleware(compiler));

app.use('/*', (req, res) => {
  express.static(path.join(__dirname, './app/app.html'))
})

const server = app.listen(PORT, 'localhost', serverError => {
  if (serverError) {
    return console.error(serverError);
  }

  if (argv['start-hot']) {
    spawn('npm', ['run', 'start-hot'], { shell: true, env: process.env, stdio: 'inherit' })
      .on('close', code => process.exit(code))
      .on('error', spawnError => console.error(spawnError));
  }

  console.log(`Listening at http://localhost:${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('Stopping dev server');
  wdm.close();
  server.close(() => {
    process.exit(0);
  });
});
