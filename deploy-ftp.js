// Script de deploy por FTP para Hostgator
// Requiere: npm install basic-ftp
const ftp = require('basic-ftp')
const path = require('path')
const fs = require('fs')

const FTP_HOST = 'ftp.asicadh.org'
const FTP_USER = 'asicadho'
const FTP_PASS = process.env.FTP_PASS || '' // Mejor usar variable de entorno
const FTP_PORT = 21
const REMOTE_DIR = '/diegoasencio.co'

const PUBLIC_FILES = [
  'index.html',
  'css',
  'js',
  'assets' // si existe
]

async function uploadDir(client, localDir, remoteDir) {
  const items = fs.readdirSync(localDir)
  for (const item of items) {
    const localPath = path.join(localDir, item)
    const remotePath = remoteDir + '/' + item
    const stats = fs.statSync(localPath)
    if (item.startsWith('.')) continue // Ignorar archivos ocultos
    if (stats.isDirectory()) {
      try { await client.ensureDir(remotePath) } catch {}
      await uploadDir(client, localPath, remotePath)
    } else {
      await client.uploadFrom(localPath, remotePath)
      console.log('Subido:', remotePath)
    }
  }
}

async function main() {
  const client = new ftp.Client()
  client.ftp.verbose = true
  try {
    await client.access({
      host: FTP_HOST,
      user: FTP_USER,
      password: FTP_PASS,
      port: FTP_PORT,
      secure: false // Cambia a true si tu hosting requiere FTPS
    })
    await client.ensureDir(REMOTE_DIR)
    for (const file of PUBLIC_FILES) {
      if (fs.existsSync(file)) {
        const localPath = path.resolve(file)
        const remotePath = REMOTE_DIR + '/' + path.basename(file)
        if (fs.statSync(file).isDirectory()) {
          await client.ensureDir(remotePath)
          await uploadDir(client, localPath, remotePath)
        } else {
          await client.uploadFrom(localPath, remotePath)
          console.log('Subido:', remotePath)
        }
      }
    }
    console.log('¡Deploy por FTP completado!')
  } catch (err) {
    console.error('Error en deploy FTP:', err)
  }
  client.close()
}

main() 