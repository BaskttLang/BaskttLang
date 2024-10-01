#!/usr/bin/env pwsh

if (-not ((Get-CimInstance Win32_ComputerSystem)).SystemType -match "x64-based") {
  Write-Output "Install Failed:"
  Write-Output "Basktt for Windows is currently only available for x86 64-bit Windows.`n"
  return 1
}

npm install --global https://github.com/StumbDev/basktt.git
Write-host "Installation complete! restart your shell to start coding!"