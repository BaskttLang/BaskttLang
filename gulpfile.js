const gulp = require('gulp');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

// Path to the /dist directory and temporary build directory
const distDir = path.join(__dirname, './dist/bin');
const prgDir = path.join(__dirname, './dist');

// Task to create executables using pkg
gulp.task('build-exec', (done) => {
    // Create a temporary directory for packaging
    fs.emptyDirSync(prgDir);

    // Copy all files from /dist to /temp
    fs.copySync(distDir, prgDir);

    // Command to package the app using pkg
    exec(`pkg ${prgDir}/index.js --out ${distDir}/baskttlang`, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error: ${stderr}`);
            return done(err);
        }
        console.log(`Output: ${stdout}`);
        done();
    });
});

// Default task
gulp.task('default', gulp.series('build-exec'));
