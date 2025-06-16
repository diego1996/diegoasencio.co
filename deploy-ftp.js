#!/usr/bin/env node
/**
 * deploy.js
 * Script de despliegue FTP usando ftp-deploy
 * Instalar dependencia: npm install --save-dev ftp-deploy
 * Ejecutar: node deploy.js
 */

const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const config = {
  user: 'deploy@asicadh.org',
  password: process.env.FTP_PASSWORD || 'Sup3rP455w0rd.',
  host: 'ftp.asicadh.org',
  port: 21,
  localRoot: __dirname + '',
  remoteRoot: 'diegoasencio.co',
  include: ['*', '**/*'],
  exclude: ['node_modules/**', '.git/**', '.github/**', '*.ps1', 'package-lock.json', 'deploy-ftp.js']
};

console.log(`Desplegando a ftp://${config.host}/${config.remoteRoot}`);

// Eventos adicionales para debug
ftpDeploy.on('uploaded', function(data) {
  console.log(`✅ Subido: ${data.filename} -> ${config.remoteRoot}/${data.filename}`);
});
ftpDeploy.on('upload-error', function(err, data) {
  console.error(`❌ Error al subir ${data.filename}:`, err);
});

ftpDeploy.on('uploading', function(data) {
  console.log(`Subiendo: ${data.filename}`);
});

ftpDeploy.on('completed', function() {
  console.log('¡Despliegue completado exitosamente!');
});

ftpDeploy.on('error', function(err) {
  console.error('Error en deploy:', err);
});

ftpDeploy.deploy(config)
  .then(() => console.log('Deploy finalizado.'))
  .catch(err => console.error('Error en deploy:', err)); 