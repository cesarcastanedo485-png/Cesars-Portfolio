# Run if npm install hits EPERM / ENOTEMPTY / corrupted node_modules (PowerShell).
# Stops Node, renames broken folder (does not delete — avoids "Access denied"), then fresh install.

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

$nm = Join-Path $root "node_modules"
if (Test-Path $nm) {
  $trash = Join-Path $root ("node_modules._trash_" + (Get-Date -Format "yyyyMMddHHmmss"))
  Rename-Item -LiteralPath $nm -NewName (Split-Path $trash -Leaf)
  Write-Host "Renamed node_modules -> $(Split-Path $trash -Leaf). Delete that folder later in Explorer if you want disk space."
}

Remove-Item -Force (Join-Path $root "package-lock.json") -ErrorAction SilentlyContinue
npm install
